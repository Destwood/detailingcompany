import React from "react";
import style from "./Quote.css";
import person from "../../img/profile2user.svg";

const Quotes = ({ title, text, className, textClass }) => {
    const combinedClasses = `text ${textClass}`;
    return (
        <div className={className}>
            <div className="titleQuote">
                
                <img src={person} alt="person ico"></img>
                <div className="titleQuoteText">{title}</div>
            </div>
            <div className={combinedClasses}>{text}</div>
        </div>
    )
}

export default Quotes;