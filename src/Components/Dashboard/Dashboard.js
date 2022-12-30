import React ,{useState,useEffect, useRef} from 'react'
import { Link } from 'react-router-dom';
import {useAuth} from '../../context/AuthContext'
import axios from 'axios';
import {Form, Alert} from 'react-bootstrap'
import {useNavigate} from 'react-router-dom'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Avatar, CardContent, Grid, Typography } from '@mui/material';
// import { Divider } from 'material';
export default function Dashboard() {

    const [error,setError] = useState('');
    const {currentUser,logout} = useAuth();
    const photoURL = currentUser.photoURL;
    const [currentUserInfo,setCurrentUserInfo] = useState({
        name : "",
        college: "",
        email : currentUser.email,
        uid : currentUser.uid,
    })
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
                techid:response.data.techid,
                points:response.data.points,
                linkedin: response.data.linkedin,
                facebook: response.data.facebook,
                instagram: response.data.instagram
            })
        })
        .catch((e)=>console.log(e))
    },[currentUser.uid,currentUser.email])

  return (
    <div>
            {currentUser.email}

            <br/>
            {currentUser.uid}
            <div className='resp-profile'>
    <div className='profile update'>
    <CardContent className='cardProfile'>
            <Grid container>
            <Grid xs={3} style={{paddingTop:10, paddingLeft:10}}>
            
                <Avatar alt="name" className='avatar' src={photoURL} sx={{width:150, height:150, marginLeft:'5px'}} />
                </Grid>
                <Grid xs style={{padding:50, verticalAlign:'center'}}>
                {error && <Alert variant ="danger">{error}</Alert>}
                <h2 className='h2name'>{currentUserInfo.name}</h2>
                </Grid>
            </Grid>
            <Grid container>
                <Grid xs style={{padding:50}}>
                {error && <Alert variant ="danger">{error}</Alert>}
                <div className='row'>
                <div className='column'>
                <p className='p-profile'>Email&nbsp;&nbsp;&nbsp;: {currentUserInfo.email} </p> 
                <p className='p-profile'>Phone&nbsp;&nbsp;&nbsp;: {currentUserInfo.phone} </p>  
                <p className='p-profile'>College&nbsp;: {currentUserInfo.college} </p>  
                <p className='p-profile'>Points&nbsp;&nbsp;: {currentUserInfo.points} </p>
                <p className='p-profile'>TechId&nbsp;&nbsp;: {currentUserInfo.techid} </p>
                <p className='p-profile'>Linkedin&nbsp;&nbsp;: {currentUserInfo.linkedin} </p>
                <p className='p-profile'>Facebook&nbsp;&nbsp;: {currentUserInfo.facebook} </p>
                <p className='p-profile'>Instagram&nbsp;&nbsp;: {currentUserInfo.instagram} </p>
                </div>
                {/* <div className='column'>
                <p >{currentUserInfo.email} </p> 
                <p>{currentUserInfo.phone} </p>
                <p>{currentUserInfo.college} </p>  
                <p>{currentUserInfo.points} </p>
                <p>{currentUserInfo.techid} </p>
                </div> */}
                </div>
                </Grid>
            </Grid>
            <div className="w-100 text-center mt-2">
            <Button variant='contained' sx={{backgroundColor:'#008b8b'}}><Link style={{textDecoration:'none', color:'#fff'}} to="/update" className="">Update Profile</Link></Button>
                <Button variant="link" > Log Out</Button>
            </div>
            </CardContent>
    </div>
    <div className="backto">
       <Button variant='contained' sx={{backgroundColor:'#008b8b'}}><Link style={{textDecoration:'none', color:'#fff'}} to="/">Back to Dashboard</Link></Button>
    </div>
    <div>
    </div>
    </div>

    
    
    </div>
  )
}
