// import React from "react";
import "./sidenav.css";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import { Link, NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
// import './styles.css';
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

const Sidenav = ({themeColor, ...props}) => {

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
  
  const lowergridmenu = (props.lowergridmenu.length ? props.lowergridmenu : [/*{text:"jghrug1", link:""},{text:"jghrug2", link:""},{text:"jghrug3", link:""},{text:"jghrug4", link:""}*/] );
  
  
  return (
    <>
      {isPagebig &&
        <Grid
          container
          bgcolor={themeColor}
          color={"white"}
          columnGap={0}
          spacing={0}
          className="topGrid"
        >
          <Grid
            item
            md={0.5}
            sx={{ minWidth: 91 }}
            className="corners"
          >
            <img src="img/techkriti.svg" height={"45px"}></img>
          </Grid>
          <Divider className="mydiv" color={"white"} orientation="vertical" flexItem></Divider>
          <Grid item md>
            <ul className="horlist">
              <li><Link className={`mylink-${compe ? "active" : ""}`} to="/competition">Competitions</Link></li>
              <li><Link className={`mylink-${works ? "active" : ""}`} to="/workshop">Workshops</Link></li>
              <li><Link className={`mylink-${gallery ? "active" : ""}`} to="/gallery">Gallery</Link></li>
              <li><Link className={`mylink-${contact ? "active" : ""}`} to="/contact-us">Contact Us</Link></li>
            </ul>

          </Grid>
          <Divider className="mydiv" color={"white"} orientation="vertical" flexItem></Divider>
          <Grid item md={0.5} sx={{ minWidth: 87 }} className="corners">
           <a href="#"> <img src="images/profile.png" height={"29px"} className="profileIcon"></img> </a>
          </Grid>
        </Grid>}

      {isPagebig && <Divider className="mydiv" color={"white"}></Divider>}
      {isPagebig && <Grid
        container
        bgcolor={themeColor}
        color={"white"}
        columnGap={0}
        spacing={0}

      >
        <Grid item md={0.5} sx={{ minWidth: 91 }} style={{ height: "calc(100vh - 129px)", display: "flex", flexDirection: "column", alignItems: "center" }}>
          <br />
          <a href="#"><img src="images/facebook.png" height={"20px"} width={"11px"}></img></a>
          <br></br>
          <a href="#"><img src="images/twitter.png" height={"17.94px"}></img></a>
          <br></br>
          <a href="#"><img src="images/youtube.png" height={"24px"}></img></a>
          <br></br>
          <a href="#"><img src="images/linkedin.png" height={"24px"}></img></a>
          <br></br>
          <a href="#"><img src="images/instagram.png" height={"20px"}></img></a>
        </Grid>
        <Divider color={"white"} className="mydiv" orientation="vertical" flexItem></Divider>
        <Grid item md>
          <Outlet />
        </Grid>
        <Divider color={"white"} orientation="vertical" className="mydiv" flexItem></Divider>
        <Grid item md={0.5} sx={{ minWidth: 87 }} style={{ display: "flex", flexDirection: "column" }}>
          {/* <img src="img/techkriti.svg" height={"45px"}></img> */}
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
        <Grid item md={0.5} sx={{ minWidth: 91, flexDirection: "column" }} className="corners"  >
          <img src="images/Vector 5.png" height={"8px"}></img>
          <img src="images/Vector 4.png" height={"8px"}></img>
          <img src="images/Vector 3.png" height={"8px"}></img>
        </Grid>
        <Divider color={"white"} orientation="vertical" flexItem className="mydiv"></Divider>
        <Grid item md>
          <ul className="horlist1">
            {lowergridmenu.map((el) => {
            	return (
            		<li key={el.text}><a className="mylink" href={`/${el.link}`}>{el.text}</a></li>
            	);
            })}
          </ul>
        </Grid>
        <Divider color={"white"} className="mydiv" orientation="vertical" flexItem></Divider>
        <Grid item md={0.5} sx={{ height: 66, minWidth: 87 }} className="corners">
          {/* <img src="img/techkriti.svg" height={"45px"}></img> */}
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
            <Link  to="/competition" onClick={handleHamburger} >Competitions</Link>
              <Link to="/workshop" onClick={handleHamburger}>Workshops</Link>
              <Link to="/gallery" onClick={handleHamburger}>Gallery</Link>
              <Link to="/contact-us" onClick={handleHamburger}>Contact Us</Link>
          </nav>
        <Grid item 
          sx={{ minWidth: 91 }}
          className="corners"
        >
          <img src="img/techkriti.svg" height={"45px"}></img>
        </Grid>
        <Grid item  sx={{ minWidth: 87 }} className="corners">
            {/* <img src="images/menuBar.png" style={{"marginLeft":"450%"}} height={"16px"}></img> */}
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
          <li><a href="#"><img src="images/facebook.png" height={"20px"} width={"11px"}></img></a></li>
          <br></br>
          <li><a href="#"><img src="images/twitter.png" height={"17.94px"}></img></a></li>
          <br></br>
          <li><a href="#"><img src="images/youtube.png" height={"24px"}></img></a></li>
          <br></br>
          <li><a href="#"><img src="images/linkedin.png" height={"24px"}></img></a></li>
          <br></br>
          <li><a href="#"><img src="images/instagram.png" height={"20px"}></img></a></li>
          </ul>
        </Grid>
        </Grid>}
        
    </>
  );
};

export default Sidenav;
