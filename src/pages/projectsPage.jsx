import React from "react";

import { projects } from "../helpers/projectsList";
import Project from "../components/project";

const ProjectsPage = () => {
    return (
        <main className="section">
            <div className="container">
                <h2 className="title-1">Projects</h2>
                <ul className="projects">
                    {projects && projects.map(( project, index ) => {
                        return (
                            <Project
                                key={index}
                                title={project.title}
                                img={project.img}
                            />
                        );
                    })}
                </ul>
            </div>
        </main>
    );
}
 
export default ProjectsPage;