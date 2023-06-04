import React from 'react';
import style from "./GetInTouch.css"
import Button from '../button/Button';
import email from "../../img/Email.svg";
import call from "../../img/Call Us.svg";
import adress from "../../img/Adress.svg";

function GetInTouch() {
  return (
    <div className='GetInTouch'>
      <h3 className="titleComponent dot-table">get in touch</h3>

      <div className='GetContent'>
        <div className='inputArea'>
        <input className='inputInfo' placeholder="Name" type="text"></input>
        <input className='inputInfo' placeholder="Email" type="email"></input>
        <input className='inputInfo' placeholder="Phone number" type="number"></input>
        <input className='msg' placeholder="Your message" type="text"></input>
        </div>
        
        <div className='example'>
          <div className='example-item'>
            <img className='contuctImg' src={email} />
            <span>example@yourmail.com</span>
          </div>
          <div className='example-item'>
            <img className='contuctImg' src={call} />
            <span>00553798184</span>
          </div>
          <div className='example-item'>
            <img className='contuctImg' src={adress} />
            <span>531 Runte Trail, Apt. 712, 95223, Durganburgh, Colorado, United States</span>
          </div>
        </div>
      </div>
      <Button text={"Get in touch"} classNames="button" ifArrow={true}/>
    </div>
  );
}

export default GetInTouch;