import React ,{useState,useEffect, useRef} from 'react'
import { Link } from 'react-router-dom';
import {useAuth} from '../context/AuthContext'
import axios from 'axios';
import {Form, Alert} from 'react-bootstrap'
import {useNavigate} from 'react-router-dom'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Grid, Typography } from '@mui/material';
export default function Dashboard() {

    const nameRef = useRef();
    const emailRef = useRef();
    const collegeRef= useRef();

    const {currentUser,logout} = useAuth();
    const [error, setError] = useState('');
    const [loading,setLoading] = useState(false);
    const [success,setSuccess] = useState('');
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
            
        }).then((response)=>{
           
            setLoading(false)
            console.log(response)
            setSuccess('Profile Updated. Go to Dashboard.')
            // navigate('/profile');

        }).catch((err)=>{
            setError('Error Updating profile')
            console.log(err)
            console.log(currentUser.uid)
        })
        
    }
  return (
    <div>
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
            <div><Form onSubmit={handleSubmit}>
                
                    <Form.Label>Name</Form.Label>
                    <TextField sx={{"&:hover": {
    border: "solid #ced4da",
  }, input: { color: 'white',borderColor:'white', border: '1px solid #ced4da', } }} margin='normal' size='small'  type="name" inputRef={nameRef} /> 
              
                    <Form.Label>College</Form.Label>
                    <TextField sx={{
                        "&:hover": {
    border: "solid #ced4da",
  }, input: { color: 'white',borderColor:'white', border: '1px solid #ced4da', } }} margin='normal' size='small'  type="name" inputRef={collegeRef} required />
               
                    
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
            </Form><br/></div>
            </Grid>
            </Grid>
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
