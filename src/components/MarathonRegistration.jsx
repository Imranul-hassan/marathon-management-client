import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";
import { Navigate, useLoaderData } from "react-router-dom";

const MarathonRegistration = () => {

    const { user } = useContext(AuthContext)
    const marathon = useLoaderData()
    const {
        _id,
        photo,
        marathon_title,
        location,
        start_registration_date,
        end_registration_date,
        marathon_start_date,
        description,
        total_registration_count,
    } = marathon;

    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;

        const email = form.email.value;
        const marathonTitle = form.marathon_title.value;
        const marathonStartDate = form.marathon_start_date.value;
        const firstName = form.first_name.value;
        const lastName = form.last_name.value;
        const contactNumber = form.contact_number.value;
        const additionalInfo = form.additional_info.value;

        const registrationDetails = {
            marathonTitle,
            marathonStartDate,
            email,
            firstName,
            lastName,
            contactNumber,
            additionalInfo,
        };

        fetch(`${import.meta.env.VITE_API_URL}/registrations`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(registrationDetails),
        })
            .then((res) => res.json())
            .catch((error) => console.error('Error:', error));
    };
    return (
        <div>

            <form onSubmit={handleRegister} className="mt-6">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                        <label className="block font-bold text-gray-600">Email</label>
                        <input
                            type="email"
                            name="email"
                            defaultValue={user?.email || ''}
                            readOnly
                            className="input input-bordered w-full"
                        />
                    </div>
                    <div>
                        <label className="block font-bold text-gray-600">Marathon Title</label>
                        <input
                            type="text"
                            defaultValue={marathon_title} readOnly
                            name="marathon_title"
                            placeholder="Marathon Title"
                            className="input input-bordered w-full"
                            required
                        />
                    </div>
                    <div>
                        <label className="block font-bold text-gray-600">Start Date</label>
                        <input
                            type="text"
                            defaultValue={marathon_start_date} readOnly
                            name="marathon_start_date"
                            placeholder="Start Date"
                            className="input input-bordered w-full"
                            required
                        />
                    </div>
                    <div>
                        <label className="block font-bold text-gray-600">First Name</label>
                        <input
                            type="text"
                            name="first_name"
                            placeholder="First Name"
                            className="input input-bordered w-full"
                            required
                        />
                    </div>
                    <div>
                        <label className="block font-bold text-gray-600">Last Name</label>
                        <input
                            type="text"
                            name="last_name"
                            placeholder="Last Name"
                            className="input input-bordered w-full"
                            required
                        />
                    </div>
                    <div>
                        <label className="block font-bold text-gray-600">Contact Number</label>
                        <input
                            type="text"
                            name="contact_number"
                            placeholder="Contact Number"
                            className="input input-bordered w-full"
                            required
                        />
                    </div>
                    <div className="sm:col-span-2">
                        <label className="block font-bold text-gray-600">Additional Info</label>
                        <textarea
                            name="additional_info"
                            placeholder="Any additional information"
                            className="textarea textarea-bordered w-full"
                        ></textarea>
                    </div>
                </div>
                <div className="mt-4">
                    <button
                        type="submit"
                        className="btn bg-teal-700 hover:bg-teal-600 text-white w-full"
                    >
                        Register
                    </button>
                </div>
            </form>

        </div>
    );
};

export default MarathonRegistration;