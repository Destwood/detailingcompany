import React from "react";
import Button from "../button/Button";
import DotGrid from "../dot-grid/DotGrid";
import style from "./Services.css";
import svg3 from "../../img/arrowright3.svg";
import figureFirst from "../../img/diamonds.svg";
import figureSecond from "../../img/component.svg";



function Services() {
    return (
        <div className="services">
            <h3 className="titleComponent dot-table">our services</h3>
            <div className="servicesContent">
                <div className="grid">
                    <div>
                        <h4 className="titleItem"><img src={figureFirst} alt="person ico"></img>paint correction</h4>
                        <p className="itemText">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    </div>
                    <div>
                        <h4 className="titleItem"><img src={figureSecond} alt="person ico"></img>paint correction</h4>
                        <p className="itemText">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    </div>
                    <div>
                        <h4 className="titleItem"><img src={figureFirst} alt="person ico"></img>paint correction</h4>
                        <p className="itemText">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    </div>
                    <div>
                        <h4 className="titleItem"><img src={figureSecond} alt="person ico"></img>paint correction</h4>
                        <p className="itemText">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    </div>
                </div>
                <div className="getIn">
                    <p className="itemText">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    <Button text={"Get in touch"} classNames="button" ifArrow={true}/>
                </div>
            </div>
        </div>
    );
}

export default Services