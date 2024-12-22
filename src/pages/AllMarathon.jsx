import { useLoaderData } from "react-router-dom";
import MarathonCard from "../components/MarathonCard";

const AllMarathon = () => {
    const marathons = useLoaderData()
    return (
        <div>
            <div className="grid md:grid-cols-3 gap-4">
                {

                    marathons.map(marathon => <MarathonCard key={marathon._id} marathon={marathon}>

                    </MarathonCard>)

                }
            </div>
        </div>
    );
};

export default AllMarathon;