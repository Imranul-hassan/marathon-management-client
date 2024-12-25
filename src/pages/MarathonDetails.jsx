
import { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';

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

  const calculateTimeLeft = () => {
    const eventTime = new Date(marathon_start_date).getTime();
    const currentTime = Date.now();
    return Math.max((eventTime - currentTime) / 1000, 0); // Time left in seconds
  };

  const getTimeBreakdown = (remainingTime) => {
    const days = Math.floor(remainingTime / (24 * 3600));
    const hours = Math.floor((remainingTime % (24 * 3600)) / 3600);
    const minutes = Math.floor((remainingTime % 3600) / 60);
    return { days, hours, minutes };
  };

  return (
    <div className="w-9/12 p-5 m-6 mx-auto bg-white rounded-lg shadow-lg">

      <div className=' md:flex gap-6'>
        <div className=''> <img src={photo} alt={marathon_title} className="w-full h-64 object-cover rounded-md" /></div>
        <div>
          <h1 className="text-3xl font-bold mt-4">{marathon_title}</h1>
          <p className="text-gray-600 mt-2">
            <span className="font-bold">Location:</span> {location}
          </p>
          <p className="text-gray-600">
            <span className="font-bold">Start Date:</span>{' '}
            {new Date(marathon_start_date).toLocaleDateString()}
          </p>
          <p className="text-gray-600">
            <span className="font-bold">Registration Start Date:</span>{' '}
            {new Date(start_registration_date).toLocaleDateString()} 
          </p>
          <p className="text-gray-600">
            <span className="font-bold">Registration End Date:</span>{' '}
            {new Date(end_registration_date).toLocaleDateString()}
          </p>
          <p className="text-gray-600">
            <span className="font-bold">Description:</span> {description}
          </p>
          <p className="text-gray-600">
            <span className="font-bold">Total Registrations:</span> {total_registration_count}
          </p>
        </div>
      </div>

      <h3 className="text-2xl font-bold text-center mt-7">Countdown to Marathon Start </h3>
      <div className="mt-4 md:flex space-x-2 items-center justify-center">
        <div className="flex flex-col items-center">
          <h3 className="text-xl font-bold mb-2">Days</h3>
          <CountdownCircleTimer
            isPlaying
            duration={calculateTimeLeft()}
            initialRemainingTime={calculateTimeLeft()}
            colors={['#4CAF50']}
            size={100}
          >
            {({ remainingTime }) => {
              const { days } = getTimeBreakdown(remainingTime);
              return (
                <div className="text-center">
                  <div className="text-2xl font-bold">{days}</div>
                </div>
              );
            }}
          </CountdownCircleTimer>
        </div>

        <div className="flex flex-col items-center">
          <h3 className="text-xl font-bold mb-2">Hours</h3>
          <CountdownCircleTimer
            isPlaying
            duration={calculateTimeLeft()}
            initialRemainingTime={calculateTimeLeft()}
            colors={['#F7B801']}
            size={100}
          >
            {({ remainingTime }) => {
              const { hours } = getTimeBreakdown(remainingTime);
              return (
                <div className="text-center">
                  <div className="text-2xl font-bold">{hours}</div>
                </div>
              );
            }}
          </CountdownCircleTimer>
        </div>

        <div className="flex flex-col items-center">
          <h3 className="text-xl font-bold mb-2">Minutes</h3>
          <CountdownCircleTimer
            isPlaying
            duration={calculateTimeLeft()}
            initialRemainingTime={calculateTimeLeft()}
            colors={['#FF0000']}
            size={100}
          >
            {({ remainingTime }) => {
              const { minutes } = getTimeBreakdown(remainingTime);
              return (
                <div className="text-center">
                  <div className="text-2xl font-bold">{minutes}</div>
                </div>
              );
            }}
          </CountdownCircleTimer>
        </div>
      </div>

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
