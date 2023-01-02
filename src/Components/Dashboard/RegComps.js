import React from 'react'
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "./Dashboard1.css";
import {useState,useEffect, useRef} from 'react'
import { Link } from 'react-router-dom';
import {useAuth} from '../../context/AuthContext'
import axios from 'axios';
import FileUpload from './FileUpload';



export default function RegComps() {
    const [teams, setTeams] = useState([]);
    const {currentUser} = useAuth();
    useEffect(()=>{
        axios.get(`http://localhost:9000/api/get-team-detail/${currentUser.uid}`)
        .then((response)=>{
            setTeams(response.data)
            console.log(response.data)
        })
        .catch((e)=>console.log(e))
        
    },[])
    console.log(teams)

  return (
    <div>
    
    {teams.map(employee => {
        return (
          <div key={employee.id}>
            <h2>name: {employee.teamName}</h2>
            
               
              { employee.abstractLink ? <>Abstract Submitted</> : (<FileUpload teamId={employee.leaderTechId}/>)}

            
            
            <h2>country: {employee.leaderName}</h2>
            {
                employee.memberNames.map(e =>{
                    return(
                        <div key={employee.id}>
                        {e}
                        </div>
                    )
                })
            }

            <hr />
          </div>
        );
      })}


    </div>
  )
}
