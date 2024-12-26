
import { useContext } from 'react';
import Swal from 'sweetalert2'
import { AuthContext } from '../provider/AuthProvider';
import { useLoaderData } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const UpdateMyMarathon = () => {

    const updatemarathon = useLoaderData()
    const {
        _id,
        marathon_title,
        photo,
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
    } = updatemarathon;
    console.log(updatemarathon)

    const { user } = useContext(AuthContext);

    const handleUpdateMarathon = event => {
        event.preventDefault();
        const form = event.target;

        const marathon_title = form.marathon_title.value;
        const photo = form.marathon_image.value;
        const start_registration_date = form.start_registration_date.value;
        const end_registration_date = form.end_registration_date.value;
        const marathon_start_date = form.marathon_start_date.value;
        const location = form.location.value;
        const running_distance = form.running_distance.value;
        const description = form.description.value;

        const updateMarathon = {
            marathon_title,
            photo,
            start_registration_date,
            end_registration_date,
            marathon_start_date,
            location,
            running_distance,
            description,
        
        };

        fetch(`${import.meta.env.VITE_API_URL}/marathon/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateMarathon)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.modifiedCount > 0){
                    Swal.fire({
                        title: 'sucess!',
                        text: 'Marathon updated successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })


    }
    return (
        <div className="bg-slate-700 m-5 rounded-lg ">
             <Helmet><title>Update Marathon | Marathon Management System</title></Helmet>
            <h3 className="text-2xl text-center font-bold py-2 text-white">Update Marathon</h3>

            <form onSubmit={handleUpdateMarathon}>
                <div>
                    <div className="md:flex gap-3 p-5">
                        <div className="md:w-1/2">
                            <label className="font-bold text-white">Marathon Title</label>
                            <input
                                type="text"
                                defaultValue={marathon_title}
                                placeholder="Marathon Title"
                                name="marathon_title"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>
                        <div className="md:w-1/2">
                            <label className="font-bold text-white">Marathon Image URL</label>
                            <input
                                type="text"
                                defaultValue={photo}
                                placeholder="Image URL"
                                name="marathon_image"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>
                    </div>
                    <div className="md:flex gap-3 p-5">
                        <div className="md:w-1/2">
                            <label className="font-bold text-white">Start Registration Date</label>
                            <input
                                type="date"
                                defaultValue={start_registration_date}
                                name="start_registration_date"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>
                        <div className="md:w-1/2">
                            <label className="font-bold text-white">End Registration Date</label>
                            <input
                                type="date"
                                defaultValue={end_registration_date}
                                name="end_registration_date"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>
                    </div>
                    <div className="md:flex gap-3 p-5">
                        <div className="md:w-1/2">
                            <label className="font-bold text-white">Marathon Start Date</label>
                            <input
                                type="date"
                                defaultValue={marathon_start_date}
                                name="marathon_start_date"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>
                        <div className="md:w-1/2">
                            <label className="font-bold text-white">Location</label>
                            <input
                                type="text"
                                defaultValue={location}
                                placeholder="Location"
                                name="location"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>
                    </div>
                    <div className="md:flex gap-3 p-5">
                        <div className="md:w-1/2">
                            <label className="font-bold text-white">Running Distance</label>
                            <select
                                name="running_distance"
                                defaultValue={running_distance}
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
                            <label className="font-bold text-white">Description</label>
                            <textarea
                                defaultValue={description}
                                placeholder="Description"
                                name="description"
                                className="textarea-bordered w-full rounded-md"
                                required
                            ></textarea>
                        </div>
                    </div>
                </div>
                <div className="p-5">
                    <input
                        type="submit"
                        value="Update Marathon"
                        className="btn btn-block bg-[#2c598d] hover:bg-[#1a3553] mb-4 text-white"
                    />
                </div>
            </form>
        </div>




    );
};

export default UpdateMyMarathon;