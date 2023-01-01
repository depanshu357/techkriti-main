import React, {useEffect} from "react";
import a from "./images/rock.jpg";
import "./contact.css";
import Card from "./Card/card";
import contactProps from "./contactProps";
import {
  FaFacebookF,
  FaTwitterSquare,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Contact({setThemeColor, setLowergridmenu}) {

	useEffect(() => {
		setThemeColor("#000"); //on mount: set theme to black
		setLowergridmenu([]);
	},[]);
	
	const fontstyles = {
		color: 'white',
		fontsize: '24px',
		fontweight: 'bold'
	}
  return (
    <div className="contactBody">
	  {/* <div classname="contactelement"> */}
	  	<header className="contactsubheaders">
			<h1>{contactProps.marketing.heading}</h1>
		</header>
    	<div className="container">
			<Card name={contactProps.marketing.members[0].name} title={contactProps.marketing.title}/>
			<Card name={contactProps.marketing.members[1].name} title={contactProps.marketing.title}/>
		</div>
	  {/* </div> */}
	  {/* <div classname="contactelement"> */}
	  		<br />
			<header className="contactsubheaders">
				<h1>{contactProps.publicRel.heading}</h1>
			</header>
    		<div className="container">
				<Card name={contactProps.publicRel.members[0].name} title={contactProps.publicRel.title}/>
				<Card name={contactProps.publicRel.members[1].name} title={contactProps.publicRel.title}/>
				<Card name={contactProps.publicRel.members[2].name} title={contactProps.publicRel.title}/>
			</div>
	  {/* </div> */}
	  {/* <div classname="contactelement"> */}
	  		<br />
			<header className="contactsubheaders">
				<h1>{contactProps.events.heading}</h1>
			</header>
    		<div className="container">
				<Card name={contactProps.events.members[0].name} title={contactProps.events.title}/>
				<Card name={contactProps.events.members[1].name} title={contactProps.events.title}/>
			</div>
	  {/* </div> */}
	  {/* <div classname="contactelement"> */}
	  		<br/>
			<header className="contactsubheaders">
				<h1>{contactProps.web.heading}</h1>
			</header>
    		<div className="container">
				<Card name={contactProps.web.members[0].name} title={contactProps.web.title}/>
			</div>
	  {/* </div> */}
	  {/* <div classname="contactelement"> */}
			<br/>
			<header className="contactsubheaders">
				<h1>{contactProps.finance.heading}</h1>
			</header>
    		<div className="container">
				<Card name={contactProps.finance.members[0].name} title={contactProps.finance.title}/>
			</div>
	  {/* </div> */}
	  {/* <div classname="contactelement"> */}
		<br/>
		<header className="contactsubheaders">
			<h1>{contactProps.media.heading}</h1>
		</header>
    	<div className="container">
			<Card name={contactProps.media.members[0].name} title={contactProps.media.title}/>
		</div>
	  {/* </div> */}
	  {/* <div classname="contactelement"> */}
		<br/>
		<header className="contactsubheaders">
			<h1>{contactProps.design.heading}</h1>
		</header>
    	<div className="container">
			<Card name={contactProps.design.members[0].name} title={contactProps.design.title}/>
			<Card name={contactProps.design.members[1].name} title={contactProps.design.title}/>
		</div>
	  {/* </div> */}
	  {/* <div classname="contactelement"> */}
		<br/>
		<header className="contactsubheaders">
			<h1>{contactProps.show.heading}</h1>
		</header>
    	<div className="container">
			<Card name={contactProps.show.members[0].name} title={contactProps.show.title}/>
			<Card name={contactProps.show.members[1].name} title={contactProps.show.title}/>
		</div>
	  {/* </div> */}
	  {/* <div classname="contactelement"> */}
		<br/>
		<div className="container">
			<Card name="Som V Tambe" title="Gen. Secretary, Science and Technology"/>
		</div>
	  {/* </div> */}
	  {/* <div classname="contactelement"> */}
		<br/>
		<header className="contactsubheaders">
			<h1>{contactProps.festies.heading}</h1>
		</header>
    	<div className="container">
			<Card name={contactProps.festies.members[0].name} title={contactProps.festies.title}/>
			<Card name={contactProps.festies.members[1].name} title={contactProps.festies.title}/>
		</div>
	  {/* </div> */}
    </div>
  );
}
