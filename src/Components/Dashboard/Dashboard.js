// import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "./Dashboard1.css";
import React ,{useState,useEffect, useRef} from 'react'
import { Link } from 'react-router-dom';
import {useAuth} from '../../context/AuthContext'
import axios from 'axios';
import {Form, Alert} from 'react-bootstrap'
import {useNavigate} from 'react-router-dom'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Avatar, CardContent, Grid } from '@mui/material';
import RegComps from "./RegComps";
import { styled } from '@mui/material/styles';
import { makeStyles } from '@mui/styles'; 


// const useStyles = makeStyles({
//   css-19kzrtu : {
      
//   }
// })

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 0,height:"calc(100vh - 200px)" }}>
          {children}
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs(props) {

	const navigate = useNavigate();
	
	useEffect(() => {
		props.setThemeColor("#000"); //on mount: set theme to black
		props.setLowergridmenu([]);
	},[]);


    const [error,setError] = useState('');
    const [team,setTeam] = useState([Object]);
    
    const {currentUser,logout} = useAuth();
    
     const photoURL = currentUser?.photoURL;
    
    
    const [currentUserInfo,setCurrentUserInfo] = useState({
        name : "",
        college: "",
        email : currentUser?.email,
        uid : currentUser?.uid,
        phone: currentUser?.phone,
        competitions: currentUser?.competitions
    })
    
    const [value, setValue] = React.useState(0);
    
   

    // let allTeam;
    // axios.get(`http://localhost:9000/api/get-team-detail/${currentUser.uid}`).then((response)=>{
    //     allTeam = response.data
    //     setTeam(allTeam)
        
    // }).catch((e)=>console.log(e))
    // console.log(team)
    useEffect(()=>{
        axios.post('http://localhost:9000/api/',{
        uid : currentUser?.uid,
        email : currentUser?.email,
        })
        .then((response)=>{
            setCurrentUserInfo({
                name : response.data.name,
                techId: response.data.techId,
                college: response.data.college,
                email : response.data.email,
                uid : response.data.uid,
                phone : response.data.phone,
                competitions: response.data.competitions
             
            })
        })
        .catch((e)=>console.log(e))
    },[currentUser?.uid,currentUser?.email])
    async function handleLogout(){
      try{
          setError('');
          await logout();
          navigate('/login');
      } catch{
          setError('Failed to logout')
      }
  }
  
    if (!currentUser) {
    	navigate('/login');
    }
  
  // let techId = ""

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  return (
    <>
    <div className="dashboard-page-background"></div>
    <Box sx={{ width: "100%", height: "100%" }} className="Dashboardfullscreen">
      <Box sx={{ borderBottom: 1, borderColor: "#20b2aa", display:"flex", height:"55px" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          sx={{ color: "white" ,height:"100%"}}
        >
          <Tab label="Profile" {...a11yProps(0)} sx={{ color: "white",height:"100%" }} />
          <Tab
            label="Registered Workshops"
            {...a11yProps(1)}
            sx={{ color: "white" }}
          />
          <Tab
            label="Registered Competitions"
            {...a11yProps(2)}
            sx={{ color: "white" }}
          />
        </Tabs>
        
      </Box>
            {/* <div className="dashboard-page-background"></div> */}
      
      <TabPanel value={value} index={0} sx={{ height: "100%", width: "100%" }} >        
      <div className="Dashboard">
        {/* {currentUser.email}

            <br/>
            {currentUser.uid} */}
          {/* <div className="top"></div> */}
          <div className="dashboard-content">
            <div className="dashboard-image">
              <h1>
                Hello <span>{currentUserInfo.name}</span>!!
              </h1>
              <img
                src={photoURL}
                alt="default"
                srcset=""
              />
            </div>
            <div className="dashboard-text">
              <div className="dashboard-info">
                <span>
                  <span>TechId</span>: {currentUserInfo.techId} <br />
                </span>
                <span>
                  <span>EmailId</span>: {currentUserInfo.email} <br />
                </span>
                <span>
                  <span>Phone</span>: {currentUserInfo.phone} <br />
                </span>
                <span>
                  <span>College</span>: {currentUserInfo.college}
                </span><span>

            <Button variant='contained' sx={{backgroundColor:'#008b8b',margin:"4px",width:"fit-content"}}><Link style={{textDecoration:'none', color:'#fff'}} to="/update" className="">Update Profile</Link></Button>
            <Button variant="contained" sx={{backgroundColor:"#e51a16", color:"#fff",width:"fit-content", margin:"4px", "&:hover":{backgroundColor:"#bc1714", color:"#fff"}}} onClick={handleLogout}>Log Out</Button>
                </span>
              </div>
              
            </div>
            
        </div>
          </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        {/* {
          team.map((a)=>{
            return(
            <p>
            {a.uid}
            </p>)
          })
        } */}
        {currentUserInfo.competitions}
        <RegComps />
      </TabPanel>
      <TabPanel value={value} index={2}>
        {/* Item Three */}
      </TabPanel>
    </Box>
    </>

  );
}