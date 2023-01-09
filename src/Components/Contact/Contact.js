import React, {useEffect} from "react";
import "./contact.css";
import Card from "./card.js";
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
  	<>
  	{/* <div className="contact-background"></div> */}
	  {/* https://ik.imagekit.io/vc4stuoufz/contact_us_page_techkriti.mp4?ik-sdk-version=javascript-1.4.3&updatedAt=1672855066214 */}
	<video autoPlay loop muted playsInline className="contact-background">
		<source  src="https://ik.imagekit.io/vc4stuoufz/contact_us_page_techkriti.mp4?ik-sdk-version=javascript-1.4.3&updatedAt=1672855066214"/>
		{/* <source  src="https://ik.imagekit.io/vc4stuoufz/contact_us_page_techkriti.mp4?ik-sdk-version=javascript-1.4.3&updatedAt=1672855066214"/> */}
		{/* <source  src="contact us page techkriti.mp4"/> */}
	</video>
	<h1 className="contact-heading">Contact Us</h1>
    <div className="contactBody">
    	{// <div className="container">
// 			<header className="contactHeader">
// 				<h1 className="contactTitle">{contactProps.marketing.heading}</h1>
// 			</header>
// 			<Card name={contactProps.marketing.members[0].name} title={contactProps.marketing.title}/>
// 			<Card name={contactProps.marketing.members[1].name} title={contactProps.marketing.title}/>
// 		</div>
//     		<div className="container">
// 			<header className="contactHeader">
// 				<h1 className="contactTitle">{contactProps.publicRel.heading}</h1>
// 			</header>
// 				<Card name={contactProps.publicRel.members[0].name} title={contactProps.publicRel.title}/>
// 				<Card name={contactProps.publicRel.members[1].name} title={contactProps.publicRel.title}/>
// 				<Card name={contactProps.publicRel.members[2].name} title={contactProps.publicRel.title}/>
// 			</div>
// 		<div className="container">
// 			<header className="contactHeader">
// 				<h1 className="contactTitle">{contactProps.events.heading}</h1>
// 			</header>
// 			<Card name={contactProps.events.members[0].name} title={contactProps.events.title}/>
// 			<Card name={contactProps.events.members[1].name} title={contactProps.events.title}/>
// 		</div>
//     	<div className="container">
// 			<header className="contactHeader">
// 				<h1 className="contactTitle">{contactProps.web.heading}</h1>
// 			</header>
// 			<Card name={contactProps.web.members[0].name} title={contactProps.web.title}/>
// 		</div>
//     	<div className="container">
// 			<header className="contactHeader">
// 				<h1 className="contactTitle">{contactProps.finance.heading}</h1>
// 			</header>
// 			<Card name={contactProps.finance.members[0].name} title={contactProps.finance.title}/>
// 		</div>
//     	<div className="container">
// 			<header className="contactHeader">
// 				<h1 className="contactTitle">{contactProps.media.heading}</h1>
// 			</header>
// 			<Card name={contactProps.media.members[0].name} title={contactProps.media.title}/>
// 		</div>
//     	<div className="container">
// 			<header className="contactHeader">
// 				<h1 className="contactTitle">{contactProps.design.heading}</h1>
// 			</header>
// 			<Card name={contactProps.design.members[0].name} title={contactProps.design.title}/>
// 			<Card name={contactProps.design.members[1].name} title={contactProps.design.title}/>
// 		</div>
//     	<div className="container">
// 			<header className="contactHeader">
// 				<h1 className="contactTitle">{contactProps.show.heading}</h1>
// 			</header>
// 			<Card name={contactProps.show.members[0].name} title={contactProps.show.title}/>
// 			<Card name={contactProps.show.members[1].name} title={contactProps.show.title}/>
// 		</div>
// 		<div className="container">
// 			<header className="contactHeader">
// 				<h1 className="contactTitle">General Secretary, SNT</h1>
// 			</header>
// 			<Card name="Som V Tambe" title="Gen. Secretary, Science and Technology"/>
// 		</div>
//     	<div className="container">
// 			<header className="contactHeader">
// 				<h1 className="contactTitle">{contactProps.festies.heading}</h1>
// 			</header>
// 			<Card name={contactProps.festies.members[0].name} title={contactProps.festies.title}/>
// 			<Card name={contactProps.festies.members[1].name} title={contactProps.festies.title}/>
// 		</div>
		}
		{Object.entries(contactProps).map(([_, value]) => {
			return (
				<div className="contact-container" key={value.heading}>
					<h1 className="head">{value.heading}</h1>
					<div className="contact-name-cards">
					{value.members.map(el => (
						<Card name={el.name} title={value.title} key={el.name} image={el.imgLink}/>
						))
					}
					</div>
				</div>
			);
		})}
    </div>
    </>
  );
}
