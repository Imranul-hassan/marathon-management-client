import marathon from "../assets/marathon-1.webp"
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

                        <div className="bg-blue-300 shadow-lg p-3 rounded-lg">
                            <div>
                                <img className="w-full h-44 rounded-md" src={marathon} alt="" />
                            </div>
                            <h1 className="font-bold text-lg text-[#1D3557] mt-5 mb-2">Annual Marathon 2024</h1>
                            <p className="text-sm text-gray-500 mt-2">
                                <span className="font-bold">Registration Start: 12/14/2024</span>
                            </p>
                            <p className="text-sm text-gray-500 mt-2">
                                <span className="font-bold">Registration End: 12/14/2024</span>
                            </p>
                            <p className="text-sm text-gray-500 mt-2">
                                <span className="font-bold">Marathon Start: 12/14/2024</span>
                            </p>
                        </div>
                        <div className="bg-purple-200 shadow-lg p-3 rounded-lg">
                            <div>
                                <img className="w-full h-44 rounded-md" src={marathon} alt="" />
                            </div>
                            <h1 className="font-bold text-lg text-[#1D3557] mt-5 mb-2">Creative Ideas</h1>
                            <p>Turn your passion into impact by funding projects like  art, novels, apps, and more.</p>
                        </div>

                        <div className="bg-orange-300 shadow-lg p-3 rounded-lg ">
                            <div>
                                <img className="w-full h-44 rounded-md" src={marathon} alt="" />
                            </div>
                            <h1 className="font-bold text-lg text-[#1D3557] mt-5 mb-2">Startups</h1>
                            <p>Transform innovative ideas into thriving businesses with community-driven funding.</p>
                        </div>
                        <div className="bg-blue-300 shadow-lg p-3 rounded-lg">
                            <div>
                                <img className="w-full h-44 rounded-md" src={marathon} alt="" />
                            </div>
                            <h1 className="font-bold text-lg text-[#1D3557] mt-5 mb-2">Annual Marathon 2024</h1>
                            <p className="text-sm text-gray-500 mt-2">
                                <span className="font-bold">Registration Start: 12/14/2024</span>
                            </p>
                            <p className="text-sm text-gray-500 mt-2">
                                <span className="font-bold">Registration End: 12/14/2024</span>
                            </p>
                            <p className="text-sm text-gray-500 mt-2">
                                <span className="font-bold">Marathon Start: 12/14/2024</span>
                            </p>
                        </div>
                        <div className="bg-blue-300 shadow-lg p-3 rounded-lg">
                            <div>
                                <img className="w-full h-44 rounded-md" src={marathon} alt="" />
                            </div>
                            <h1 className="font-bold text-lg text-[#1D3557] mt-5 mb-2">Annual Marathon 2024</h1>
                            <p className="text-sm text-gray-500 mt-2">
                                <span className="font-bold">Registration Start: 12/14/2024</span>
                            </p>
                            <p className="text-sm text-gray-500 mt-2">
                                <span className="font-bold">Registration End: 12/14/2024</span>
                            </p>
                            <p className="text-sm text-gray-500 mt-2">
                                <span className="font-bold">Marathon Start: 12/14/2024</span>
                            </p>
                        </div>
                        <div className="bg-blue-300 shadow-lg p-3 rounded-lg">
                            <div>
                                <img className="w-full h-44 rounded-md" src={marathon} alt="" />
                            </div>
                            <h1 className="font-bold text-lg text-[#1D3557] mt-5 mb-2">Annual Marathon 2024</h1>
                            <p className="text-sm text-gray-500 mt-2">
                                <span className="font-bold">Registration Start: 12/14/2024</span>
                            </p>
                            <p className="text-sm text-gray-500 mt-2">
                                <span className="font-bold">Registration End: 12/14/2024</span>
                            </p>
                            <p className="text-sm text-gray-500 mt-2">
                                <span className="font-bold">Marathon Start: 12/14/2024</span>
                            </p>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default UpcomingMarathon;