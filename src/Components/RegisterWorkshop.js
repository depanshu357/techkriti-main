import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import { useParams } from "react-router-dom";
import axios from 'axios';
import {useAuth} from '../context/AuthContext';
import { Button } from 'react-bootstrap';
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
    },[])

    async function handleRegister(e){
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
  
  
      }
  return (
    <div>
    <div style={{color:'#fff'}}>
        class <br/> {params.workName}
            <form onSubmit={handleRegister}>
                <label>
                    city
                <input />
                </label><br/>
                <label>
                    phone number if female
                    <input />
                </label>{loading? <>paynow</> : <Button type='submit'>Register for workshop</Button>}
                
            </form>
    </div>
    </div>
  )
}

RegisterWorkshop.propTypes = {}

export default RegisterWorkshop