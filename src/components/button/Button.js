import React from 'react';
import style from "./button.css";
import arrow from "../../img/arrowright3.svg";

const Button = ({ text, classNames, onClick, ifArrow }) => {
  return (
    <button className={classNames} onClick={onClick}>
      <div className="buttonContent">
        {text}
      {ifArrow && <img src={arrow} alt="Arrow" className='arrow' />}
      </div>
      
    </button>
  );
};

export default Button;