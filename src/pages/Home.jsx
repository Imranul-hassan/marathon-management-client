import { useLoaderData } from "react-router-dom";
import Carousel from "../components/Carousel";
import { Helmet } from "react-helmet-async";
import UpcomingMarathon from "../components/UpcomingMarathon";
import FAQ from "../components/FAQ";
import Impact from "../components/Impact";

import MarathonCard from "../components/MarathonCard";

const Home = () => {
    const marathons = useLoaderData()
    return (
        <div>
            <Helmet><title>Home | Marathon Management System</title></Helmet>
            <Carousel></Carousel>
            <div className=" w-10/12 mx-auto">
                <div>
                    <div className="w-9/12 mx-auto text-center mb-8">
                        <h1 className="font-semibold text-3xl md:text-4xl my-3 ">Run Towards Your Goals</h1>
                        <p className="md:text-lg ">Discover exciting marathon events tailored for all fitness levels. Whether you're aiming to conquer your first 5K or a full marathon, join a community of passionate runners and take the next step towards your goals. </p>
                    </div>
                    <div className="grid md:grid-cols-4 gap-3">
                        {

                            marathons.map(marathon => <MarathonCard key={marathon._id} marathon={marathon}>

                            </MarathonCard>)

                        }
                    </div>

                </div>
                <UpcomingMarathon></UpcomingMarathon>
                <FAQ></FAQ>
                <Impact></Impact>
            </div>
        </div>
    );
};

export default Home;