import React, {useState} from 'react';
import './App.css';
import CarouselFadeExample from './Components/Carousel/carousel';
import Layout from './Components/Layout/layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import Competition from './Components/Competitions/Competition';
import {
  BrowserRouter as Router, Routes, Route,
} from "react-router-dom";
import Sidenav from './Components/Layout/sidenav';
import Contact from './Components/Contact/Contact';

function App() {
	const [themeColor, setThemeColor] = useState("#000000");
	const [lowergridmenu, setLowergridmenu] = useState([]);
	
	const setTheme = (color) => {
		document.body.style.backgroundColor = color;
		setThemeColor(color);
		
	};
	
	const setLowergrid = (array) => {
		console.log("received");
		console.log(array);
		setLowergridmenu(array);
	}
  return (
    <>
    <div className="w-100" style={{maxWidth : '100%'}}></div>
    <Router>
      <Routes>
      <Route path='/' element={<Sidenav themeColor={themeColor} lowergridmenu={lowergridmenu}/>}>
      	<Route path='/gallery' element={<CarouselFadeExample setThemeColor={setTheme} setLowergridmenu={setLowergrid}/>}></Route>
      	<Route path='/competitions/'>
      		<Route index element={<Competition setThemeColor={setTheme} setLowergridmenu={setLowergrid} category=""/> }></Route>
      		<Route path="technical/">
      			<Route index element={<Competition setThemeColor={setTheme} setLowergridmenu={setLowergrid} category="Technical"/> }></Route>
      			<Route path=":params" element={<Competition setThemeColor={setTheme} setLowergridmenu={setLowergrid} category="Technical"/> }></Route>
      		</Route>
      		<Route path="entrepreneurial/">
      			<Route index element={<Competition setThemeColor={setTheme} setLowergridmenu={setLowergrid} category="Entrepreneurial"/> }></Route>
      			<Route path=":params" element={<Competition setThemeColor={setTheme} setLowergridmenu={setLowergrid} category="Entrepreneurial"/> }></Route>
      		</Route>
      	</Route>
      	<Route path='/contact-us' element={<Contact setThemeColor={setTheme} setLowergridmenu={setLowergrid}/>}></Route>
      </Route>
    </Routes>
    </Router>
    </>
  );
}

export default App;
