import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import { useParams } from "react-router-dom";
import axios from 'axios';
import {useAuth} from '../context/AuthContext';
import { TextField, InputLabel, Button } from '@mui/material';
function RegisterWorkshop({setThemeColor, setLowergridmenu}) {
    const params = useParams()

    useEffect(() => {
		setThemeColor("#000"); //on mount: set theme to black
		setLowergridmenu([]);
	},[]);

    const {currentUser,logout} = useAuth();
    const [error, setError] = useState('');
    const [errorM,, setErrorM] = useState('');
    const [loading,setLoading] = useState(false);
    const [success,setSuccess] = useState('');
    
    const [formData, setFormData] = useState({phone:"",city:""})


	const handlePhoneChange = (event) => {
    	console.log(event.target.value);
    	console.log(formData);
    	console.log(formData.phone !== "" && (formData.phone.match(/[^0-9]/g) || formData.phone.length < 10 || formData.phone.length > 11)); 
    	setFormData({...formData, phone:event.target.value});
    };
    
    const handleCityChange = (event) => {
    	console.log(event.target.value);
    	console.log(formData);
    	setFormData({...formData, city:event.target.value});
    };
    useEffect(()=>{
        if(currentUser){
        axios.get(`http://localhost:9000/api/competitions/${params.events}/${currentUser.uid}`)
        .then((response)=>{
            console.log(response.data)
            setLoading(response.data)
        })
        .catch((e)=>console.log(e))
    }   else{
        setLoading(false)
    }
    },[]);

    async function handleRegister(e){
    	e.preventDefault();
    	if ((formData.phone === "" || formData.phone.match(/[^0-9]/g) || formData.phone.length < 10 || formData.phone.length > 11) || (formData.city === "")) {
    		return;
    	}
        setLoading(true)
        axios.post(`http://localhost:9000/api/workshopRegister/`,{
          uid: currentUser.uid,
          workNames: params.workName
          }).then((response)=>{
            console.log(response.data)
            if(response.data === "Already Registered")
              setLoading(true)
  
          }).catch((err)=>{
              setError('Error registering')
              console.log(err)
              console.log(currentUser.uid)
          })
  		setFormData({phone:"",city:""});
  
      }
  return (
//     <div>
//     <div >
//         class <br/> {params.workName}
//             <form onSubmit={handleRegister}>
//                 <label>
//                     city
//                 <input />
//                 </label><br/>
//                 <label>
//                     phone number if female
//                     <input />
//                 </label>{loading? <>paynow</> : <Button type='submit'>Register for workshop</Button>}
//                 
//             </form>
//     </div>
//     </div>
	<div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
		<div style={{fontSize:"3rem", color:"#6BDFF4"}}>Register</div>
		<div style={{fontSize:"2rem"}}> You are registering for the {params.workName} workshop.</div>
		<form onSubmit={handleRegister}>
			<InputLabel>Phone number:</InputLabel>
			<TextField error={formData.phone !== "" && (formData.phone.match(/[^0-9]/g) || formData.phone.length < 10 || formData.phone.length > 11)} value={formData.phone} onChange={handlePhoneChange} required/>
			<div>{formData.phone !== "" && (formData.phone.match(/[^0-9]/g) || formData.phone.length < 10 || formData.phone.length > 11) ? "Please enter a valid phone number." : ""}</div>
			<br />
			<InputLabel>City where you live:</InputLabel>
			<TextField value={formData.city} onChange={handleCityChange} required/>
			<br />
			<br />
			{loading ? <Button>Pay Now</Button> : <Button type="submit">Submit registration</Button>}
		</form>
	</div>
  )
}

RegisterWorkshop.propTypes = {}

export default RegisterWorkshop