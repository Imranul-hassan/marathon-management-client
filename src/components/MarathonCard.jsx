import { Link } from "react-router-dom";

const MarathonCard = ({ marathon }) => {
    const {
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
    } = marathon

    return (
        <div>
            <div className="card bg-white shadow-2xl rounded-md mb-3">
                <figure className="w-full h-48 p-4">
                    <img
                        src={photo}
                        alt={marathon_title}
                        className="w-full h-full rounded-lg object-cover"
                    />
                </figure>
                <div className="card-body p-6">
                    <h2 className="card-title text-xl font-bold text-gray-800">
                        {marathon_title}
                    </h2>
                    <p className="text-sm text-gray-700 mt-2">
                        <span className="font-bold">Location:</span> {location}
                    </p>
                    <p className="text-sm text-gray-700 mt-2">
                        <span className="font-bold">Registration Start:</span>{" "}
                        {new Date(start_registration_date).toLocaleDateString()}
                    </p>
                    <p className="text-sm text-gray-700">
                        <span className="font-bold">Registration End:</span>{" "}
                        {new Date(end_registration_date).toLocaleDateString()}
                    </p>
                    
                    <div className="card-actions mt-4">
                        <Link to={`/marathon-details/${marathon._id}`}>
                            <button className="text-base btn text-white bg-[#264261] hover:bg-[#2c598d] rounded-full py-2 px-14">
                                See Details
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default MarathonCard;