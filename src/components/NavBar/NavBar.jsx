import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {

    const links = <>
        <li><NavLink className='py-1 px-3' to="/">Home</NavLink></li>
        <li><NavLink className='py-1 px-3' to="/about-me">About Me</NavLink></li>
        <li><NavLink className='py-1 px-3' to="/my-projects">My Projects</NavLink></li>
    </>

    return (
        <nav className='w-full sticky top-0 shadow-xl backdrop-blur-md border-b border-[#C4C6CA] z-50'>
            <div className="navbar w-11/12 mx-auto px-0">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost shadow-lg mr-2 lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <Link to="/" className='hidden md:flex'><img className='w-[120px] h-12 rounded-md' src="/assets/logo.png" alt="logo" /></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-2">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a href="/assets/motiur.pdf" download="The-Resume" className='btn bg-[#062561] text-[#42F3F7] border-none hover:bg-[#007ABB]'>Download Resume</a>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;