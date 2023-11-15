import React from "react";
import GitHub from "../img/icons/gitHub-black.svg"

const ButtonGit = ({ src }) => {
    return (
        <a href={src} className="btn-outline">
            <img src={GitHub} alt="" />
            GitHub repo
        </a>
    );
}
 
export default ButtonGit;