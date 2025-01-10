import banner from "../assets/marathon.jpg"
const AboutUs = () => {
    return (
        <div className="w-10/12 mx-auto my-3">
            <div className="w-10/12 mx-auto text-center ">
                <h3 className="font-bold text-xl">About Us</h3>
                <h1 className="font-semibold text-2xl md:text-4xl my-3 ">Connecting Communities Through Marathons</h1>
                <p>At Marathon Management System, we connect organizers and participants to foster unity and promote healthy lifestyles. Our seamless platform helps build stronger communities through marathons.</p>
            </div>
            <div className="md:flex my-10">
                <div className="md:w-1/2 pr-4 ">
                    <div className="md:flex-col  animate__animated animate__bounce">
                        <div className="bg-gradient-to-r from-purple-200 via-indigo-300 to-blue-400 rounded-md shadow-lg p-3">
                            <h1 className="font-bold text-lg  ">Our Mission</h1>
                            <p>Our mission is to empower organizers and participants with a user-friendly platform, bridging planning and participation. We inspire fitness goals and create unforgettable marathon experiences.</p>
                        </div>
                        <div className="bg-gradient-to-r from-purple-200 via-indigo-300 to-blue-400 rounded-md shadow-lg p-3 my-5">
                            <h1 className="font-bold text-lg">Why Choose Us?</h1>
                            <p>Choose us for an intuitive, secure platform offering comprehensive features like event creation, countdowns, and participant management. We're committed to fostering a vibrant running community.</p>
                        </div>
                        <div className="bg-gradient-to-r from-purple-200 via-indigo-300 to-blue-400 rounded-md shadow-lg p-3">
                            <h1 className="font-bold text-lg">What We Offer</h1>
                            <p>We offer organizers tools to easily create and manage marathon events while tracking registrations. Participants can explore, sign up, and manage their registrations effortlessly.</p>
                        </div>
                    </div>
                </div>

                <div className="md:w-1/2">
                    <img className="h-full rounded-lg" src={banner} alt="" />
                </div>
            </div>
        </div>
    );
};

export default AboutUs;