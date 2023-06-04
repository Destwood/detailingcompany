import React from "react";
import style from "./HeroSection.css";
import Button from "../button/Button";
import DotGrid from '../../components/dot-grid/DotGrid';
import hero3 from '../../img/HeroSection1.png';
import hero2 from '../../img/HeroSection2.png';
import hero1 from '../../img/HeroSection3.png';

function HeroSection() {
    return (
        <div className="Hero">
            <div className="ellipse"></div>
            <DotGrid/>
            <div>
                <h1 className="title"><span>Detailing your car has never</span> been <span> eiser.</span></h1>
                <p className="desc">we providing high-quality detailing services</p>
                <div className="buttons">
                    <Button text="Our services" classNames="button"/>
                    <Button text="Contact us" classNames="button2"/>
                </div>
            </div>
            <div className="imgBlock">
                <img className="leftColumn" src={hero1}/>
                <img className="rightColumn" src={hero2}/>
                <img className="rightColumn" src={hero3}/>
            </div>
        </div>
    );
}

export default HeroSection;