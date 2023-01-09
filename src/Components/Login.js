import React, {useState, useEffect} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {Card, Alert, Button} from 'react-bootstrap';
import { useAuth } from '../context/AuthContext';
import MuiButton from "@mui/material/Button"
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
export default function Login() {

    const {loginWithGoogle,logout, currentUser} = useAuth();
    const [error, setError] = useState('');

    const [loading,setLoading] = useState(false);
    const [loggedIn, setLoggedIn] = useState(currentUser?true:false)
  
    const navigate = useNavigate();
    function handleGoogleLogin(e){
        console.log("check")
        e.preventDefault();
        try{
            setError('')
            setLoading(true)
            loginWithGoogle().then((result)=>{
                console.log(result.user.email)
               
                console.log("Got here")
                        navigate("/profile")

            })
 
        } catch{
            setError('Failed to Sign In.') 
        }
        setLoading(false)

    }
    // async function handleFacebookLogin(e){
    //     e.preventDefault();
    //     try{
    //         setError('')
    //         setLoading(true)
    //         await loginWithFacebook();
    //         navigate("/")
    //     } catch(error){
    //         console.log(error)
    //         setError('Failed to Sign In') 
    //     }
    //     setLoading(false)

    // }
    // navigate('/')
            
    // axios.post('http://localhost:3001/',{
    //     uid : currentUser.uid
    // })
    
    useEffect(() => {
    	setLoggedIn(currentUser?true:false);
    },[currentUser]);
    
  return (
    <div>
        {loggedIn?<>
        <Link to="/profile">
            <MuiButton 
         	disabled={loading} 
         	spacing={3} 
         	sx={{
         		color:"white",
         		background:"none",
         		border:"none",
         		textDecoration:"none",
         		"&:hover": {
					color:"white",
					background:"none",
					border:"none",
					textDecoration:"underline"
         		}
         	}}><DashboardCustomizeIcon /></MuiButton></Link></>
        :<MuiButton 
         	disabled={loading} 
         	onClick={handleGoogleLogin} 
         	spacing={3} 
         	sx={{
         		color:"white",
         		background:"none",
         		border:"none",
         		textDecoration:"none",
         		"&:hover": {
					color:"white",
					background:"none",
					border:"none",
					textDecoration:"underline"
         		}
         	}}>Sign in</MuiButton>
        }
         
        {/* <Button className='button-49 loginbutton' disabled={loading} onClick={handleFacebookLogin}><FacebookIcon fontSize="large" /></Button> */}
        {/* {dash && <Link to='/profile'> Dashboard</Link>} */}
    
    </div>
  )
}
