import React, {useRef, useState, useMemo, useEffect} from 'react'
import {Route, Link, Routes, useParams} from 'react-router-dom';
import {useAuth} from '../context/AuthContext'
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
        email : currentUser.email,
        uid : currentUser.uid, 
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
        axios.get(`http://localhost:9000/api/competitions/${params.events}/${currentUser.uid}`)
        .then((response)=>{
            console.log(response.data)
            setLoading(response.data)
        })
        .catch((e)=>console.log(e))
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
                    <div>
                    <h2 className='mainhead'>Register</h2><br/>
                    <ul><li>{params.events}</li>
                    <li>{currentUser.uid}</li>
                    <li>{currentUser.competitions}</li>
                    </ul>
                    <form style={{marginLeft:"36px"}} onSubmit={handleMember}>
                        <label for="name"> Member Name:</label><br></br>
                        <input id='name' value={mem} onChange={(e) => setMem(e.target.value)} /><br></br>
                        <label for="techid"> Tech ID:</label><br></br>
                        <input value={tid} id = "techid" onChange={(e) => setTid(e.target.value)} /><br></br>
                        {errorM}
                        <br></br><button className='memberbtn'>Add member</button>
                    </form>
                    <h5 style={{marginLeft:"36px" , marginTop:"8px", marginBottom:"0px", paddingBottom:"0px"}}>Current Members-</h5> 
                    {
                        allData.map((a) => 
                        <ul className='curmem'>
                        <li className='mem'>Name: {a.mem} <br></br>TechID: {a.tid}</li>
                        {/* <li>{a.tid}</li> */}
                        </ul>
                        )
                    }
                    {error}
                    {success}
                    <Form style={{marginLeft:"36px"}} onSubmit={handleSubmit}>
                    <Form.Label style={{fontSize:"19px", marginTop:"20px", marginRight:"5px"}}>Team name-</Form.Label>
                    <TextField sx={{"&:hover": {
                            border: "solid #ced4da",
                        }, input: { color: 'white',borderColor:'white', border: '3px solid #ced4da', } }} margin='normal' size='small'  type="name" inputRef={teamNameRef} /> <br></br>
                        <div><Button style={{color:"white" , fontSize:"16px", textDecoration:"underline", textAlign:"center"}} disabled={loading} type="submit">Update</Button></div>
                        </Form>
                        {loading && 
                        <>already registered</>
                        }
    </div>
  )
}
