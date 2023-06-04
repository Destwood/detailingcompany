import React from "react";
import style from "./Footer.css";
import facebook from "../../img/Logo Facebook.svg"
import instagram from "../../img/Logo Instagram.svg"

function Footer() {
    return (
        <div className="footer">
            <div className="footerContent">
                <div className="footerlogo">
                    <div className="elispe"></div>
                    <span className="logo-text"><a>detailingcompany</a></span>
                </div>
                <div className="footerLinksContent">
                    <div className="footerLinks">
                        <h5 className="linksTitle">menu.</h5>
                        <a>home.</a>
                        <a>about us.</a>
                        <a>our services.</a>
                        <a>contuct us</a>
                    </div>
                    <div className="footerLinks">
                        <h5 className="linksTitle">account.</h5>
                        <a>log in.</a>
                        <a>your account.</a>
                    </div>
                    <div>
                        <h5 className="linksTitle">follow us.</h5>
                        <a><img src={facebook} alt="facebook logo"/></a>
                        <a><img src={instagram} alt="instagram logo"/></a>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default Footer