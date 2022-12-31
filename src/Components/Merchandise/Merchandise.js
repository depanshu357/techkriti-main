
import React, { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
// import "./merchandise.css"
import "./merchandise2.css"
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

      const handleMouseOver =()=> {
        const image = document.getElementsByClassName("image")
        image[0].style.transform = "scale( 1.2 )"
      }
  return (
    <>
    {/* <div className="popUpDisplay ">
          <div className="contentPopUpDisplay">
          <div className="top0fPopUp neonText">TECHKRITI MERCHANDISE<span><CloseIcon sx={{fontSize:"50px",cursor:"pointer",position:"absolute",right:"20px",top:"20px"}} onClick={handleMerchandiseClose} /></span></div>
          <div className="rods">
            <div className="rod"></div>
            <div className="rod"></div>
          </div>
          <div className="ImageOfPopUp">
            <div className="ImageCard">
            <img src="images/Hoodie1.png" alt="Hoodie1" srcset="" />
            <div className="ImageText">
                <a href="#">Buy Now</a>
            </div>
            </div>
            <div className="ImageCard">
            <img src="images/Hoodie1.png" alt="Hoodie2" srcset="" />
            <div className="ImageText">
                <a href="#">Buy Now</a>
            </div>
            </div>
          </div>
          </div>
          </div> */}
          <div className="merchandise">
            <div className="topMerchandise">Techkriti Merchandise</div>
            <div className="contentMerchandise">
              <div className="imageBox">
                <div className="image">
                <img src="images/Hoodie1.png" alt="Hoodie" />
                </div>
                <div className="text">
                <a href="#" onMouseOver={handleMouseOver}>
                  Buy Now
                </a>
                  </div>
              </div>
              <div className="imageBox">
                <div className="image">
                  <img src="images/Hoodie1.png" alt="Jacket" />
                </div>
                <div className="text">
                <a href="#" onMouseOver={handleMouseOver}>
                  Buy Now
                </a>
                  </div>
              </div>
            </div>
          </div>

    </>
  )
}

export default Merchandise
