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
		setThemeColor(color);
	};
	
	const setLowergrid = (array) => {
		setLowergridmenu(array);
	}
  return (
    <>
    <div className="w-100" style={{maxWidth : '100%'}}></div>
    <Router>
      <Routes>
      <Route path='/' element={<Sidenav themeColor={themeColor} />}>
      <Route path='/gallery' element={<CarouselFadeExample/>}></Route>
      <Route path='/competition' element={<Competition setThemeColor={setTheme} setLowergridmenu={setLowergrid}/>}></Route>
      <Route path='/contact-us' element={<Contact/>}></Route>
      </Route>
    </Routes>
    </Router>
    </>
  );
}

export default App;
