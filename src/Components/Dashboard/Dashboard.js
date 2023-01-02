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
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
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

export default function BasicTabs() {


    const [error,setError] = useState('');
    const [team,setTeam] = useState([Object]);
    const {currentUser,logout} = useAuth();
    const photoURL = currentUser.photoURL;
    const navigate = useNavigate();
    const [currentUserInfo,setCurrentUserInfo] = useState({
        name : "",
        college: "",
        email : currentUser.email,
        uid : currentUser.uid,
        phone: currentUser.phone,
        competitions: currentUser.competitions
    })

    // let allTeam;
    // axios.get(`http://localhost:9000/api/get-team-detail/${currentUser.uid}`).then((response)=>{
    //     allTeam = response.data
    //     setTeam(allTeam)
        
    // }).catch((e)=>console.log(e))
    // console.log(team)
    useEffect(()=>{
        axios.post('http://localhost:9000/api/',{
        uid : currentUser.uid,
        email : currentUser.email,
        })
        .then((response)=>{
            setCurrentUserInfo({
                name : response.data.name,
                college: response.data.college,
                email : response.data.email,
                uid : response.data.uid,
                phone : response.data.phone,
                competitions: response.data.competitions
             
            })
        })
        .catch((e)=>console.log(e))
    },[currentUser.uid,currentUser.email])
    async function handleLogout(){
      try{
          setError('');
          await logout();
          navigate('/login');
      } catch{
          setError('Failed to logout')
      }
  }
  const [value, setValue] = React.useState(0);
  let techId = ""
   
  

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    
    <Box sx={{ width: "100%", height: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          sx={{ color: "white" }}
        >
          <Tab label="Profile" {...a11yProps(0)} sx={{ color: "white" }} />
          <Tab
            label="Registered WorkShops"
            {...a11yProps(1)}
            sx={{ color: "white" }}
          />
          <Tab
            label="Registerd Competitions"
            {...a11yProps(2)}
            sx={{ color: "white" }}
          />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0} sx={{ height: "100%", width: "100%" }}>
        <div className="Dashboard">
        {/* {currentUser.email}

            <br/>
            {currentUser.uid} */}
          <div className="top"></div>
          <div className="content">
            <div className="image">
              <img
                src={photoURL}
                alt="default"
                srcset=""
              />
            </div>
            <div className="text">
              <h1>
                Hello <span>{currentUserInfo.name}</span>!!
              </h1>
              <div className="info">
                <span>
                  <span>techId</span>: {techId} <br />
                </span>
                <span>
                  <span>emailId</span>: {currentUserInfo.email} <br />
                </span>
                <span>
                  <span>phone</span>: {currentUserInfo.phone} <br />
                </span>
                <span>
                  <span>college</span>: {currentUserInfo.college}
                </span>
              </div>
              
            </div>
          </div>
          
        </div>
        <div className="w-100 text-center mt-2">
            <Button variant='contained' sx={{backgroundColor:'#008b8b'}}><Link style={{textDecoration:'none', color:'#fff'}} to="/update" className="">Update Profile</Link></Button>
                <Button variant="link" onClick={handleLogout}> Log Out</Button>
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
        Item Three
      </TabPanel>
    </Box>
  );
}
