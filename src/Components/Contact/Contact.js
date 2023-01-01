import React from "react";
import "./contact.css";
import Card from "./Card/card";
import contactProps from "./contactProps";

export default function Contact() {
  return (
    <div className="contactBody">
		<header className="contactsubheaders">
			<h1>{contactProps.marketing.heading}</h1>
		</header>
    	<div className="container">
			<Card name={contactProps.marketing.members[0].name} title={contactProps.marketing.title}/>
			<Card name={contactProps.marketing.members[1].name} title={contactProps.marketing.title}/>
		</div>
		<header className="contactsubheaders">
			<h1>{contactProps.publicRel.heading}</h1>
		</header>
    	<div className="container">
			<Card name={contactProps.publicRel.members[0].name} title={contactProps.publicRel.title}/>
			<Card name={contactProps.publicRel.members[1].name} title={contactProps.publicRel.title}/>
			<Card name={contactProps.publicRel.members[2].name} title={contactProps.publicRel.title}/>
		</div>
		<header className="contactsubheaders">
			<h1>{contactProps.events.heading}</h1>
		</header>
    	<div className="container">
			<Card name={contactProps.events.members[0].name} title={contactProps.events.title}/>
			<Card name={contactProps.events.members[1].name} title={contactProps.events.title}/>
		</div>
		<header className="contactsubheaders">
			<h1>{contactProps.web.heading}</h1>
		</header>
    	<div className="container">
			<Card name={contactProps.web.members[0].name} title={contactProps.web.title}/>
		</div>
		<header className="contactsubheaders">
			<h1>{contactProps.finance.heading}</h1>
		</header>
    	<div className="container">
			<Card name={contactProps.finance.members[0].name} title={contactProps.finance.title}/>
		</div>
		<header className="contactsubheaders">
			<h1>{contactProps.media.heading}</h1>
		</header>
    	<div className="container">
			<Card name={contactProps.media.members[0].name} title={contactProps.media.title}/>
		</div>
		<header className="contactsubheaders">
			<h1>{contactProps.design.heading}</h1>
		</header>
    	<div className="container">
			<Card name={contactProps.design.members[0].name} title={contactProps.design.title}/>
			<Card name={contactProps.design.members[1].name} title={contactProps.design.title}/>
		</div>
		<header className="contactsubheaders">
			<h1>{contactProps.show.heading}</h1>
		</header>
    	<div className="container">
			<Card name={contactProps.show.members[0].name} title={contactProps.show.title}/>
			<Card name={contactProps.show.members[1].name} title={contactProps.show.title}/>
		</div>
		<div className="container">
			<Card name="Som V Tambe" title="Gen. Secretary, Science and Technology"/>
		</div>
		<header className="contactsubheaders">
			<h1>{contactProps.festies.heading}</h1>
		</header>
    	<div className="container">
			<Card name={contactProps.festies.members[0].name} title={contactProps.festies.title}/>
			<Card name={contactProps.festies.members[1].name} title={contactProps.festies.title}/>
		</div>
    </div>
  );
}
