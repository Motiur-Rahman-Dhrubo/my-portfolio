import { FaFacebook, FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="md:mt-10 bg-[#F1F1F1] mt-6">
            <footer className="footer items-center py-4 w-11/12 mx-auto gap-6">
                <aside className="grid-flow-col items-center">
                    <Link to="/" className='hidden md:flex'><img className='w-[120px] h-12 rounded-md' src="/assets/logo.png" alt="logo" /></Link>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved by MD. Motiur Rahman</p>
                </aside>
                <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                    <div className="flex md:gap-3 gap-2 text-3xl lg:text-4xl">
                        <a href="https://www.facebook.com/md.motiur.rahman.383" target="_blank"><FaFacebook className="text-[#0866FF]" /></a>
                        <a href="https://www.linkedin.com/in/md-motiur-rahman-dhrubo/" target="_blank"><FaLinkedin className="text-[#0077B5]" /></a>
                        <a href="https://www.youtube.com/@ruitom.coder383" target="_blank"><FaYoutube className="text-[#FF0033]" /></a>
                        <a href="https://github.com/Motiur-Rahman-Dhrubo" target="_blank"><FaGithub /></a>
                    </div>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;