import PropTypes from 'prop-types';
import { FaLink } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaArrowRightLong } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const ProjectsSec = ({ projects }) => {
    const my_projects = projects.slice(0, 3);
    return (
        <div className="w-11/12 rounded-2xl mx-auto shadow-xl md:mt-10 mt-6 lg:p-12 md:p-8 p-6">
            <h2 className="md:text-3xl text-2xl font-bold text-center">My Projects:</h2>
            <div className="grid lg:grid-cols-3 grid-cols-1 md:gap-4 gap-3 md:mt-6 mt-2">
                {my_projects.map((project) => (
                    <div key={project._id} className='bg-white rounded-2xl border group'>
                        <div className='overflow-hidden rounded-2xl border-b'>
                            <img src={project.project_img} alt="web template" className='w-full aspect-[3/2] content-center duration-300 group-hover:z-10 group-hover:scale-110' />
                        </div>
                        <div className='p-4'>
                            <h2><strong>Project Name:</strong> {project.project_name}</h2>
                            <div className='flex gap-1 mt-2'>
                                <a href={project.live_link} target="_blank" className='btn btn-sm flex-1 bg-[#007ABB] text-[#FFFFFF] hover:bg-[#005A8D]'><FaLink />Live Site</a>
                                <a href={project.github_link} target="_blank" className='btn btn-sm flex-1 bg-[#24292E] text-[#FFFFFF] hover:bg-[#3B444B]'><FaGithub />GitHub</a>
                            </div>
                            <Link to="/view-details" state={{ project }} className='btn btn-sm w-full mt-1 bg-[#062561] text-[#FFFFFF] hover:bg-[#0A3B92]'>View Details</Link>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex justify-end mt-6">
                <Link to="/my-projects" className='btn bg-[#062561] text-[#42F3F7] border-none hover:bg-[#007ABB]'>All Projects <FaArrowRightLong /></Link>
            </div>
        </div>
    );
};

ProjectsSec.propTypes = {
    projects: PropTypes.array.isRequired,
};

export default ProjectsSec;
