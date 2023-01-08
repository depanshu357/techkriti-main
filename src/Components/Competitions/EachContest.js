import React, {useState} from 'react';
import PropTypes from 'prop-types';
import './comps.css';
import comp from './images/comp1.png';
import {Tabs, Tab} from "@mui/material"
function EachContest(props) {
	const [tab, setTab] = useState(0);
	
	const setCurrentTab = (event, newValue) => {
		setTab(newValue);
	}

  return (
  	<>
    <div className="page-background each-page-background" style={{}}></div>
    <div className="comp-each-container">
      <div className="comp-each-card">
      <div className='comp-each-containerLeft'>
        <h1 className="comp-each-title">{props.compName}</h1>
        <Tabs value={tab} onChange={setCurrentTab}>
        	<Tab value={0} label={"About"}/>
        	<Tab value={1} label={"Structure"}/>
        	<Tab value={2} label={"Timeline"}/>
        	<Tab value={3} label={"FAQs"}/>
        </Tabs>
        <div className="comp-each-blob1"></div>
        <div className="comp-each-data">
        	{props.content[tab]}
        </div>
        {/*<p className="comp-each-subtitle">Introducing the first ever 5G enabled tablet. You've got a tablet that lets you play harder and work smarter.</p>*/}
        <button className="comp-each-btn">Get Started</button>
        </div>
        <div className='comp-each-containerRight'>
            <img style={{width:"100%", height:'100%', objectFit:"contain"}} className='comp-each-compImg' src={comp} />
        </div>
      </div>
      <div className="comp-each-compReg">
       <button className="comp-each-glass-button">Register</button><button className="comp-each-glass-button">Problem Statement</button>
      </div>
    </div>
    </>
  );
}

EachContest.propTypes = {};

export default EachContest
