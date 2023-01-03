import React, {useState} from 'react';
import {lazy, Suspense } from 'react';
import './App.css';
import CarouselFadeExample from './Components/Carousel/carousel';
import Layout from './Components/Layout/layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
	BrowserRouter as Router, Routes, Route,
} from "react-router-dom";
// import Dashboard from './Components/Dashboard/Dashboard';
// import Dashboard1 from './Components/Dashboard/Dashboard1';
import PrivateRoute from './Components/PrivateRoute';
import { AuthProvider } from './context/AuthContext';
import {createTheme, ThemeProvider} from "@mui/material/styles";
import { useMediaQuery } from "./Components/MediaQuery";
const Login =lazy(()=>import( './Components/Login'));
const Update =lazy(()=>import( './Components/Update'));
const Register =lazy(()=>import( './Components/Register/Register'));
// import Merchandise from './Components/Merchandise/Merchandise';
const WorkshopTemplate =lazy(()=>import( './Components/Workshop/WorkshopTemplate'));
const Home = lazy(()=> import( './Components/Home/Home'));
const Competition = lazy(()=> import( './Components/Competitions/Competition'));
const Sidenav = lazy(()=> import( './Components/Layout/sidenav'));
const Contact = lazy(()=> import( './Components/Contact/Contact'));
const Dashboard = lazy(()=> import( './Components/Dashboard/Dashboard'));
const Workshop = lazy(()=> import( './Components/Workshop/Workshop'));
const Merchandise = lazy(()=> import( './Components/Merchandise/Merchandise'));

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
			MuiButton: {
				styleOverrides: {
					root : {
						// backgroundColor: "#fff",
						color: "#000",
						textDecoration:"none",
						'&:hover': {
							backgroundColor:"#bbb",
						}
					}
					
				}
			},
			MuiTab: {
				styleOverrides: {
					root: {
						fontSize:"16pt",
						color:"#fff",
						opacity:1,
						padding:"7px"
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
					},
					scrollButtons: {
						width:"15px"
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
    <ThemeProvider theme={theme}>
    <div className="w-100" style={{maxWidth : '100%'}}></div>
    <Router>
	<Suspense fallback={<div>Loading...</div>}>
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
      		<Route path="miscellaneous/">
      			<Route index element={<Competition setThemeColor={setTheme} setLowergridmenu={setLowergrid} category="Miscellaneous" big={big} /> }></Route>
      			<Route path=":params" element={<Competition setThemeColor={setTheme} setLowergridmenu={setLowergrid} category="Miscellaneous" big={big} /> }></Route>
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
	</Suspense>
    </Router>
    </ThemeProvider>
    </>
  );
}

export default App;