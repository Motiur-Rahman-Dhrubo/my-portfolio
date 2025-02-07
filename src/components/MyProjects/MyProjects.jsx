import { FaGithub, FaLink } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";

const MyProjects = () => {

    const my_projects = useLoaderData();

    return (
        <div className="w-11/12 mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-4 gap-3 md:mt-10 mt-6">
            {my_projects.map((project) => (
                <div key={project._id} className='bg-white rounded-2xl border group'>
                    <div className='overflow-hidden rounded-2xl border-b'>
                        <img src={project.project_img} alt="web template" className='w-full aspect-[3/2] object-center duration-300 group-hover:z-10 group-hover:scale-110' />
                    </div>
                    <div className='p-4'>
                        <h2><strong>Project Name:</strong> {project.project_name}</h2>
                        <div className='flex gap-2 mt-2'>
                            <a href={project.live_link} target="_blank" className='btn btn-sm btn-accent flex-1'><FaLink />Live Site</a>
                            <a href={project.github_link} target="_blank" className='btn btn-sm btn-secondary flex-1 text-black'><FaGithub />GitHub</a>
                        </div>
                        <Link to="/view-details" state={{ project }} className='btn btn-sm btn-primary w-full mt-2'>View Details</Link>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default MyProjects;