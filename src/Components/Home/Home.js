import React, { useEffect } from 'react';
import "./home.css";

const Home = ({setThemeColor, setLowergridmenu}) => {

	useEffect(() => {
		setThemeColor("#000"); //on mount: set theme to black
		setLowergridmenu([]);
	},[]);
	
  return (
    <>
    {/* <img id = "myVideo" src=""></img> */}
	<video autoPlay loop muted playsInline id="myVideo">
		<source  src="https://ik.imagekit.io/vc4stuoufz/0001-0480__2_.mp4?ik-sdk-version=javascript-1.4.3&updatedAt=1672862349164"/>
		{/* <source  src="https://ik.imagekit.io/vc4stuoufz/contact_us_page_techkriti.mp4?ik-sdk-version=javascript-1.4.3&updatedAt=1672855066214"/> */}
		{/* <source  src="contact us page techkriti.mp4"/> */}
	</video>
    <div className="home-title">
    	<div className="home-container">
		  <svg viewBox="0 0 1250 150">
			<symbol id="home-s-text">
			  <text textAnchor="middle" x="50%" y="90%"  lengthAdjust="spacingAndGlyphs">TECHKRITI'23</text>
			</symbol>

			<g className="home-g-ants">
			  <use href="#home-s-text" className="home-text-copy"></use>
			  <use href="#home-s-text" className="home-text-copy"></use>
			  <use href="#home-s-text" className="home-text-copy"></use>
			  <use href="#home-s-text" className="home-text-copy"></use>
			  <use href="#home-s-text" className="home-text-copy"></use>
			</g>
		  </svg>
		</div>
    </div>
</>
  )
}

export default Home
