import React, { useEffect } from 'react'
import "./home.css"

const Home = ({setThemeColor, setLowergridmenu}) => {

	useEffect(() => {
		setThemeColor("#000"); //on mount: set theme to black
		setLowergridmenu([]);
	},[]);
	
  return (
    <>
    <div style={{}}>Video aayegi</div>
    <video controls autoplay>
  <source src="" type="video/mp4" style={{width:"100%"}}></source>
  <source src="movie.ogg" type="video/ogg"></source>
  Your browser does not support the video tag.
</video>
</>
  )
}

export default Home
