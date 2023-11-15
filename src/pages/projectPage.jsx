import React from "react";

import ButtonGit from "../components/butGit";


const ProjectPage = ({ picture, gitHub, title, skills }) => {
    return ( 
        <main className="section">
            <div className="container">
                <div className="project-details">

                    <h1 className="title-1">{ title }</h1>

                    <img src={picture} alt="" className="project-details__cover" />

                    <div className="project-details__desc">
                        <p>{ skills }</p>
                    </div>

                    <ButtonGit src={ gitHub } />    

                </div>
            </div>
        </main>
    );
}
 
export default ProjectPage;