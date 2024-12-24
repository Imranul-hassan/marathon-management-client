import { useContext, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../provider/AuthProvider";
import Modal from 'react-modal';
import UpdateMyMarathon from "../components/UpdateMyMarathon";

const MyMarathon = () => {
    const myMarathon = useLoaderData();
    const { user } = useContext(AuthContext)

    const [marathons, setMarathons] = useState(myMarathon)

    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }
    // function afterOpenModal() {

    // }

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
                fetch(`${import.meta.env.VITE_API_URL}/marathon/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your marathon has been deleted.",
                                icon: "success"
                            })
                            const remaining = marathons.filter((marath) => marath._id !== _id);
                            setMarathons(remaining);
                        }
                    })
            }
        });
    }
    return (
        <div className="mb-10">
            <h2 className="text-2xl font-bold text-center p-5">My Marathons</h2>
            <div className="overflow-x-auto">
                <table className="table-auto w-full border-collapse border border-gray-300">
                    <thead>
                        <tr className="bg-slate-500 text-white">
                            <th className="border border-gray-300 px-3 py-2">Serial</th>
                            <th className="border border-gray-300 px-3 py-2">Photo</th>
                            <th className="border border-gray-300 px-3 py-2">Title</th>
                            <th className="border border-gray-300 px-3 py-2">Start Date</th>
                            <th className="border border-gray-300 px-3 py-2">Location</th>
                            <th className="border border-gray-300 px-3 py-2">Distance</th>
                            <th className="border border-gray-300 px-3 py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            marathons.map((marathon, index) => (
                                <tr key={marathon._id}>
                                    <td className="border border-gray-300 px-4 py-2 text-center">{index + 1}</td>
                                    <td className="border border-gray-300 px-4 py-2">
                                        <img
                                            src={marathon.photo}
                                            alt={marathon.marathon_title}
                                            className="w-16 h-16 object-cover rounded-md"
                                        />
                                    </td>
                                    <td className="border border-gray-300 px-3 py-2">{marathon.marathon_title}</td>
                                    <td className="border border-gray-300 px-3 py-2">{marathon.marathon_start_date}</td>
                                    <td className="border border-gray-300 px-3 py-2 text-center">{marathon.location}</td>
                                    <td className="border border-gray-300 px-3 py-2">{marathon.running_distance}</td>
                                    <td className="border border-gray-300 px-3 py-2">

                                        <button onClick={openModal} className="btn btn-sm bg-teal-600 text-white hover:bg-teal-600 rounded-md">
                                            Update
                                        </button>

                                        <button onClick={() => handleDelete(marathon._id)}
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
                <button onClick={closeModal}>close</button>
                <UpdateMyMarathon></UpdateMyMarathon>
            </Modal>

        </div>

    );
};

export default MyMarathon;