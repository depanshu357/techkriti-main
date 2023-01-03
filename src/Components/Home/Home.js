import React, { useEffect } from 'react'
import "./home.css"
// import Icon from 'react-svg-use'


const Home = ({setThemeColor, setLowergridmenu}) => {

	useEffect(() => {
		setThemeColor("#000"); //on mount: set theme to black
		setLowergridmenu([]);
	},[]);
	
  return (
    <>
    <img id = "myVideo" src="background.gif">
    </img>
  
</>
  )
}

export default Home
