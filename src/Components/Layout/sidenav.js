// import React from "react";
import "./sidenav.css";
import { Link, NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from '../../context/AuthContext';
import axios from 'axios'
import LogoutIcon from "@mui/icons-material/Logout";
// import {useAuth} from './AuthContext'
import React, { useState, useEffect } from "react";
import logo from "./CA_light.png";
import Typography from "@mui/material/Typography";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { makeStyles } from "@mui/styles";
import PermIdentityRoundedIcon from "@mui/icons-material/PermIdentityRounded";
import UpdateRoundedIcon from "@mui/icons-material/UpdateRounded";
import { Tab, Tabs, Button, Menu, MenuItem, Divider, Grid } from "@mui/material";
import { Container } from "@mui/system";
// import Stack from "@mui/material";
import "./sidenav.css";
import { TabPanelUnstyled } from "@mui/base";
import { useMediaQuery } from "../MediaQuery";
import Merchandise from "../Merchandise/Merchandise";
import Login from "../Login";

const Sidenav = ({themeColor, ...props}) => {
  // Google login
  //   const {loginWithGoogle,logout, currentUser} = useAuth();
  //   const [error, setError] = useState('');

  //   const [loading,setLoading] = useState(false);
  //   const navigate = useNavigate();
  //   function handleGoogleLogin(e){
  //     e.preventDefault();
  //     try{
  //         setError('')
  //         setLoading(true)
  //         loginWithGoogle().then((result)=>{
  //             // console.log(result.user.email)
             
  //             console.log("Got here")
  //                     navigate("/profile")

  //         })

  //     } catch{
  //         setError('Failed to Sign In.') 
  //     }
  //     setLoading(false)

  // }

  let isPagebig = props.big;
  let isPagesmall = !props.big;
  // let isPagemedium = useMediaQuery('(min-width:450px)', '(max-width:900px)')
  let location = useLocation();
  useEffect(() =>{
    console.log(location.pathname);
  }, [location]);



//   let compe = false;
//   let works = false;
//   let gallery = false;
//   let contact = false;
//   let merchandise = false;
	let tabValue;
  if(location.pathname.includes("competitions")){
//     compe = true;
		tabValue = 0;
  }
  else if(location.pathname.includes("workshops")){
//     gallery = true;
		tabValue = 1;
  }
  else if(location.pathname.includes("gallery")){
//     works = true;
		tabValue = 2;
  }
  else if(location.pathname.includes("contact")){
//     contact = true;
		tabValue = 3;

  }else if(location.pathname.includes("merchandise")){
//     merchandise = true;
		tabValue = 4;

  }
  const [sidebar, setSidebar] = useState(false);
  const [display, setDisplay] = useState({ right: '-100vw',opacity:"0" });
  const handleHamburger = () => {
    console.log("clicked ");
    setDisplay((pre) => {
      if(sidebar){setSidebar(false);return {right: '-100vw',opacity:"0"};}
      else {setSidebar(true);return {right: "0",opacity:"1"};}
    });
  };
  
  const lowergridmenu = (props.lowergridmenu.length ? props.lowergridmenu : [] );
  
  const [checked,setChecked]=useState(false)

  const handleMerchandise = (event) => {
    console.log(event.target);
    const display = document.getElementsByClassName("popUpDisplay");
    display[0].classList.remove("MerchandiseClose");
    display[0].classList.add("startMerchandise")
    setChecked(pre=>!pre);
    // event.target.classList.add("mylink-active")
  }
  const handleMerchandiseofSmallPage = (event) => {
    console.log(event.target);
    const display = document.getElementsByClassName("popUpDisplay");
    display[0].classList.remove("MerchandiseClose");
    setChecked(pre=>!pre);
    display[0].classList.add("startMerchandise")
    display[0].classList.add("smallPage");
    // event.target.classList.add("mylink-active")
  }
  return (
    <>
	{isPagebig && <>
		<div
			className={`sidenav-container-bigpage${themeColor === "#000" ? " sidenav-borderfix" : ""}`}
		>
			<div>
				<Link to="/"><img src="/img/techkriti.svg" height={"45px"}></img></Link>
			</div>
			<div className="div-top-nav-swayam">
				<Tabs value={tabValue}>
					<Link to="/competitions"><Tab value={0} label="Competitions" /></Link>
					<Link to="/workshops"><Tab value={1} label="Workshops" /></Link>
					<Link to="/gallery"><Tab value={2} label="Gallery" /></Link>
					<Link to="/contact-us"><Tab value={3} label="Contact Us" /></Link>
					<Link to="/merchandise"><Tab value={4} label="Merchandise" /></Link>
				</Tabs>
			</div>
			<div className="right"><Login/></div>
			<div style={{display:"flex", flexDirection:"column", justifyContent:"flex-start", alignItems:"center"}}>
				<br />
				
          		<a href="https://www.facebook.com/techkriti.iitk"><img className="socialicon facebook" src="/images/facebook.png" height={"24px"} ></img></a>
          		<br />
          		<a href="https://twitter.com/techkriti_iitk"><img className="socialicon" src="/images/twitter.png" height={"17.94px"}></img></a>
          		<br />
          		<a href="https://www.youtube.com/@TechkritiIITKanpur"><img className="socialicon" src="/images/youtube.png" height={"24px"}></img></a>
          		<br />
          		<a href="https://www.linkedin.com/school/techkriti-iitk/"><img className="socialicon" src="/images/linkedin.png" height={"24px"}></img></a>
          		<br />
          		<a href="https://www.instagram.com/techkriti.iitk/"><img className="socialicon" src="/images/instagram.png" height={"20px"}></img></a>
          	</div>
			<div className="sidenav-inner" style={{display:"block"}}>
				{//<div style={{position:"absolute", width:"100%", height:"auto", backdropFilter:"blur(10px)", backgroundColor:"rgba(255,255,255,0.1)", zIndex:-1}}></div>
				}
				<Outlet />
				
			</div>
			<div className="right"></div>
			<div style={{flexDirection:"column"}}className="bottom">
				<div className = "scroll-down"></div>
          		<div className = "scroll-down"></div>
          		<div className = "scroll-down"></div>
			</div>
			<div className="bottom">
          		<Tabs 
          			style={{width:"90%"}} 
          			value={lowergridmenu.findIndex((el) => location.pathname.includes(el.link))}
          		>
          			{lowergridmenu.map((el) => (
          				<Link to={`/${el.link}`} key={el.text}><Tab value={lowergridmenu.indexOf(el)} label={el.text} /></Link>
          			))}
          		</Tabs>
			</div>
			<div className="bottom right"></div>
		</div>
	
	</>}        
        
        
        
      {isPagesmall && <>
        <div className={`sidenav-container-smallpage${themeColor === "#000" ? " sidenav-borderfix" : ""}`}>
    		<nav 
          		style={display} 
          		className="mobile"
          	>
            	<div 
            		style={{width:"100vw",height:"40px", paddingTop:"50px"}}
            	>
            		<div 
            			className="hamburger" 
            			onClick={handleHamburger}
            			style={{position:"absolute",right:"25px",top:"5px"}}
            		>
              			<div className="bar is-active"></div>
            		</div>
            	</div>
            	<div onClick={handleHamburger}><Login /></div>
            	<Link to="/" onClick={handleHamburger}>Home</Link>
            	<Link to="/competitions" onClick={handleHamburger} >Competitions</Link>
              	<Link to="/workshops" onClick={handleHamburger}>Workshops</Link>
              	<Link to="/gallery" onClick={handleHamburger}>Gallery</Link>
              	<Link to="/contact-us" onClick={handleHamburger}>Contact Us</Link>
              	<Link to="/merchandise" onClick={handleHamburger}>Merchandise</Link>
          	</nav>
        	<div style={{borderTop:"none", justifyContent:"space-between"}}>
        		<img src="/img/techkriti.svg" height={"45px"}></img>
        		<button className="hamburger" onClick={handleHamburger}>
              		<div className="bar is-active"></div>
            	</button>
        	</div>
        	<div style={{display:"block", padding:"0px", height:"auto", flexGrow:1, flexShrink:1, overflow:"auto", backdropFilter:"none"}}>
        		<div className="sidenav-inner-smallpage">
        			<Outlet />
        		</div>
        	</div>
        	<div>
        		<Tabs 
        			style={{width:"100%"}} 
        			value={lowergridmenu.findIndex((el) => location.pathname.includes(el.link))}
        		>
          			{lowergridmenu.map((el) => (
          				<Link to={`/${el.link}`} key={el.text}><Tab value={lowergridmenu.indexOf(el)} label={el.text} /></Link>
          			))}
          		</Tabs>
        	</div>
        	<div>
        	    <ul className="mobilesocial">
          			<li><a href="https://www.facebook.com/techkriti.iitk"><img src="/images/facebook.png" height={"20px"} width={"11px"}></img></a></li>
          			<br />
          			<li><a href="https://twitter.com/techkriti_iitk"><img src="/images/twitter.png" height={"17.94px"}></img></a></li>
          			<br />
          			<li><a href="https://www.youtube.com/@TechkritiIITKanpur"><img src="/images/youtube.png" height={"24px"}></img></a></li>
          			<br />
          			<li><a href="https://www.linkedin.com/school/techkriti-iitk/"><img src="/images/linkedin.png" height={"24px"}></img></a></li>
          			<br />
          			<li><a href="https://www.instagram.com/techkriti.iitk/"><img src="/images/instagram.png" height={"20px"}></img></a></li>
          		</ul>
        	</div>
        </div>
      </>}
        
    </>
  );
};

export default Sidenav;
