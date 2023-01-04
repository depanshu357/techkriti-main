import React, { useEffect } from 'react';
import "./home.css";

const Home = ({setThemeColor, setLowergridmenu}) => {

	useEffect(() => {
		setThemeColor("#000"); //on mount: set theme to black
		setLowergridmenu([]);
	},[]);
	
  return (
    <>
    <img id = "myVideo" src="https://i.postimg.cc/1RTj4BNb/background.gif"></img>
    <div className="home-title">
    	<div class="home-container">
		  <svg viewBox="0 0 960 300">
			<symbol id="home-s-text">
			  <text textAnchor="middle" x="50%" y="70%">TECHKRITI'23</text>
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
