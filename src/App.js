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
// import Dashboard from './Components/Dashboard/Dashboard';
// import Dashboard1 from './Components/Dashboard/Dashboard1';
import Home from './Components/Home/Home';
import Dashboard from './Components/Dashboard/Dashboard';
import PrivateRoute from './Components/PrivateRoute';
import Login from './Components/Login';
import { AuthProvider } from './context/AuthContext';
import Update from './Components/Update';
import Register from './Components/Register';
// import Merchandise from './Components/Merchandise/Merchandise';
import Workshop from './Components/Workshop/Workshop';
import Merchandise from './Components/Merchandise/Merchandise';
import WorkshopTemplate from './Components/Workshop/WorkshopTemplate';
import {createTheme, ThemeProvider} from "@mui/material/styles";
import { useMediaQuery } from "./Components/MediaQuery";

function App() {
	const [themeColor, setThemeColor] = useState("#000000");
	const [lowergridmenu, setLowergridmenu] = useState([]);
	const big = useMediaQuery('(min-width:900px)');
	const setTheme = (color) => {
		document.body.style.backgroundColor = color;
		setThemeColor(color);
	};
	
	const setLowergrid = (array) => {
		setLowergridmenu(array);
	}
	
	const theme = createTheme({
		components:{
			MuiTab: {
				styleOverrides:{
					root:{
						textTransform:"none",
						fontSize:"20pt",
						color:"#fff",
						opacity:"1",
					}
				}
			}
		}
	});
	
	const theme1 = createTheme({
		typography: {
			fontFamily:"\"Montserrat\",\"Arial\",sans-serif",
			fontSize:20,
			htmlFontSize:20,
			button: {
				textTransform:"none",
				fontFamily:"\"Montserrat\",\"Arial\",sans-serif",
			}
		},
		components: {
			MuiTab: {
				styleOverrides: {
					root: {
						fontSize:"16pt",
						color:"#fff",
						opacity:1
					}
				}
			},
			MuiTabs: {
				styleOverrides: {
					root: {
						height:"100%",
					},
					indicator: {
						backgroundColor:"#fff",
						height:"100%",
						opacity:0.5,
					},
					scroller: {
						height:"100%"
					}
				},
				defaultProps:{
					allowScrollButtonsMobile:true,
					variant:"scrollable",
				}
			}
		}
	});
	
	
  return (
    <>
    <ThemeProvider theme={theme1}>
    <div className="w-100" style={{maxWidth : '100%'}}></div>
    <Router>
	<AuthProvider>
      <Routes>
      <Route path='/' element={<Sidenav themeColor={themeColor} lowergridmenu={lowergridmenu} setThemeColor={setTheme} setLowergridmenu={setLowergrid} big={big} />}>
		<Route path='/' element = {<Home setThemeColor={setTheme} setLowergridmenu={setLowergrid} />}></Route>
      	<Route path='/gallery' element={<CarouselFadeExample setThemeColor={setTheme} setLowergridmenu={setLowergrid}/>}></Route>
      	<Route path='/merchandise' element={<Merchandise setThemeColor={setTheme} setLowergridmenu={setLowergrid}/>}></Route>
		<Route path='/workshops' element={<Workshop setThemeColor={setTheme} setLowergridmenu={setLowergrid}/>}></Route>
      	<Route path='/merchandise' element={<Merchandise setThemeColor={setTheme} setLowergridmenu={setLowergrid}/>}></Route>
      	<Route path='/competitions/'>
      		<Route index element={<Competition setThemeColor={setTheme} setLowergridmenu={setLowergrid} category="" big={big}/> }></Route>
      		<Route path="technical/">
      			<Route index element={<Competition setThemeColor={setTheme} setLowergridmenu={setLowergrid} category="Technical" big={big} />}></Route>
      			<Route path=":params" element={<Competition setThemeColor={setTheme} setLowergridmenu={setLowergrid} category="Technical" big={big} /> }></Route>
      		</Route>
      		<Route path="entrepreneurial/">
      			<Route index element={<Competition setThemeColor={setTheme} setLowergridmenu={setLowergrid} category="Entrepreneurial" big={big} /> }></Route>
      			<Route path=":params" element={<Competition setThemeColor={setTheme} setLowergridmenu={setLowergrid} category="Entrepreneurial" big={big} /> }></Route>
      		</Route>
      		<Route path="details/">
      			<Route index element={<Competition setThemeColor={setTheme} setLowergridmenu={setLowergrid} category="Details" big={big} /> }></Route>
      			<Route path=":params" element={<Competition setThemeColor={setTheme} setLowergridmenu={setLowergrid} category="Details" big={big} /> }></Route>
      		</Route>
      	</Route>
      	<Route path='/contact-us' element={<Contact setThemeColor={setTheme} setLowergridmenu={setLowergrid}/>}></Route>
  	    <Route path='/profile' element={<Dashboard setThemeColor={setTheme} setLowergridmenu={setLowergrid}/>}></Route>
	    <Route path='/login' element={<Login/>}></Route>
	    <Route path='/update' element={<Update/>}></Route>
	    <Route path='/register/:events' element={<Register/>}></Route>
		<Route path='/workshop/:workName' element={<WorkshopTemplate/>}></Route>

      </Route>

    </Routes>
	</AuthProvider>
    </Router>
    </ThemeProvider>
    </>
  );
}

export default App;