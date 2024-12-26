import { NavLink } from "react-router-dom";

const Impact = () => {
    return (
        <div>
            <section className="bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 p-12 mb-10 rounded-lg">
                <div className="container mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-6">Our Impact So Far</h2>
                    <p className="text-lg mb-10">
                        Together, we’ve inspired fitness, built communities, and supported countless causes.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white shadow-lg p-6 rounded-lg">
                            <div className="text-5xl font-extrabold text-orange-600">100+</div>
                            <p className="font-semibold mt-2">Marathons Organized</p>
                        </div>
                        <div className="bg-white shadow-lg p-6 rounded-lg">
                            <div className="text-5xl font-extrabold text-orange-600">50,00+</div>
                            <p className="font-semibold mt-2">Participants Engaged</p>
                        </div>
                        <div className="bg-white shadow-lg p-6 rounded-lg">
                            <div className="text-5xl font-extrabold text-orange-600">10,00+</div>
                            <p className="font-semibold mt-2">Miles Run Collectively</p>
                        </div>
                    </div>

                    <div className="mt-10">
                        <blockquote className="italic text-lg text-gray-700">
                            "Participating in a marathon changed my life – it’s more than a race; it’s a movement of hope and resilience." — A Participant
                        </blockquote>
                    </div>

                    <div className="mt-8">
                        <NavLink to="/all-marathon">
                            <button className="bg-orange-600 text-white py-2 px-6 rounded-full shadow-md hover:bg-orange-700">
                                Explore Marathons
                            </button>
                        </NavLink>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Impact;