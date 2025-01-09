import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const UpdateMyApply = () => {
    const updateApply = useLoaderData()
    const {
        _id,
        marathonTitle,
        marathonStartDate,
        email,
        firstName,
        lastName,
        contactNumber,
        additionalInfo, } = updateApply
    const { user } = useContext(AuthContext)

    const updateRegister = (event) => {
        event.preventDefault();
        const form = event.target;

        const email = form.email.value;
        const marathonTitle = form.marathon_title.value;
        const marathonStartDate = form.marathon_start_date.value;
        const firstName = form.first_name.value;
        const lastName = form.last_name.value;
        const contactNumber = form.contact_number.value;
        const additionalInfo = form.additional_info.value;

        const updateRegistration = {
            email,
            marathonTitle,
            marathonStartDate,
            firstName,
            lastName,
            contactNumber,
            additionalInfo,
        };

        fetch(`${import.meta.env.VITE_API_URL}/registration/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateRegistration)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'sucess!',
                        text: 'Updated My Apply successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })

    };
    return (
        <div className="bg-white w-10/12 mx-auto shadow-lg m-5 rounded-lg p-5">
            <Helmet><title>Update My Apply | Marathon Management System</title></Helmet>
            <h3 className="text-2xl text-center font-bold py-2 text-black">Update MY Apply</h3>

            <form onSubmit={updateRegister} className="mt-3">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                        <label className="block font-bold text-black">Email</label>
                        <input
                            type="email"
                            name="email"
                            defaultValue={user?.email || ''}
                            readOnly
                            className="input input-bordered w-full"
                        />
                    </div>
                    <div>
                        <label className="block font-bold text-black">Marathon Title</label>
                        <input
                            type="text"
                            defaultValue={marathonTitle} readOnly
                            name="marathon_title"
                            placeholder="Marathon Title"
                            className="input input-bordered w-full"
                            required
                        />
                    </div>
                    <div>
                        <label className="block font-bold text-black">Start Date</label>
                        <input
                            type="text"
                            defaultValue={marathonStartDate} readOnly
                            name="marathon_start_date"
                            placeholder="Start Date"
                            className="input input-bordered w-full"
                            required
                        />
                    </div>
                    <div>
                        <label className="block font-bold text-black">First Name</label>
                        <input
                            type="text"
                            defaultValue={firstName}
                            name="first_name"
                            placeholder="First Name"
                            className="input input-bordered w-full"
                            required
                        />
                    </div>
                    <div>
                        <label className="block font-bold text-black">Last Name</label>
                        <input
                            type="text"
                            defaultValue={lastName}
                            name="last_name"
                            placeholder="Last Name"
                            className="input input-bordered w-full"
                            required
                        />
                    </div>
                    <div>
                        <label className="block font-bold text-black">Contact Number</label>
                        <input
                            type="text"
                            defaultValue={contactNumber}
                            name="contact_number"
                            placeholder="Contact Number"
                            className="input input-bordered w-full"
                            required
                        />
                    </div>
                    <div className="sm:col-span-2">
                        <label className="block font-bold text-black">Additional Info</label>
                        <textarea
                            name="additional_info"
                            defaultValue={additionalInfo}
                            placeholder="Any additional information"
                            className="textarea textarea-bordered w-full"
                        ></textarea>
                    </div>
                </div>
                <div className="mt-4">
                    <button
                        type="submit"
                        className="btn bg-[#2c598d] hover:bg-[#1a3553] text-white w-full"
                    >
                        Update My Apply
                    </button>
                </div>
            </form>
        </div>

    );
};

export default UpdateMyApply;