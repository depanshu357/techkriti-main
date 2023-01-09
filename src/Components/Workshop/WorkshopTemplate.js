import React from "react";
import { workshopData } from "./workshopData";
import { Link, useParams } from "react-router-dom";
import "./workshopDetails.css";
import {useState} from 'react';
import PropTypes from 'prop-types';
import './workShopTemplate.css';
// import comp from './images/comp1.png';
import {Tabs, Tab} from "@mui/material"
export default function WorkshopTemplate(props) {
const params = useParams();
const [tab, setTab] = useState(0);
	
	const setCurrentTab = (event, newValue) => {
		setTab(newValue);
	}
  const handleWorkEachData = () =>{
    // return "hello"
    for(let i=0;i<workshopData.length;i++){
      if(workshopData[i].workName === params.workName)
      return workshopData[i].main.dataMain
    }
  }
// const handleWorkEachData = "hello"
  return (
    // <div>
    //   <div className="stock-container">
    //     <h1>{params.workName}</h1>
    //     {workshopData.map((e) => {
    //       if (e.workName === params.workName) {
    //         return <h3>{e.main.dataMain}</h3>;
    //       }
    //     })}
    //   </div>
    // </div>
<>
    {/* <div className="workshopEach">
      <div class="containerEach">
        <div class="cardEach">
          <div style={{ width: "70%", float: "left", display: "inline-block" }}>
            <h1 class="titleEach">{params.workName}</h1>
            {workshopData.map((e) => {
              if (e.workName === params.workName) {
                return <h3>{e.main.dataMain}</h3>;
              }
            })}
            {/* <button class="btnEach">Get Started</button> */}
    <div className="page-background work-each-page-background"></div>
    <div className="work-each-container">
      <div className="work-each-card">
      <div className='work-each-containerLeft'>
        <h1 className="work-each-title">Abc</h1>
        <Tabs value={tab} onChange={setCurrentTab}>
        	<Tab value={0} label={"About"}/>
        </Tabs>
        <div className="work-each-data">
        	{/* {props.content[tab]} */}
           {handleWorkEachData()}
          {/* {workshopData[0].main.dataMain} */}
          
          
        </div>
        <button className="work-each-btn"><Link to={`/register-w/${params.workName}`} style={{color:"white"}}>Register</Link></button>
        </div>
        <div className='work-each-containerRight'>
            <img style={{width:"100%", height:'100%', objectFit:"contain"}} className='work-each-workImg' src="comp1.png" />
        </div>
      </div>
      {// <div className="work-each-workReg">
//        <button className="work-each-glass-button">Register</button><button className="work-each-glass-button">Problem Statement</button>
//       </div>
		}
    </div>
            </>
  );
}
