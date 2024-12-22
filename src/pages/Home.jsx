import { useLoaderData } from "react-router-dom";
import Carousel from "../components/Carousel";
import MarathonCard from "../components/MarathonCard";

const Home = () => {
    const marathons = useLoaderData()
    return (
        <div>
            <Carousel></Carousel>
            <div className="grid md:grid-cols-3 gap-4">
                {

                    marathons.map(marathon => <MarathonCard key={marathon._id} marathon={marathon}>

                    </MarathonCard>)

                }
            </div>
        </div>
    );
};

export default Home;