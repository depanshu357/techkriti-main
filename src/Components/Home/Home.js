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
			  <text text-anchor="middle" x="50%" y="80%">TECHKRITI</text>
			</symbol>

			<g class = "home-g-ants">
			  <use href="#home-s-text" class="home-text-copy"></use>
			  <use href="#home-s-text" class="home-text-copy"></use>
			  <use href="#home-s-text" class="home-text-copy"></use>
			  <use href="#home-s-text" class="home-text-copy"></use>
			  <use href="#home-s-text" class="home-text-copy"></use>
			</g>
		  </svg>
		</div>
    </div>
</>
  )
}

export default Home
