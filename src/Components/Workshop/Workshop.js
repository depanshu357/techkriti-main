import React, {useEffect} from 'react'
import Card from './Card'
import { Grid } from '@mui/material';
import "./card.css";

const Workshop = ({setThemeColor, setLowergridmenu}) => {

	useEffect(() => {
		setThemeColor("#000"); //on mount: set theme to black
		setLowergridmenu([]);
	},[]);
	
  return (

  	
    <>
    <b><h2 className='workhead'>WORKSHOPS</h2></b>
    <div className='cards'>
      <div><Card/></div>
      <div><Card/></div>
      <div><Card/></div>
      <div><Card/></div>
      <div><Card/></div>
      <div><Card/></div>
      <div><Card/></div>
      <div><Card/></div>
      <div><Card/></div>
      <div><Card/></div>
      <div><Card/></div>
      <div><Card/></div>
      <div><Card/></div>
      <div><Card/></div>
      <div><Card/></div>
      <div><Card/></div>
      <div><Card/></div>
      <div><Card/></div>
      <div><Card/></div>
      <div><Card/></div>
    </div>
    </>
  )
}

export default Workshop

// import React from 'react'
// import './styles.css'
// import { useState } from 'react'
// const Workshop = () => {
//   const [active,setActive] = useState(true)
//   const [active2,setActive2] = useState(true);
//   const remove = () =>{
//    setActive(false);
//   }
//   const remove2 = ()=>{
//     setActive2(false);
//   }
//   return (
//     <>
//     <div className="container">
//         <div className="python">
//             <h1 className='maintxt'>PYTHON</h1>
//             <p className='collector1'>collector</p>
//             <p className='collector2'>collector</p>
//         </div>
//         <div className= {active ? 'container2':'block'} >
//         <button className='btn' onClick={remove} >ACCEPT</button>
//         <div className='Rectangle4' onClick={remove}></div>
//         <div className='Rec-Text'>qweqwewqeqwwewqeqwe</div>
//        <img src="images/bgRectangle.png" alt="" className='imgWorkshop'/>
//             <h2 className="stoneHistory">STONE HISTORY</h2>
//             <div className="line"></div>
//         </div>
//     </div>
//     <div className={active2 ?'bottom_container':'block2'}>
//         <div className="container2">
//         <button className='btn' onClick={remove2}>ACCEPT</button>
//         <div className='Rectangle4' onClick={remove2}></div>
//         <div className='Rec-Text'>qweqwewqeqwwewqeqwe</div>
//        <img src="images/bgRectangle.png" alt="" className='imgWorkshop'/>
//             <h2 className="stoneHistory">STONE HISTORY</h2>
//             <div className="line2"></div>
//         </div>
//     </div>
//     {/* <div className='workshopCard'>
//     <div>
//       PYTHON
//     </div>  
//     </div> */}
//     <div className="corner2">
//     <div class="corner">
//       <div className="bgCard">
//         <img src="images/bgCard.jpeg" alt="image" />
//       </div>
//       <h1 className='bgText'>
//         PYTHON
//       </h1>
//       <div className='btnCard'>
//         <button className='register'>REGISTER</button>
//         <button className='explore'>EXPLORE</button>
//         </div>
//     </div>
//     </div>
    
//     {/* <img src="images/Hero_design_misc.png" alt="" /> */}
//     </>
    
//   )
// }

// export default Workshop
