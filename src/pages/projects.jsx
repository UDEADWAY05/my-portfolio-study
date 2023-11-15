import React from "react";
import { useParams } from "react-router-dom";
import ProjectPage from "./projectPage";
import ProjectsPage from "./projectsPage";
import { projects } from "../helpers/projectsList";

const Projects = () => {
    const params = useParams();
    const { id } = params;
    return id
        ? <ProjectPage picture={projects[id - 1].img} gitHub={projects[id - 1].gitHubLink} title={projects[id - 1].title} skills={ projects[id - 1].skills} />
        : <ProjectsPage />
    ;
}

export default Projects;