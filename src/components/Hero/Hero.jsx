import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Hero = () => {
    return (
        <div className="w-11/12 rounded-2xl mx-auto flex flex-col md:flex-row-reverse shadow-xl md:px-12 md:py-0 p-6 md:gap-12 gap-6 md:mt-10 mt-6">
            <div className="md:w-1/2 w-full">
                <img src="/assets/me.png" alt="my_img" className="w-full"/>
            </div>
            <div className="md:w-1/2 w-full flex flex-col justify-center gap-2">
                <h2 className="text-base">HI THERE! I’M</h2>
                <h2 className="text-2xl font-medium text-[#062561]">MD. MOTIUR RAHMAN</h2>
                <p className="text-base">A <span className="font-semibold text-[#062561]">Junior Front-End Web Developer</span> passionate about creating interactive application and experiences on the web.</p>
                <div className="flex md:gap-3 gap-2 mt-2 text-3xl lg:text-4xl">
                    <a href="https://www.facebook.com/md.motiur.rahman.383" target="_blank"><FaFacebook className="text-[#0866FF]"/></a>
                    <a href="https://www.linkedin.com/in/md-motiur-rahman-105598318/" target="_blank"><FaLinkedin className="text-[#0077B5]" /></a>
                    <a href="https://www.youtube.com/@ruitom.coder383" target="_blank"><FaYoutube className="text-[#FF0033]" /></a>
                    <a href="https://github.com/Motiur-Rahman-Dhrubo" target="_blank"><FaGithub /></a>
                </div>
                <div className="mt-2">
                    <a href="/assets/motiur.pdf" download="The-Resume" className='btn bg-[#062561] text-[#42F3F7] border-none hover:bg-[#007ABB]'>Download Resume</a>
                </div>
            </div>
        </div>
    );
};

export default Hero;