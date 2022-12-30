
import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import "./merchandise.css"

const Merchandise = () => {
    const handleMerchandise = (event) => {
        console.log(event.target);
        const display = document.getElementsByClassName("popUpDisplay");
        display[0].classList.remove("MerchandiseClose");
    
        // event.target.classList.add("mylink-active")
      }
      const handleMerchandiseClose = (event) =>{
        const display = document.getElementsByClassName("popUpDisplay");
        display[0].classList.add("MerchandiseClose");
        console.log(display[0]);
      }
  return (
    <div className="popUpDisplay MerchandiseClose">
          <div className="contentPopUpDisplay">

          <div className="top0fPopUp neonText">TECHKRITI MERCHANDISE<span><CloseIcon sx={{fontSize:"50px",cursor:"pointer",position:"absolute",right:"20px",top:"20px"}} onClick={handleMerchandiseClose} /></span></div>
          <div className="rods">
            <div className="rod"></div>
            <div className="rod"></div>
          </div>
          <div className="ImageOfPopUp">
            <div className="ImageCard">
            <img src="images/Hoodie1.png" alt="#" srcset="" />
            <div className="ImageText">
                {/* <span>Black Hoodie</span> */}
                <a href="#">Buy Now</a>
            </div>
            </div>
            <div className="ImageCard">
            <img src="images/Hoodie1.png" alt="#" srcset="" />
            <div className="ImageText">
                {/* <span>Black Hoodie</span> */}
                <a href="#">Buy Now</a>
            </div>
            </div>
          </div>
          </div>
          </div>
  )
}

export default Merchandise
