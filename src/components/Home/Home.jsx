import { useLoaderData } from "react-router-dom";
import AboutMeSec from "../AboutMeSec/AboutMeSec";
import Hero from "../Hero/Hero";
import Skills from "../Skills/Skills";
import ProjectsSec from "../ProjectsSec/ProjectsSec";

const Home = () => {

    const projects = useLoaderData();

    return (
        <>
            <Hero></Hero>
            <AboutMeSec></AboutMeSec>
            <Skills></Skills>
            <ProjectsSec projects={projects}></ProjectsSec>
        </>
    );
};

export default Home;