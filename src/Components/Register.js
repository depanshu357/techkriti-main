import React, {useRef, useState, useMemo, useEffect} from 'react'
import {Route, Link, Routes, useParams} from 'react-router-dom';
import {useAuth} from '../context/AuthContext'
import {Form, Alert} from 'react-bootstrap'
import TextField from '@mui/material/TextField';
import { Grid, Typography } from '@mui/material';
import axios from 'axios';
import Button from '@mui/material/Button';
import { async } from '@firebase/util';

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
                    Register<br/>
                    {params.events}<br/>
                    {currentUser.uid}<br/>
                    {currentUser.competitions}
                    <form onSubmit={handleMember}>
                        <input value={mem} onChange={(e) => setMem(e.target.value)} />
                        <input value={tid} onChange={(e) => setTid(e.target.value)} />
                        {errorM}
                        <button>Add member</button>
                    </form>
                    {
                        allData.map((a) => 
                        <>
                        <li>{a.mem}</li>
                        <li>{a.tid}</li>
                        </>
                        )
                    }
                    {error}
                    {success}
                    <Form onSubmit={handleSubmit}>
                    <Form.Label>team name</Form.Label>
                    <TextField sx={{"&:hover": {
                            border: "solid #ced4da",
                        }, input: { color: 'white',borderColor:'white', border: '1px solid #ced4da', } }} margin='normal' size='small'  type="name" inputRef={teamNameRef} /> 
                        <Button disabled={loading} type="submit" className="w-100 mt-3">Update</Button>
                        </Form>
                        {loading && 
                        <>already registered</>
                        }
    </div>
  )
}
