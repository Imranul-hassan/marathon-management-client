
import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../provider/AuthProvider";
import Modal from 'react-modal';
import UpdateMyApply from "../components/UpdateMyApply";
import axios from "axios";
import { Link } from "react-router-dom";

const MyApply = () => {
    // const myApply = useLoaderData();
    const { user } = useContext(AuthContext)
    const [applies, setApplies] = useState([])
    const [search, setSearch] = useState('')
    const [modalIsOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const fetchRegistrations = async () => {
            // try {
            //     const { data } = await axios.get(
            //         `${import.meta.env.VITE_API_URL}/my-apply/${user.email}?search=${search}`,
            //         {
            //             withCredentials: true, 
            //         }
            //     );
            //     setApplies(data); 
            // } catch (error) {
            //     console.error("Error fetching registrations:", error); 
            // }
            const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/my-apply/${user.email}?search=${search}`,{
                withCredentials: true
            })
            setApplies(data)
        };
        fetchRegistrations();
    }, [search, user.email]);

    // useEffect(()=>{
    //     axios.get(` https://marathon-management-server-zeta.vercel.app/my-apply/${user.email}`,{
    //         withCredentials: true
    //     })
    //     .then(res => setApplies(res.data))
    // },[user.email])

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    const customStyles = {
        content: { padding: '20px', maxWidth: 'auto', margin: 'auto' },
        overlay: { backgroundColor: 'rgba(0, 0, 0, 0.75)' },
    };


    const handleDelete = (_id) => {
        console.log(_id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`${import.meta.env.VITE_API_URL}/apply/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your apply has been deleted.",
                                icon: "success"
                            })
                            const remaining = applies.filter((app) => app._id !== _id);
                            setApplies(remaining);
                        }
                    })
            }
        });
    }
    return (
        <div className="mb-10">
            <h2 className="text-2xl font-bold text-center p-5">My Apply</h2>
            <input
                type="text"
                className="border-2 m-2"
                name="search"
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Enter text here..."
            />

            <div className="overflow-x-auto">
                <table className="table-auto w-full border-collapse border border-gray-300">
                    <thead>
                        <tr className="bg-slate-500 text-white">
                            <th className="border border-gray-300 px-3 py-2">Serial</th>
                            <th className="border border-gray-300 px-3 py-2">Title</th>
                            <th className="border border-gray-300 px-3 py-2">Start Date</th>
                            <th className="border border-gray-300 px-3 py-2">Name</th>
                            <th className="border border-gray-300 px-3 py-2">Contact</th>
                            <th className="border border-gray-300 px-3 py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            applies.map((apply, index) => (
                                <tr key={apply._id}>
                                    <td className="border border-gray-300 px-4 py-2 text-center">{index + 1}</td>
                                    <td className="border border-gray-300 px-3 py-2">{apply.marathonTitle}</td>
                                    <td className="border border-gray-300 px-3 py-2">{apply.marathonStartDate}</td>
                                    <td className="border border-gray-300 px-3 py-2 text-center">{apply.lastName}</td>
                                    <td className="border border-gray-300 px-3 py-2">{apply.contactNumber}</td>
                                    <td className="border border-gray-300 px-3 py-2">

                                        <Link to={`/my-apply/${user?.email}/update-apply/${apply._id}`}> <button onClick={openModal} className="btn btn-sm bg-teal-600 text-white hover:bg-teal-600 rounded-md">
                                            Update
                                        </button></Link>

                                        <button onClick={() => handleDelete(apply._id)}
                                            className="btn btn-sm bg-red-500 text-white hover:bg-red-600 rounded-md">
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))

                        }
                    </tbody>
                </table>
            </div>
            <Modal
                isOpen={modalIsOpen}
                // onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <UpdateMyApply ></UpdateMyApply>
                <button onClick={closeModal}>close</button>

            </Modal>
        </div>

    );
};

export default MyApply;