import marathon from "../assets/marathon-1.webp"
import marathon2 from "../assets/marathon-2.webp"
import run from "../assets/run-1.jpg"
import run2 from "../assets/run-2.jpg"
import run3 from "../assets/sun-3.jpg"
import run4 from "../assets/run-4.jpg"

const UpcomingMarathon = () => {
    return (
        <div>
            <div className="my-10 ">
                <div className=" pr-4">
                    <div className="w-9/12 mx-auto text-center ">
                        <h1 className="font-semibold text-2xl md:text-3xl my-3 ">Your Next Challenge Awaits – Upcoming Marathons</h1>
                        <p>Find upcoming marathons, join exciting races, and challenge yourself to achieve new milestones. Whether you're a seasoned runner or a beginner, there's a race for you!"</p>
                    </div>
                    <div className=" md:grid grid-cols-3 mt-6 gap-3 animate__animated animate__bounce animate__delay-1s ">

                        <div className="bg-blue-100 hover:bg-gray-300 shadow-lg p-3 rounded-lg">
                            <div>
                                <img className="w-full h-44 rounded-md" src={run2} alt="" />
                            </div>
                            <h1 className="font-bold text-lg text-[#1D3557] mt-5 mb-2">Annual Marathon 2024</h1>
                            <p className="text-sm text-gray-500 mt-2">
                                <span className="font-bold">Registration Start: 12/14/2024</span>
                            </p>
                            <p className="text-sm text-gray-500 mt-2">
                                <span className="font-bold">Registration End: 12/30/2024</span>
                            </p>
                            <p className="text-sm text-gray-500 mt-2">
                                <span className="font-bold">Marathon Start: 02/14/2025</span>
                            </p>
                        </div>
                        <div className="bg-blue-100 shadow-lg p-3 rounded-lg">
                            <div>
                                <img className="w-full h-44 rounded-md" src={run} alt="" />
                            </div>
                            <h1 className="font-bold text-lg text-[#1D3557] mt-5 mb-2">Urban Adventure Race 2024</h1>
                            <p className="text-sm text-gray-500 mt-2">
                                <span className="font-bold">Registration Start: 12/15/2024</span>
                            </p>
                            <p className="text-sm text-gray-500 mt-2">
                                <span className="font-bold">Registration End: 12/24/2024</span>
                            </p>
                            <p className="text-sm text-gray-500 mt-2">
                                <span className="font-bold">Marathon Start: 12/29/2024</span>
                            </p>
                        </div>

                        <div className="bg-blue-100 shadow-lg p-3 rounded-lg ">
                        <div>
                                <img className="w-full h-44 rounded-md" src={marathon2} alt="" />
                            </div>
                            <h1 className="font-bold text-lg text-[#1D3557] mt-5 mb-2">City Strides Marathon</h1>
                            <p className="text-sm text-gray-500 mt-2">
                                <span className="font-bold">Registration Start: 12/14/2024</span>
                            </p>
                            <p className="text-sm text-gray-500 mt-2">
                                <span className="font-bold">Registration End: 12/28/2024</span>
                            </p>
                            <p className="text-sm text-gray-500 mt-2">
                                <span className="font-bold">Marathon Start: 01/18/2025</span>
                            </p>
                        </div>
                        <div className="bg-blue-100 shadow-lg p-3 rounded-lg">
                            <div>
                                <img className="w-full h-44 rounded-md" src={run3} alt="" />
                            </div>
                            <h1 className="font-bold text-lg text-[#1D3557] mt-5 mb-2">Heart & Sole Marathon</h1>
                            <p className="text-sm text-gray-500 mt-2">
                                <span className="font-bold">Registration Start: 12/14/2024</span>
                            </p>
                            <p className="text-sm text-gray-500 mt-2">
                                <span className="font-bold">Registration End: 12/22/2024</span>
                            </p>
                            <p className="text-sm text-gray-500 mt-2">
                                <span className="font-bold">Marathon Start: 01/12/2025</span>
                            </p>
                        </div>
                        <div className="bg-blue-100 shadow-lg p-3 rounded-lg">
                            <div>
                                <img className="w-full h-44 rounded-md" src={marathon} alt="" />
                            </div>
                            <h1 className="font-bold text-lg text-[#1D3557] mt-5 mb-2">Chasing Horizons 2024</h1>
                            <p className="text-sm text-gray-500 mt-2">
                                <span className="font-bold">Registration Start: 12/14/2024</span>
                            </p>
                            <p className="text-sm text-gray-500 mt-2">
                                <span className="font-bold">Registration End: 12/14/2024</span>
                            </p>
                            <p className="text-sm text-gray-500 mt-2">
                                <span className="font-bold">Marathon Start: 12/29/2024</span>
                            </p>
                        </div>
                        <div className="bg-blue-100 shadow-lg p-3 rounded-lg">
                            <div>
                                <img className="w-full h-44 rounded-md" src={run4} alt="" />
                            </div>
                            <h1 className="font-bold text-lg text-[#1D3557] mt-5 mb-2">Peak Performance Race</h1>
                            <p className="text-sm text-gray-500 mt-2">
                                <span className="font-bold">Registration Start: 12/14/2024</span>
                            </p>
                            <p className="text-sm text-gray-500 mt-2">
                                <span className="font-bold">Registration End: 12/14/2024</span>
                            </p>
                            <p className="text-sm text-gray-500 mt-2">
                                <span className="font-bold">Marathon Start: 12/28/2024</span>
                            </p>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default UpcomingMarathon;