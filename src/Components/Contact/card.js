import React from "react";
import {
    FaFacebookF,
    FaMailBulk,
    FaInstagram,
    FaLinkedinIn,
  } from "react-icons/fa";
import "./contact.css";

function Card(props){
    return(
        <div className="contact-card">
          <div className="contact-card-content">
            <div className="contact-imgBx">
              <img className="contactImage" src={`./images/${props.image}`} alt="img05" />
            </div>
            <div className="contact-contentBx">
              <h3>
                {props.name}
                <br />
                <span>{props.title}</span>
              </h3>
            </div>
          </div>
          <ul className="contact-sci">
            <li>
              <a href={props.fb} target="_blank">
                <FaFacebookF/>
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                <FaInstagram />
              </a>
            </li>
            <li>
              <a href={props.linkedIn} target="_blank">
                <FaLinkedinIn />
              </a>
            </li>
            <li>
              <a href={`mailto:${props.mail}`} target="_blank">
                <FaMailBulk />
              </a>
            </li>
          </ul>
        </div>
    )
}

export default Card;