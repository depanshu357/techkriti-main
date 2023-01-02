
import React, { useState, useEffect } from 'react'
import CloseIcon from '@mui/icons-material/Close';
// import "./merchandise.css"
import "./merchandise2.css";
import Collapse from '@mui/material/Collapse';
import { style } from '@mui/system';


const Merchandise = (props) => {

	useEffect(() => {
		props.setThemeColor("#000"); //on mount: set theme to black
		props.setLowergridmenu([]);
	},[]);

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

      const image = document.getElementsByClassName("imageMerch")
      const handleMouseOver =()=> {
        image[0].style.transform = "scale( 1.2 )"
        
      }
      const handleMouseOut =()=>{
        image[0].style.transform = "scale( 1 )"
      }
      const handleMouseOver1 =()=> {
        image[1].style.transform = "scale( 1.2 )"
      }
      const handleMouseOut1 =()=>{
        image[1].style.transform = "scale( 1 )"
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
                <div className='topOfImageBox'>#Jacket</div>
                <div className="imageMerch">
                <img src="images/Hoodie1.png" style={{height:'40vh'}} alt="Hoodie" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} />
                </div>
                <div className="descriptionOfImageBox">Lorem ipsum dolor sit amet.</div>
                <div className="textBuy">
                <a href="#" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                  Buy Now
                </a>
                  </div>
              </div>
              <div className="imageBox">
                <div className="topOfImageBox">#Hoodie</div>
                <div className="imageMerch">
                <img src="images/Hoodie1.png" style={{height:'40vh'}} alt="Hoodie" onMouseOver={handleMouseOver1} onMouseOut={handleMouseOut1}/>
                </div>
                <div className="descriptionOfImageBox">Lorem ipsum dolor sit amet.</div>
                <div className="textBuy">
                <a href="#" onMouseOver={handleMouseOver1} onMouseOut={handleMouseOut1}>
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