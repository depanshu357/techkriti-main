import React, {useRef, useState, useMemo, useEffect} from 'react'
import {Route, Link, Routes, useParams} from 'react-router-dom';
import {useAuth} from '../../context/AuthContext'
import {Form, Alert} from 'react-bootstrap'
import TextField from '@mui/material/TextField';
import { Grid, Typography } from '@mui/material';
import axios from 'axios';
import Button from '@mui/material/Button';
import { async } from '@firebase/util';
import './register.css';



export default function Register() {
    const teamNameRef = useRef();
    const {currentUser,logout} = useAuth();
    const params = useParams();
    const [login, setLogin] = useState();
    const [error, setError] = useState('');
    const [errorM,, setErrorM] = useState('');
    const [loading,setLoading] = useState(false);
    const [success,setSuccess] = useState('');
    const [mem, setMem] = useState('');
    const [memList, setMemList] = useState([]);
    const [tid, setTid] = useState('');
    const [tidList, setTidList] = useState([]);
    const [allData, setAllData] = useState([]);
    const [part, setPart] = useState(3);
    


    const [currentUserInfo,setCurrentUserInfo] = useState({
        email : currentUser ? currentUser.email : "0" ,
        uid : currentUser ? currentUser.uid : "0", 
    })

    var participants = 5;
    async function handleMember(e){
        if(part>=0){
        e.preventDefault();
        const data = {mem,tid}
        if(mem&&tid){
            setMemList((ls) => [...ls,mem])
            setTidList((ls) => [...ls,tid])
            setAllData((ls) => [...ls,data])
        } 
        setMem('')
        setTid('')
         setPart(part-1)
        console.log(part)
    } else {
        e.preventDefault();
        window.alert("max limit reached");
        
    }
    }
     useEffect(()=>{
        if(currentUser){
        axios.get(`http://localhost:9000/api/competitions/${params.events}/${currentUser.uid}`)
        .then((response)=>{
            console.log(response.data)
            setLoading(response.data)
        })
        .catch((e)=>console.log(e))
    }   else{
        setLogin(false)
    }
    },[])
    async function handleSubmit(e){
        
        setSuccess('')
        setLoading(true)
        setError('')
        e.preventDefault();
        await axios.post(`http://localhost:9000/api/teamRegister/${params.events}/${currentUser.uid}`,{
            teamName : teamNameRef.current.value,
            memberTechId : tidList,
            memberName : memList
        }).then((response)=>{
            setLoading(false)
            console.log(response.data)
            if(response.data === "NOTREGISTERED")
                setError('User Not registered')
            else
            setSuccess('registered')

        }).catch((err)=>{
            setError('Error registering')
            console.log(err)
            console.log(currentUser.uid)
        })
    }
  return (
   
    <>
    <div class="main">
    <img src = {require("../Contact/images/contact\ us.png")} id='myvideo'></img>
    <h2 className='mainhead'>Register</h2>

        <div class="container1">
            <div class="signup-content">
                <form id="signup-form" className="signup-form" style={{paddingBottom:"0px"}} onSubmit={handleMember}>
                    <h2>{params.events} </h2>
                    <p class="desc"><span></span></p>
                    <div class="form-group">
                        <input type="text" class="form-input" name="name" id='name' value={mem} onChange={(e) => setMem(e.target.value)} placeholder="Member Name"/>
                    </div>
                    <div class="form-group">
                        <input type="number" class="form-input" name="techid" value={tid} id = "techid" onChange={(e) => setTid(e.target.value)} placeholder="TechID"/>
                    </div>
                    {errorM}
                    
                    <div class="form-group">
                        
                        <button className='memberbtn'>Add member</button>
                            </div>
                        <ul className='curmem'>
                         {
                         allData.map((a) => 
                         <li className='mem'>Name: {a.mem} <br></br>TechID: {a.tid}</li>
                          )
                        } 
                        </ul>
                        {error}
                        {success}
                </form>
                <form className='signup-form' style={{paddingTop: "0px"}} onSubmit={handleSubmit}>
                    <h4>Team Name</h4>
                <TextField sx={{"&:hover": {
                            border: "solid #ced4da",
                         }, input: { color: 'white',borderColor:'white', border: '3px solid #ced4da', } }} margin='normal' size='small'  type="name" inputRef={teamNameRef} /> <br></br>
                         <div><Button className='memberbtn' style={{color:"white" , fontSize:"16px", textAlign:"center", backgroundColor:"#6B6B6B"}} disabled={loading} type="submit">Register</Button></div>
                </form>
                {loading && 
                         <>already registered</>
                        }
            </div>
        </div>

    </div>

    </>
  )
}
