import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";

const Project = ({ title, img, index }) => {
    return (
        <li className="project" >
            <Link to={"./projects/" + (index + 1) }>
                <img src={ img } alt="Project img" className="project__img"/>
                <h3 className="project__title">{ title }</h3>
            </Link>
        </li>
    );
}

export default Project;