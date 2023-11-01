import React from "react";

const Project = ({ title, img }) => {
    return (
        <li className="project" >
            <a href="./project-page.html">
                <img src={ img } alt="Project img" className="project__img"/>
                <h3 className="project__title">{ title }</h3>
            </a>
        </li>
    );
}
 
export default Project;