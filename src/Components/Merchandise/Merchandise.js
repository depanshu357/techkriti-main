
import React, { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import "./merchandise.css"
import Collapse from '@mui/material/Collapse';


const Merchandise = (props) => {
    const [checked,setChecked] = useState(false)
    const handleMerchandise = (event) => {
        console.log(event.target);
        const display = document.getElementsByClassName("popUpDisplay");
        display[0].classList.remove("MerchandiseClose");
    
        // event.target.classList.add("mylink-active")
      }

      const TimedFunction = () =>{
        const display = document.getElementsByClassName("popUpDisplay");
        display[0].classList.add("MerchandiseClose");

      }

      const handleMerchandiseClose = (event) =>{
        const display = document.getElementsByClassName("popUpDisplay");
        props.setChecked(pre=>!pre);
        display[0].classList.add("beforeMerchandiseClose");
        setTimeout(TimedFunction,800)
        display[0].classList.remove("smallPage");
        console.log(display[0]);
      }
  return (
    <>
    <div className="popUpDisplay MerchandiseClose">
    <Collapse in={props.checked} sx={{display:"flex",flexWrap:"wrap",maxWidth:"600px"}}>
          <div className="contentPopUpDisplay">

          <div className="top0fPopUp neonText">TECHKRITI MERCHANDISE<span><CloseIcon sx={{fontSize:"50px",cursor:"pointer",position:"absolute",right:"20px",top:"20px"}} onClick={handleMerchandiseClose} /></span></div>
          <div className="rods">
            <div className="rod"></div>
            <div className="rod"></div>
          </div>
          <div className="ImageOfPopUp">
            <div className="ImageCard">
            <img src="/images/Hoodie1.png" alt="#" srcset="" />
            <div className="ImageText">
                {/* <span>Black Hoodie</span> */}
                <a href="#">Buy Now</a>
            </div>
            </div>
            <div className="ImageCard">
            <img src="/images/Hoodie1.png" alt="#" srcset="" />
            <div className="ImageText">
                {/* <span>Black Hoodie</span> */}
                <a href="#">Buy Now</a>
            </div>
            </div>
          </div>
          </div>
    </Collapse>
          </div>

    </>
  )
}

export default Merchandise
