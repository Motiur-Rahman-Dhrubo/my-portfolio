import PropTypes from 'prop-types';
import { FaLink } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const ProjectsSec = ({ projects }) => {
    const my_projects = projects.slice(0, 3);
    return (
        <div className="w-11/12 rounded-2xl mx-auto shadow-xl md:mt-10 mt-6 lg:p-12 md:p-8 p-6 flex md:gap-4 gap-2">
            {my_projects.map((project) => (
                <div key={project._id} className='bg-white rounded-2xl'>
                    <img src={project.project_img} alt="web template" className='rounded-2xl w-full aspect-[5/3] border-b'/>
                    <div className='p-6'>
                        <div className='flex'>
                            <a href={project.live_link} target="_blank"><FaLink /></a>
                            <a href={project.github_link} target="_blank"><FaGithub /></a>
                        </div>
                        <button>View Details</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

ProjectsSec.propTypes = {
    projects: PropTypes.array.isRequired,
};

export default ProjectsSec;
