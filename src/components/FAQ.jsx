
const FAQ = () => {
    return (
        <div id="faq" className=" p-5 my-10 ">
            <div className="md:w-7/12 mx-auto mb-7">
                <h1 className="font-bold text-3xl text-center">Quick Answers for a Seamless Experience</h1>
                <p className="mt-4 w-9/12 text-center mx-auto">Explore answers to frequently asked questions and make the most of your crowdfunding experience.</p>
            </div>
            <div className="md:w-8/12 mx-auto ">
                <div className="collapse collapse-arrow bg-gray-200">
                    <input type="radio" name="my-accordion-2" defaultChecked />
                    <div className="collapse-title text-xl font-medium">How can I register for a marathon?</div>
                    <div className="collapse-content">
                        <p>You can register by clicking on the "Register" button on the marathon details page. Fill out the registration form and submit it to confirm your participation.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-gray-200  my-5">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium"> Can I update my registration details after submission?</div>
                    <div className="collapse-content">
                        <p> Yes, you can update your registration details from the "My Apply" section on your dashboard. </p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-gray-200">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium"> How do I create a new marathon event?</div>
                    <div className="collapse-content">
                        <p>
                        Log in, go to "My Marathons," and click "Add Marathon" to create a new event.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-gray-200  my-5">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium"> How can I view my applied marathons?</div>
                    <div className="collapse-content">
                        <p>Go to the "My Apply" section in your dashboard to see the list of marathons you've registered for, along with their details.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-gray-200 mb-10">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">Can I access the platform on mobile devices?</div>
                    <div className="collapse-content">
                        <p>Yes, the platform is fully responsive and optimized for mobile, tablet, and desktop devices.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;