import { useContext } from 'react';
import Swal from 'sweetalert2'
import { AuthContext } from '../provider/AuthProvider';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';

const AddMarathon = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleAddMarathon = event => {
        event.preventDefault();
        const form = event.target;

        const photo = form.marathon_image.value;
        const marathon_title = form.marathon_title.value;
        const start_registration_date = form.start_registration_date.value;
        const end_registration_date = form.end_registration_date.value;
        const marathon_start_date = form.marathon_start_date.value;
        const location = form.location.value;
        const running_distance = form.running_distance.value;
        const description = form.description.value;
        const name = user?.displayName;
        const email = user?.email;
        const total_registration_count = 0 ;
        const createdAt = new Date();

        const newMarathon = {
            photo,
            marathon_title,
            start_registration_date,
            end_registration_date,
            marathon_start_date,
            location,
            running_distance,
            description,
            name,
            email,
            total_registration_count,
            createdAt
        };

        console.log(newMarathon);

        fetch(`${import.meta.env.VITE_API_URL}/marathon`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newMarathon)
            
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: 'sucess!',
                        text: 'Added successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    }).then(() => {  
                        navigate(`/all-marathon`);   
                    });  
                }
            })

    }
    return (
        <div className="bg-white text-black m-5 rounded-lg w-10/12 mx-auto shadow-md">
             <Helmet><title>Add Marathon | Marathon Management System</title></Helmet>
            <h3 className="text-2xl text-center font-bold py-2 text-black">Add New Marathon</h3>
            <form onSubmit={handleAddMarathon}>
                <div>
                    <div className="md:flex gap-3 p-5">
                        <div className="md:w-1/2">
                            <label className="font-bold text-black">Marathon Title</label>
                            <input
                                type="text"
                                placeholder="Marathon Title"
                                name="marathon_title"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>
                        <div className="md:w-1/2">
                            <label className="font-bold text-black">Marathon Image URL</label>
                            <input
                                type="text"
                                placeholder="Image URL"
                                name="marathon_image"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>
                    </div>
                    <div className="md:flex gap-3 p-5">
                        <div className="md:w-1/2">
                            <label className="font-bold text-black">Start Registration Date</label>
                            <input
                                type="date"
                                name="start_registration_date"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>
                        <div className="md:w-1/2">
                            <label className="font-bold text-black">End Registration Date</label>
                            <input
                                type="date"
                                name="end_registration_date"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>
                    </div>
                    <div className="md:flex gap-3 p-5">
                        <div className="md:w-1/2">
                            <label className="font-bold text-black">Marathon Start Date</label>
                            <input
                                type="date"
                                name="marathon_start_date"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>
                        <div className="md:w-1/2">
                            <label className="font-bold text-black">Location</label>
                            <input
                                type="text"
                                placeholder="Location"
                                name="location"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>
                    </div>
                    <div className="md:flex gap-3 p-5">
                        <div className="md:w-1/2">
                            <label className="font-bold text-black">Running Distance</label>
                            <select
                                name="running_distance"
                                className="input input-bordered w-full"
                                required
                            >
                                <option value="" disabled selected>Select Distance</option>
                                <option value="25k">25k</option>
                                <option value="10k">10k</option>
                                <option value="3k">3k</option>
                            </select>
                        </div>
                        <div className="md:w-1/2">
                            <label className="font-bold text-black">Description</label>
                            <input
                                placeholder="Description"
                                name="description"
                                className="input input-bordered w-full"
                                required
                            ></input>
                        </div>
                    </div>
                </div>
                <div className="p-5">
                    <input
                        type="submit"
                        value="Add New Marathon"
                        className="btn btn-block bg-[#2c598d] hover:bg-[#1a3553] mb-4 text-white"
                    />
                </div>
            </form>
        </div>

    );
};

export default AddMarathon;