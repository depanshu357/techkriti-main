import React from "react";
import a from "./images/rock.jpg";
import "./contact.css";
import {
  FaFacebookF,
  FaTwitterSquare,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
export default function Contact() {
	const fontstyles = {
		color: 'white',
		fontsize: '24px',
		fontweight: 'bold'
	}
  return (
    <div className="contactBody">
      {/* <div className='contact'>
    <h1 className="font-contact">
      Contact Us
    </h1>
    <div>
    <ul className="grid cs-style-4">
				<li>
					<figure>
						<div><img src={a} alt="img05" /></div>
						<figcaption>
							<h3>Safari</h3>
							<span>Jacob Cummings</span>
							
						</figcaption>
					</figure>
				</li>
				<li>
					<figure>
						<div><img src={a} alt="img05" /></div>
						<figcaption>
							<h3>Game Center</h3>
							<span>Jacob Cummings</span>
							
						</figcaption>
					</figure>
				</li>
				<li>
					<figure>
						<div><img src={a} alt="img05" /></div>
						<figcaption>
							<h3>Music</h3>
							<span>Jacob Cummings</span>
							
						</figcaption>
					</figure>
				</li>
				<li>
					<figure>
						<div><img src={a} alt="img05" /></div>
						<figcaption>
							<h3>Settings</h3>
							<span>Jacob Cummings</span>
							
						</figcaption>
					</figure>
				</li>
				<li>
					<figure>
						<div><img src={a} alt="img05" /></div>
						<figcaption>
							<h3>Camera</h3>
							<span>Jacob Cummings</span>
							
						</figcaption>
					</figure>
				</li>
				<li>
					<figure>
						<div><img src={a} alt="img05" /></div>
						<figcaption>
							<h3>Phone</h3>
							<span>Jacob Cummings</span>
							
						</figcaption>
					</figure>
				</li>
			</ul>
    </div>

    </div> */}
      <div className="container">
        <div className="card">
          <div className="content">
            <div className="imgBx">
              <img className="contactImage" src={a} alt="img05" />
            </div>
            <div className="contentBx">
              <h3>
                Safari
              </h3>
            </div>
          </div>
          <ul className="sci">
            <li>
              <a href="#">
                <FaFacebookF style={fontstyles}/>
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
      </div>
    </div>
  );
}
