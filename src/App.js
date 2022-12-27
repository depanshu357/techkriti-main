import React from 'react';
import './App.css';
import CarouselFadeExample from './Components/Carousel/carousel';
import Layout from './Components/Layout/layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import Competition from './Components/Competitions/Competition';
import {
  BrowserRouter as Router, Routes, Route,
} from "react-router-dom";
import Sidenav from './Components/Layout/sidenav';

function App() {
  return (
    <>
    <div className="w-100" style={{maxWidth : '100%'}}></div>
    <Router>
      <Routes>
      <Route path='/' element={<Sidenav/>}>
      <Route path='/gallery' element={<CarouselFadeExample/>}></Route>
      <Route path='/competition' element={<Competition/>}></Route>
      </Route>
    </Routes>
    </Router>
    </>
  );
}

export default App;
