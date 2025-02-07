// import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";

const ViewDetails = () => {

    const location = useLocation();
    const { project } = location.state || {};

    console.log(project);

    return (
        <div className="w-11/12 max-w-[800px] rounded-2xl mx-auto shadow-xl md:mt-10 mt-6 lg:p-12 md:p-8 md:text-lg text-base">
            <img src={project.project_img} alt="web template" className='w-full aspect-[2/1] border md:border-black rounded-2xl' />
            <div className="md:p-0 p-6">
                <h2 className="md:mt-6"><strong>Project Name:</strong> {project.project_name}</h2>
                <p className="mt-2 font-bold">Main Technology Used:</p>
                <p className="mt-1">
                    {project.technology.map((tec, index) => (
                        <span key={index} className="ml-2 bg-gray-200 px-2 rounded-md">
                            {tec}
                        </span>
                    ))}
                </p>
                <p className="mt-2 font-bold">Live Project Link:</p>
                <a href={project.live_link} className="ml-2 text-blue-600 hover:underline" target="_blank">{project.live_link}</a>
                <p className="mt-2 font-bold">GitHub Repository Link:</p>
                <a href={project.github_link} className="ml-2 text-blue-600 hover:underline" target="_blank">{project.github_link}</a>
                <p className="mt-2 font-bold">Challenges During Development:</p>
                {project.challenges.map((challenge, index) => (
                    <p key={index} className="ml-2">
                        {index+1}. {challenge}.
                    </p>
                ))}
                <p className="mt-2 font-bold">Future Improvements and Plans:</p>
                {project.plans.map((plan, index) => (
                    <p key={index} className="ml-2">
                        {index + 1}. {plan}.
                    </p>
                ))}
            </div>
        </div>
    );
};

export default ViewDetails;