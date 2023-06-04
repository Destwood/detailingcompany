import React from "react";
import style from "./Testimonials.css"
import Quotes from "../quote/Quote";



function Testimonials() {
    return (
        <div className="testimonialsWrapper">
            
            <h3 className="titleComponent">testimonials</h3>
            <div className="quotesWrapper">
                <Quotes title={"John Doe"} text="“I cannot praise Mat highly enough for his hard work, passion and enthusiasm in the way he dealt with my car.“" className="quote" textClass="dark"/>
                <Quotes title="Mattew Age" text="“I cannot praise Mat highly enough for his hard work, passion and enthusiasm in the way he dealt with my car.“" className="quote" textClass="light"/>
                <Quotes title="John Second" text="“I cannot praise Mat highly enough for his hard work, passion and enthusiasm in the way he dealt with my car.“" className="quote" textClass="dark"/>
            </div>
            
        </div>
    );
}

export default Testimonials