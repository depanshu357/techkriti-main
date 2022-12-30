import React, {useRef, useState} from 'react'
import {Route, Link, Routes, useParams} from 'react-router-dom';
import {useAuth} from '../context/AuthContext'
import {Form, Alert} from 'react-bootstrap'
import TextField from '@mui/material/TextField';
import { Grid, Typography } from '@mui/material';
import axios from 'axios';
import Button from '@mui/material/Button';

export default function Register() {
    const teamNameRef = useRef();
    const leaderNameRef = useRef();
    const memberNameRef = useRef();
    const memberName2Ref = useRef();
    const memberUidRef = useRef();
    const memberUid2Ref = useRef();
    const {currentUser,logout} = useAuth();
    const params = useParams();
    const [error, setError] = useState('');
    const [loading,setLoading] = useState(false);
    const [success,setSuccess] = useState('');
    const allMembersRef = useRef(new Array())
    const allTechIdRef = useRef(new Array())

    const [currentUserInfo,setCurrentUserInfo] = useState({
        email : currentUser.email,
        uid : currentUser.uid, 
        name: currentUser.name
    })

    async function handleSubmit(e){

        allMembersRef.current.push(memberNameRef)
        allMembersRef.current.push(memberName2Ref)
        allTechIdRef.current.push(memberUidRef)
        allTechIdRef.current.push(memberUid2Ref)
       

        setSuccess('')
        setLoading(true)
        setError('')
        e.preventDefault();
        await axios.post(`http://localhost:9000/api/teamRegister/${params.events}/${currentUser.uid}`,{
            teamName : teamNameRef.current.value,
            memberTechIds : allMembersRef.current.value,
            memberNames : allTechIdRef.current.value
            
        }).then((response)=>{
           
            setLoading(false)
            console.log(response)
            setSuccess('registered')
            // navigate('/profile');

        }).catch((err)=>{
            setError('Error Updating profile')
            console.log(err)
            console.log(currentUser.uid)
        })
        
    }
  return (
    <div>
    Register<br/>
    {params.events}<br/>
    {currentUser.uid}
    <Form onSubmit={handleSubmit}>
    <Form.Label>team name</Form.Label>
                    <TextField sx={{"&:hover": {
                            border: "solid #ced4da",
                        }, input: { color: 'white',borderColor:'white', border: '1px solid #ced4da', } }} margin='normal' size='small'  type="name" inputRef={teamNameRef} /> 
              
                    <Form.Label>member name 1</Form.Label>
                    <TextField sx={{
                                                "&:hover": {
                            border: "solid #ced4da",
                        }, input: { color: 'white',borderColor:'white', border: '1px solid #ced4da', } }} margin='normal' size='small'  type="name" inputRef={memberNameRef} required />
                        <Form.Label>member name 2</Form.Label>
                    <TextField sx={{
                                                "&:hover": {
                            border: "solid #ced4da",
                        }, input: { color: 'white',borderColor:'white', border: '1px solid #ced4da', } }} margin='normal' size='small'  type="name" inputRef={memberName2Ref} required />
                        <Form.Label>Uid member 1 </Form.Label>
                    <TextField sx={{
                                                "&:hover": {
                            border: "solid #ced4da",
                        }, input: { color: 'white',borderColor:'white', border: '1px solid #ced4da', } }} margin='normal' size='small'  type="name" inputRef={memberUidRef} required />
                        <Form.Label>Uid member 2 </Form.Label>
                    <TextField sx={{
                                                "&:hover": {
                            border: "solid #ced4da",
                        }, input: { color: 'white',borderColor:'white', border: '1px solid #ced4da', } }} margin='normal' size='small'  type="name" inputRef={memberUid2Ref} required />
                        <Button disabled={loading} type="submit" className="w-100 mt-3">Update</Button>
                        </Form>
               
   
    </div>
  )
}
