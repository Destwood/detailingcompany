import React from "react";
import style from "./About.css"
import us from "../../img/about.svg";

function About () {
    return(
        <div className="AboutUs">
            <h3 className="titleComponent">about us</h3>
            <div className="aboutContent">
                <img src={us} />
                <p className="aboutText">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
        </div>
    );
}

export default About;