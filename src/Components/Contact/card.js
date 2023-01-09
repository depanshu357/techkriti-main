import React from "react";
import {
    FaFacebookF,
    FaTwitterSquare,
    FaInstagram,
    FaLinkedinIn,
  } from "react-icons/fa";
import a from "./images/rock.jpg";
import "./contact.css";

function Card(props){
    return(
        <div className="contact-card">
          <div className="contact-card-content">
            <div className="contact-imgBx">
              <img className="contactImage" src={props.imgLink} alt="img05" />
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
              <a href="#">
                <FaFacebookF/>
              </a>
            </li>
            <li>
              <a href="#">
                <FaInstagram />
              </a>
            </li>
            <li>
              <a href="#">
                <FaLinkedinIn />
              </a>
            </li>
            <li>
              <a href="#">
                <FaTwitterSquare />
              </a>
            </li>
          </ul>
        </div>
    )
}

export default Card;