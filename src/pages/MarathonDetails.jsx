
import { useContext, useEffect, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const MarathonDetails = () => {
  const { user } = useContext(AuthContext)
  const marathon = useLoaderData();
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

  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const now = new Date();
    setIsRegistrationOpen(
      new Date(start_registration_date) <= now && now <= new Date(end_registration_date)
    );
    
  }, [start_registration_date, end_registration_date]);

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;

    const email = form.email.value;
    const firstName = form.first_name.value;
    const lastName = form.last_name.value;
    const contactNumber = form.contact_number.value;
    const additionalInfo = form.additional_info.value;

    const registrationDetails = {
      marathon_title,
      marathon_start_date,
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
      .then((data) => {
        if (data.insertedId) {
          // Increment total registration count
          fetch(`${import.meta.env.VITE_API_URL}/marathon/${_id}`, {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ incrementCount: 1 }),
          })
            .then(() => {
              alert('Registration successful!');
              navigate('/my-apply');
            });
        }
      })
      .catch((error) => console.error('Error:', error));
  };

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white rounded-lg shadow-lg">
      <img src={photo} alt={marathon_title} className="w-full h-64 object-cover rounded-md" />
      <h1 className="text-3xl font-bold mt-4">{marathon_title}</h1>
      <p className="text-gray-600 mt-2">
        <span className="font-bold">Location:</span> {location}
      </p>
      <p className="text-gray-600">
        <span className="font-bold">Start Date:</span>{' '}
        {new Date(marathon_start_date).toLocaleDateString()}
      </p>
      <p className="text-gray-600">
        <span className="font-bold">Registration:</span>{' '}
        {new Date(start_registration_date).toLocaleDateString()} -{' '}
        {new Date(end_registration_date).toLocaleDateString()}
      </p>
      <p className="text-gray-600">
        <span className="font-bold">Description:</span> {description}
      </p>
      <p className="text-gray-600">
        <span className="font-bold">Total Registrations:</span> {total_registration_count}
      </p>

      {isRegistrationOpen ? (
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
      ) : (
        <p className="text-red-600 font-bold mt-4">
          Registration is closed for this marathon.
        </p>
      )}
    </div>
  );
};

export default MarathonDetails;
