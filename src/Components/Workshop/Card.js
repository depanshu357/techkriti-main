import React, {useState} from 'react'
import './card.css';
import {Link} from "react-router-dom";
import axios from 'axios';
import {useAuth} from '../../context/AuthContext'
import Button from '@mui/material/Button';
import { async } from '@firebase/util';


const Card = (props) => {
  const {currentUser,logout} = useAuth();
  const [error, setError] = useState('');
    const [errorM,, setErrorM] = useState('');
    const [loading,setLoading] = useState(false);
    const [success,setSuccess] = useState('');

    async function handleRegister(e){
      setLoading(true)
      axios.post(`http://localhost:9000/api/workshopRegister/`,{
        uid: currentUser.uid,
        workNames: "python"
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
    <div className='workshop-card'>
        <img className='workshop-imgcard' src={props.img ? props.img : "images/4.jpg"}></img>
        <p className='workshop-title'>{props.name}</p>
        <div className='workshop-buttons'>
            <div className='workshop-buttonr'><Link to={`/register-w/${props.name}`} id="button1" disabled={loading} className="workshop-cardlink">REGISTER</Link></div>
            <div className='workshop-buttone'> <Link className="workshop-cardlink" to={`/workshop/${props.name}`}>EXPLORE</Link></div>
        </div>
    </div>
  )
}

export default Card
