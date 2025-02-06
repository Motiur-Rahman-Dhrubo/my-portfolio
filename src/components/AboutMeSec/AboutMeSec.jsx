import { Link } from "react-router-dom";
import { FaQuoteLeft } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

const AboutMeSec = () => {
    return (
        <div className="w-11/12 rounded-2xl mx-auto shadow-xl bg-[#F1F1F1] md:mt-10 mt-6 lg:p-12 md:p-8 p-6">
            <h2 className="md:text-3xl text-2xl font-bold text-center">About Me:</h2>
            <div className="md:mt-6 mt-2 flex gap-4">
                <FaQuoteLeft className="text-9xl h-min min-w-6 text-yellow-500 hidden md:flex"/>
                <p className="md:text-lg lg:text-2xl text-base font-medium text-justify">Hi there! I’m a junior front-end web developer with a strong passion for creating interactive and visually captivating web experiences. I enjoy learning and exploring new technologies to bring fresh ideas to life.

                While my primary focus is on development, I also have a light involvement in social work and a deep appreciation for nature. These interests inspire me to stay grounded and creative in my journey.

                Let’s collaborate to build something meaningful!</p>
            </div>
            <div className="flex justify-end mt-6">
                <Link to="/about-me" className='btn bg-[#062561] text-[#42F3F7] border-none hover:bg-[#007ABB]'>Know More <FaArrowRightLong /></Link>
            </div>
        </div>
    );
};

export default AboutMeSec;