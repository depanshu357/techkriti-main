import React from "react";
import {
    FaFacebookF,
    FaTwitterSquare,
    FaInstagram,
    FaLinkedinIn,
  } from "react-icons/fa";
import a from "../images/rock.jpg";
import "../contact.css";
function Card(props){
    return(
        <div className="card">
          <div className="content">
            <div className="imgBx">
              <img className="contactImage" src={a} alt="img05" />
            </div>
            <div className="contentBx">
              <h3>
                {props.name}
                <br />
                <span>{props.title}</span>
              </h3>
            </div>
          </div>
          <ul className="sci">
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