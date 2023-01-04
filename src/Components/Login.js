import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {Card, Alert, Button} from 'react-bootstrap';
import { useAuth } from '../context/AuthContext';

export default function Login() {

    const {loginWithGoogle,logout, currentUser} = useAuth();
    const [error, setError] = useState('');

    const [loading,setLoading] = useState(false);
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
  return (
    <div>

         <Button disabled={loading} onClick={handleGoogleLogin} spacing={3} >Sign in</Button>
        {/* <Button className='button-49 loginbutton' disabled={loading} onClick={handleFacebookLogin}><FacebookIcon fontSize="large" /></Button> */}
        {/* {dash && <Link to='/profile'> Dashboard</Link>} */}
    
    </div>
  )
}
