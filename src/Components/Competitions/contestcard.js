import React from "react";
import "./styles.css";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

function Card(props){
    return(
        <div className="contestcard">
            <div className="content">
                <div className="imgBox">
                    {/* <img className="contactImage" src={props.image} alt="img05"  /> */}
                </div>
                <div className="contentBx">
                    <h3>
                        {props.name}
                        <br />
                        <span>{props.title}</span>
                    </h3>
                </div>
                <div className="buttonBx">
                    <Link to={`/competitions/details/${props.name.toLowerCase().replace(/\s/g, "")}`}>
                        <Button variant="contained" style={{margin: "10px"}}>Details</Button>
                    </Link>
					    <Button variant="contained" style={{margin: "10px"}}>Register</Button>
                </div>
            </div>
        </div>
    )
}

export default Card;