import { useLoaderData } from "react-router-dom";
import AboutMeSec from "../AboutMeSec/AboutMeSec";
import Hero from "../Hero/Hero";
import Skills from "../Skills/Skills";
import ProjectsSec from "../ProjectsSec/ProjectsSec";
import Education from "../Education/Education";
import ContactMe from "../ContactMe/ContactMe";
import Footer from "../Footer/Footer";

const Home = () => {

    const projects = useLoaderData();

    return (
        <>
            <Hero></Hero>
            <AboutMeSec></AboutMeSec>
            <Skills></Skills>
            <Education></Education>
            <ProjectsSec projects={projects}></ProjectsSec>
            <ContactMe></ContactMe>
            <Footer></Footer>
        </>
    );
};

export default Home;