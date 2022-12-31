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
import Dashboard from './Components/Dashboard/Dashboard';
import Home from './Components/Home/Home';
import PrivateRoute from './Components/PrivateRoute';
import Login from './Components/Login';
import { AuthProvider } from './context/AuthContext';
import Update from './Components/Update';
import Register from './Components/Register';
import Workshop from './Components/Workshop/Workshop';
function App() {
	const [themeColor, setThemeColor] = useState("#000000");
	const [lowergridmenu, setLowergridmenu] = useState([]);
	
	const setTheme = (color) => {
		document.body.style.backgroundColor = color;
		setThemeColor(color);
	};
	
	const setLowergrid = (array) => {
		setLowergridmenu(array);
	}
  return (
    <>
    <div className="w-100" style={{maxWidth : '100%'}}></div>
    <Router>
	<AuthProvider>
      <Routes>
      <Route path='/' element={<Sidenav themeColor={themeColor} lowergridmenu={lowergridmenu}/>}>
		<Route path='/' element = {<Home/>}></Route>
      	<Route path='/gallery' element={<CarouselFadeExample setThemeColor={setTheme} setLowergridmenu={setLowergrid}/>}></Route>
		<Route path='/Workshop' element={<Workshop setThemeColor={setTheme} setLowergridmenu={setLowergrid}/>}></Route>
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
      		<Route path="details/">
      			<Route index element={<Competition setThemeColor={setTheme} setLowergridmenu={setLowergrid} category="Details"/> }></Route>
      			<Route path=":params" element={<Competition setThemeColor={setTheme} setLowergridmenu={setLowergrid} category="Details"/> }></Route>
      		</Route>
      	</Route>
      	<Route path='/contact-us' element={<Contact setThemeColor={setTheme} setLowergridmenu={setLowergrid}/>}></Route>
  	    <Route path='/profile' element={<Dashboard/>}></Route>
	    <Route path='/login' element={<Login/>}></Route>
	    <Route path='/update' element={<Update/>}></Route>
	    <Route path='/register/:events' element={<Register/>}></Route>
      </Route>

    </Routes>
	</AuthProvider>
    </Router>
    </>
  );
}

export default App;
