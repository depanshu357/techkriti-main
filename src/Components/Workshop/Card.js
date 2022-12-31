import React from 'react'
import './card.css';
import {Link} from "react-router-dom";

const Card = (props) => {
  return (
    <div className='card'>
        <img className='imgcard' src={props.img ? props.img : "images/4.jpg"}></img>
        <p className='title'>{props.title ? props.title : "PYTHON"}</p>
        <div className='buttons'>
            <div className='buttonr'><Link className="cardlink" to="/">REGISTER</Link></div>
            <div className='buttone'> <Link className="cardlink" to="/">EXPLORE</Link></div>
        </div>
    </div>
  )
}

export default Card
