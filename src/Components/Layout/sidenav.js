// import React from "react";
import "./sidenav.css";
import Divider from "@mui/material/Divider";
import { Link, NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from '../../context/AuthContext';
import axios from 'axios'
import LogoutIcon from "@mui/icons-material/Logout";
// import {useAuth} from './AuthContext'
import React, { useState, useEffect } from "react";
import logo from "./CA_light.png";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { makeStyles } from "@mui/styles";
import Grid from "@mui/material/Grid";
import PermIdentityRoundedIcon from "@mui/icons-material/PermIdentityRounded";
import UpdateRoundedIcon from "@mui/icons-material/UpdateRounded";
import { Tab } from "@mui/material";
import { Container } from "@mui/system";
// import Stack from "@mui/material";
import "./sidenav.css";
import { TabPanelUnstyled } from "@mui/base";
import { useMediaQuery } from "../MediaQuery";
import Merchandise from "../Merchandise/Merchandise";

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

  let isPagebig = useMediaQuery('(min-width:900px)');
  let isPagesmall = useMediaQuery('(max-width:900px)');
  // let isPagemedium = useMediaQuery('(min-width:450px)', '(max-width:900px)')
  let location = useLocation();
  useEffect(() =>{
    console.log(location.pathname)
  }, [location]);

  let compe = false;
  let works = false;
  let gallery = false;
  let contact = false;
  let merchandise = false;
  if(location.pathname.includes("competition")){
    compe = true;
  }
  else if(location.pathname.includes("gallery")){
    gallery = true;
  }
  else if(location.pathname.includes("workshops")){
    works = true;
  }
  else if(location.pathname.includes("contact")){
    contact = true;
  }else if(location.pathname.includes("merchandise")){
    merchandise = true;
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
    {/* <Merchandise checked={checked} setChecked={setChecked}/> */}
      {isPagebig &&
        <Grid
          container
          bgcolor={themeColor}
          color={"white"}
          columnGap={0}
          spacing={0}
          borderBottom={"4px solid white"}
          paddingBottom={0}
          marginBottom={0}
          className="topGrid"
        >
          <Grid
            item
            md={0.5}
            sx={{ minWidth: 91 }}
            className="corners"
        	borderRight={"4px solid white"}
          >
            <img src="/img/techkriti.svg" height={"45px"}></img>
          </Grid>
          <Divider className="mydiv" color={"white"} orientation="vertical" flexItem></Divider>
          <Grid item md>
            <ul className="horlist">
              <li><Link className={`mylink-${compe ? "active" : ""}`} to="/competitions">Competitions</Link></li>
              <li><Link className={`mylink-${works ? "active" : ""}`} to="/workshop">Workshops</Link></li>
              <li><Link className={`mylink-${gallery ? "active" : ""}`} to="/gallery">Gallery</Link></li>
              <li><Link className={`mylink-${contact ? "active" : ""}`} to="/contact-us">Contact Us</Link></li>
              <li><Link className={`mylink-${merchandise ? "active" : ""}`} to="/merchandise">Merchandise</Link></li>
              {/* <li className="merchandise" onClick={handleMerchandise}>Merchandise</li> */}
            </ul>

          </Grid>
          <Divider className="mydiv" color={"white"} orientation="vertical" flexItem></Divider>
          <Grid item md={0.5} sx={{ minWidth: 87 }} style={{borderLeft:"4px solid white"}} className="corners">
           <Button> Login </Button>
          </Grid>
        </Grid>}

      {isPagebig && <Divider className="mydiv" color={"white"}></Divider>}
      {isPagebig && <Grid
        container
        bgcolor={themeColor}
        color={"white"}
        columnGap={0}
        spacing={0}
        height={"fit-content"}
      >
        <Grid item md={0.5} sx={{ minWidth: 91 }} style={{  display: "flex", flexDirection: "column", alignItems: "center", borderRight:"4px solid white", paddingBottom:"500px" }}>
          <br />
          <a href="#"><img src="/images/facebook.png" height={"20px"} width={"11px"}></img></a>
          <br></br>
          <a href="#"><img src="/images/twitter.png" height={"17.94px"}></img></a>
          <br></br>
          <a href="#"><img src="/images/youtube.png" height={"24px"}></img></a>
          <br></br>
          <a href="#"><img src="/images/linkedin.png" height={"24px"}></img></a>
          <br></br>
          <a href="#"><img src="/images/instagram.png" height={"20px"}></img></a>
        </Grid>
        <Divider color={"white"} className="mydiv" orientation="vertical" flexItem></Divider>
        <Grid item md>
          <Outlet />
        </Grid>
        <Divider color={"white"} orientation="vertical" className="mydiv" flexItem></Divider>
        <Grid item md={0.5} sx={{ minWidth: 87 }} style={{ display: "flex", flexDirection: "column", borderLeft: "4px solid white" }}>
          {/* <img src="/img/techkriti.svg" height={"45px"}></img> */}
        </Grid>
      </Grid>}

      {isPagebig && <Divider color={"white"} className="mydiv" />}
      {isPagebig && <Grid
        container
        bgcolor={themeColor}
        color={"white"}
        columnGap={0}
        spacing={0}
        style={{ position: "absolute", bottom: "0" }}
      >
        <Grid item md={0.5} sx={{ minWidth: 91, flexDirection: "column" }} className="corners" style={{borderRight:"4px solid white"}}>
          <div className = "scroll-down"></div>
          <div className = "scroll-down"></div>
          <div className = "scroll-down"></div>
        </Grid>
        <Divider color={"white"} orientation="vertical" flexItem className="mydiv"></Divider>
        <Grid item md>
          <ul className="horlist1">
            {lowergridmenu.map((el) => {
            	return (
            		<li key={el.text}><Link className="mylink" to={`/${el.link}`}>{el.text}</Link></li>
            	);
            })}
          </ul>
        </Grid>
        <Divider color={"white"} className="mydiv" orientation="vertical" flexItem></Divider>
        <Grid item md={0.5} sx={{ height: 66, minWidth: 87 }} className="corners">
          {/* <img src="/img/techkriti.svg" height={"45px"}></img> */}
        </Grid>
        <Divider className="mydiv"></Divider>
      </Grid>}

      {isPagesmall && <Grid container
        bgcolor={themeColor}
        color={"white"}
        columnGap={0}
        spacing={0}
        sx={{ justifyContent: "space-between" }}>
          <nav style={display} className="mobile">
            <div style={{width:"100vw",height:"40px"}}>
            <div className="hamburger" onClick={handleHamburger} style={{position:"absolute",right:"25px",top:"5px"}}>
              <div className="bar is-active"></div>
            </div>
            </div>
            <Link  to="/competitions" onClick={handleHamburger} >Competitions</Link>
              <Link to="/workshop" onClick={handleHamburger}>Workshops</Link>
              <Link to="/gallery" onClick={handleHamburger}>Gallery</Link>
              <Link to="/contact-us" onClick={handleHamburger}>Contact Us</Link>
              <Link to="/merchandise" onClick={handleHamburger}>Merchandise</Link>
          </nav>
        <Grid item 
          sx={{ minWidth: 91 }}
          className="corners"
        >
          <img src="/img/techkriti.svg" height={"45px"}></img>
        </Grid>
        <Grid item  sx={{ minWidth: 87 }} className="corners">
            {/* <img src="/images/menuBar.png" style={{"marginLeft":"450%"}} height={"16px"}></img> */}
            <button className="hamburger" onClick={handleHamburger}>
              <div className="bar is-active"></div>
            </button>
          </Grid>
      </Grid>}
      {isPagesmall && <Divider className="mydiv" color={"white"} borderBottomWidth={"30px"}></Divider>}
      {isPagesmall && <Grid container>
        <Grid item width={"100%"}><Outlet/></Grid>
        </Grid>}
      {isPagesmall && <Grid container>
        <Grid item >
          <ul className="mobilesocial">
          <li><a href="#"><img src="/images/facebook.png" height={"20px"} width={"11px"}></img></a></li>
          <br></br>
          <li><a href="#"><img src="/images/twitter.png" height={"17.94px"}></img></a></li>
          <br></br>
          <li><a href="#"><img src="/images/youtube.png" height={"24px"}></img></a></li>
          <br></br>
          <li><a href="#"><img src="/images/linkedin.png" height={"24px"}></img></a></li>
          <br></br>
          <li><a href="#"><img src="/images/instagram.png" height={"20px"}></img></a></li>
          </ul>
        </Grid>
        </Grid>}
        
    </>
  );
};

export default Sidenav;
