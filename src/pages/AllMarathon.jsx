import { useLoaderData } from "react-router-dom";
import MarathonCard from "../components/MarathonCard";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

const AllMarathon = () => {
    const initialMarathons = useLoaderData()
    const [marathons, setMarathons] = useState(initialMarathons);
    const [sortOrder, setSortOrder] = useState('desc');

    useEffect(() => {
        const fetchSortedMarathons = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_API_URL}/marathons?sort=${sortOrder}`);
                const data = await response.json();
                setMarathons(data);
            } catch (error) {
                console.error('Error fetching sorted marathons:', error);
            }
        };
        fetchSortedMarathons();
    }, [sortOrder]);

    return (
        <div className="w-10/12 mx-auto mb-4">
             <Helmet><title>Marathons | Marathon Management System</title></Helmet>
             <h2 className="text-2xl font-bold text-center p-5">All Marathons</h2>
            <div className=" mt-2 mb-4 font-semibold text-lg ">
                <select
                    id="sortOrder"
                    className="rounded-md p-2"
                    value={sortOrder}
                    onChange={(e) => setSortOrder(e.target.value)}
                >
                    <option value="desc">Newest to Oldest</option>
                    <option value="asc">Oldest to Newest</option>
                </select>
            </div>
            <div className="grid md:grid-cols-4 gap-3">
                {

                    marathons.map(marathon => <MarathonCard key={marathon._id} marathon={marathon}>

                    </MarathonCard>)

                }
            </div>
        </div>
    );
};

export default AllMarathon;