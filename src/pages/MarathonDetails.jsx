
import { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData} from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import toast from 'react-hot-toast'

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
 
  useEffect(() => {
    const now = new Date();
    setIsRegistrationOpen(
      new Date(start_registration_date) <= now && now <= new Date(end_registration_date)
    );
    
  }, [start_registration_date, end_registration_date]);

 

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
          <div className="mt-4">
           <Link to={`/registration/${_id}`}> <button className="btn bg-teal-700 hover:bg-teal-600 text-white w-full" >Register </button></Link>
          </div>
      ) : (
        <p className="text-red-600 font-bold mt-4">
          Registration is closed for this marathon.
        </p>
      )} 
     
    </div>
  );
};

export default MarathonDetails;
