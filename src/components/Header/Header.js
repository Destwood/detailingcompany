import React from "react";
import style from "./header.css";
import Button from "../button/Button";

function Header() {
    return (
        <div className="header">
            <div className="logo">
                <div className="elispe"></div>
                <span className="logo-text"><a>detailingcompany</a></span>
            </div>
            <div className="nav">
                <div><a href="">home.</a></div>
                <div><a href="">about us.</a></div>
                <div><a href="">services.</a></div>
                <Button text="contuct us" classNames="button headerButton"/>
            </div>
        </div>
    );
}

export default Header;