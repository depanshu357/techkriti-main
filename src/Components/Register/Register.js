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
    //                 <div>
    //                 <h2 className='mainhead'>Register</h2><br/>
    //                 <ul><li>{params.events}</li>
                    
    //                 </ul>
    //                 <form style={{marginLeft:"36px"}} onSubmit={handleMember}>
    //                     <label for="name"> Member Name:</label><br></br>
    //                     <input id='name' value={mem} onChange={(e) => setMem(e.target.value)} /><br></br>
    //                     <label for="techid"> Tech ID:</label><br></br>
    //                     <input value={tid} id = "techid" onChange={(e) => setTid(e.target.value)} /><br></br>
    //                     {errorM}
    //                     <br></br><button className='memberbtn'>Add member</button>
    //                 </form>
    //                 <h5 style={{marginLeft:"36px" , marginTop:"8px", marginBottom:"0px", paddingBottom:"0px"}}>Current Members-</h5> 
    //                 {
    //                     allData.map((a) => 
    //                     <ul className='curmem'>
    //                     <li className='mem'>Name: {a.mem} <br></br>TechID: {a.tid}</li>
    //                     {/* <li>{a.tid}</li> */}
    //                     </ul>
    //                     )
    //                 }
    //                 {error}
    //                 {success}
    //                 <Form style={{marginLeft:"36px"}} onSubmit={handleSubmit}>
    //                 <Form.Label style={{fontSize:"19px", marginTop:"20px", marginRight:"5px"}}>Team name-</Form.Label>
    //                 <TextField sx={{"&:hover": {
    //                         border: "solid #ced4da",
    //                     }, input: { color: 'white',borderColor:'white', border: '3px solid #ced4da', } }} margin='normal' size='small'  type="name" inputRef={teamNameRef} /> <br></br>
    //                     <div><Button style={{color:"white" , fontSize:"16px", textDecoration:"underline", textAlign:"center"}} disabled={loading} type="submit">Update</Button></div>
    //                     </Form>
    //                     {loading && 
    //                     <>already registered</>
    //                     }
    // </div>
    <>
    <div class="main">
    <h2 className='mainhead'>Register</h2>

        <div class="container">
            <div class="signup-content">
                <form id="signup-form" className="signup-form" style={{paddingBottom:"0px"}} onSubmit={handleMember}>
                    <h2>{params.events} </h2>
                    <p class="desc">lorem guggyfyfuyfyuffyf<span>"gfytfyfdtydcf"</span></p>
                    <div class="form-group">
                        <input type="text" class="form-input" name="name" id='name' value={mem} onChange={(e) => setMem(e.target.value)} placeholder="Member Name"/>
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-input" name="techid" value={tid} id = "techid" onChange={(e) => setTid(e.target.value)} placeholder="TechID"/>
                    </div>
                    {errorM}
                    {/* <div class="form-group">
                        <input type="text" class="form-input" name="password" id="password" placeholder="Password"/>
                        <span toggle="#password" class="zmdi zmdi-eye field-icon toggle-password"></span>
                    </div> */}
                    {/* <div class="form-group">
                        <input type="checkbox" name="agree-term" id="agree-term" class="agree-term" />
                        <label for="agree-term" class="label-agree-term"><span><span></span></span>I agree all statements in  <a href="#" class="term-service">Terms of service</a></label>
                    </div> */}
                    <div class="form-group">
                        {/* <input type="submit" name="submit" id="submit" class="form-submit submit" value="Sign up"/>
                        <a href="#" class="submit-link submit">Si</a> */}
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
                <form className='signup-form' style={{paddingTop: "0px"}}>
                    <h4>Team Name</h4>
                <TextField sx={{"&:hover": {
                            border: "solid #ced4da",
                         }, input: { color: 'white',borderColor:'white', border: '3px solid #ced4da', } }} margin='normal' size='small'  type="name" inputRef={teamNameRef} /> <br></br>
                         <div><Button className='memberbtn' style={{color:"white" , fontSize:"16px", textAlign:"center"}} disabled={loading} type="submit">Register</Button></div>
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
