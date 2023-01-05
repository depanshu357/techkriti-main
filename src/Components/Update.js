import React ,{useState,useEffect, useRef} from 'react'
import { Link, Navigate } from 'react-router-dom';
import {useAuth} from '../context/AuthContext'
import axios from 'axios';
import {Form, Alert} from 'react-bootstrap'
import {useNavigate} from 'react-router-dom'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Grid, Typography, InputLabel } from '@mui/material';


export default function Dashboard({setThemeColor, setLowergridmenu}) {
	useEffect(() => {
		setThemeColor("#000");
		setLowergridmenu([]);
	},[]);
    const nameRef = useRef();
    const emailRef = useRef();
    const collegeRef= useRef();
    const phoneRef = useRef();

    const {currentUser,logout} = useAuth();
    const [error, setError] = useState('');
    const [loading,setLoading] = useState(false);
    const [success,setSuccess] = useState('');
    const navigate = useNavigate();
    const [currentUserInfo,setCurrentUserInfo] = useState({
        email : currentUser.email,
        uid : currentUser.uid, 
    })
    async function handleSubmit(e){
        setSuccess('')
        setLoading(true)
        setError('')
        e.preventDefault();
        await axios.post("http://localhost:9000/api/update-profile/",{
            uid : currentUser.uid,
            name : nameRef.current.value,
            email : currentUser.email,
            college : collegeRef.current.value,
            phone: phoneRef.current.value
            
        }).then((response)=>{
           
            setLoading(false)
            console.log(response)
            setSuccess('Profile Updated. Go to Dashboard.')
            navigate('/profile')
            // navigate('/profile');

        }).catch((err)=>{
            setError('Error Updating profile')
            console.log(err)
            console.log(currentUser.uid)
        })
        
    }
  return (
    /*<div>
            {currentUser.email}

            <br/>
            {currentUser.uid}
            <div className='resp-profile'>
    <div className='profile update'>
       <Grid container>
            <Grid item xs>
            <Typography variant='h2' sx={{color:'#6BDFF4'}}>Update Profile
            </Typography></Grid>
            <Grid>
            {error && <Alert variant ="danger">{error}</Alert>}
            {success && <Alert variant="success">{success}</Alert>}
            <div>
            
            <Form onSubmit={handleSubmit}>
                
                    <Form.Label>Name</Form.Label>
                    <TextField sx={{"&:hover": {
                        border: "solid #ced4da",
                    }, input: { color: 'white',borderColor:'white', border: '1px solid #ced4da', } }} margin='normal' size='small'  type="name" inputRef={nameRef} /> 
              
                    <br/><Form.Label>College</Form.Label>
                    <TextField sx={{
                        "&:hover": {
                        border: "solid #ced4da",
                    }, input: { color: 'white',borderColor:'white', border: '1px solid #ced4da', } }} margin='normal' size='small'  type="name" inputRef={collegeRef} required />
                    <br/><Form.Label>Phone number</Form.Label>
                    <TextField sx={{
                        "&:hover": {
                        border: "solid #ced4da",
                    }, input: { color: 'white',borderColor:'white', border: '1px solid #ced4da', } }} margin='normal' size='small'  type="name" inputRef={phoneRef} required />
                
                    
                    <Form.Control
                        className = "textfield"
                        // fullWidth
                        disabled
                        margin='normal'
                        size='small'
                        defaultValue={currentUser.email}
                        required
                    /><br />
                <Button disabled={loading} type="submit" className="w-100 mt-3">Update</Button>
            </Form>
            
            
            <br/></div>
            </Grid>
            </Grid>
    </div>
    <div className="backto">
       <Button variant='contained' sx={{backgroundColor:'#008b8b'}}><Link style={{textDecoration:'none', color:'#fff'}} to="/">Back to Dashboard</Link></Button>
    </div>
    </div>
    </div>*/
    
	<div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
		<div style={{fontSize:"3rem", color:"#6BDFF4"}}>Update Profile</div>
		<div>User ID: {currentUser.uid}</div>
		<div style={{margin:"10px"}}></div>
		{error && <Alert variant ="danger">{error}</Alert>}
        {success && <Alert variant="success">{success}</Alert>}
        <div style={{marginTop:"auto"}}>
            <Form onSubmit={handleSubmit}>  
		
				<InputLabel id="name-label" sx={{color:"white"}}>Name:</InputLabel>
				<TextField sx={{"&:hover": {
					border: "solid #ced4da",
				}, input: { color: 'white',borderColor:'white', border: '1px solid #ced4da', } }} margin='normal' size='small' type="name" inputRef={nameRef} labelId="name-label" /> 
				<br/>
				<InputLabel id="college-label" sx={{color:"white"}}>College:</InputLabel>
				<TextField sx={{
					"&:hover": {
					border: "solid #ced4da",
				}, input: { color: 'white', borderColor:'white', border: '1px solid #ced4da', } }} margin='normal' size='small'  type="name" inputRef={collegeRef} required />
				<br/>
				<InputLabel id="phone-label" sx={{color:"white"}}>Phone number:</InputLabel>
				<TextField sx={{
					"&:hover": {
					border: "solid #ced4da",
				}, input: { color: 'white',borderColor:'white', border: '1px solid #ced4da', } }} margin='normal' size='small'  type="name" inputRef={phoneRef} required />
				<Form.Control
					className = "textfield"
					// fullWidth
					disabled
					margin='normal'
					size='small'
					defaultValue={currentUser.email}
					required
				/>
				<br />
				<Button disabled={loading} type="submit" className="w-100 mt-3">Update</Button>
            </Form>
        </div>
	</div>
  )
}
