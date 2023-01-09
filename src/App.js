import React, {useState, useEffect, lazy, Suspense } from 'react';
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
import Update from './Components/Update';
import Register from './Components/Register/Register';
// import Merchandise from './Components/Merchandise/Merchandise';
import Login from './Components/Login';
import WorkshopTemplate from './Components/Workshop/WorkshopTemplate';
import {createTheme, ThemeProvider} from "@mui/material/styles";
import { useMediaQuery } from "./Components/MediaQuery";
import RegisterWorkshop from './Components/RegisterWorkshop';
const Competition = lazy(()=> import( './Components/Competitions/Competition'));
const Workshop = lazy(()=> import( './Components/Workshop/Workshop'));
const Merchandise = lazy(()=> import( './Components/Merchandise/Merchandise'));
const Sidenav = lazy(()=> import( './Components/Layout/sidenav'));
const Contact = lazy(()=> import( './Components/Contact/Contact'));
const Home = lazy(()=> import( './Components/Home/Home'));
const Dashboard = lazy(()=> import( './Components/Dashboard/Dashboard'));
const NotFound = lazy(() => import("./Components/404.js"));

function Loader() {
	return (<div style={{width:"100%", height:"100%", display:"flex"}}><div className="suspense-fallback-loader"></div></div>);
}

function App() {
	const [themeColor, setThemeColor] = useState("#000000");
	const [lowergridmenu, setLowergridmenu] = useState([]);
	const big = useMediaQuery('(min-width:900px)');
	const setTheme = (color) => {
		document.body.style.backgroundColor = color;
		setThemeColor(color);
		console.log("body bg set");
	};
	
	const setLowergrid = (array) => {
		setLowergridmenu(array);
	}
	
	const theme = createTheme({
		palette: {
			mode:"dark",
		},
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
						backgroundColor: "#fff",
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
						padding:"7px",
						margin:"0 10px 0",
						"&.Mui-selected": {
							color:"#fff !important",
						}
						
					},
				}
			},
			MuiTabs: {
				styleOverrides: {
					root: {
						width:"100%",
						height:"100%"
					},
					indicator: {
						backgroundColor:"#fff",
						height:"100%",
						opacity:0.5,
					},
					scroller: {
						height:"100%"
					},
					flexContainer:{
						height:"100%",
						justifyContent:"space-between",
						"& button": {
							height:"100%"
						}
					},
					scrollButtons: {
						width:"15px"
					}
				},
				defaultProps:{
					allowScrollButtonsMobile:true,
					variant:"scrollable",
				}
			},
			MuiInputLabel: {
				styleOverrides: {
					root: {
						color:"#fff"
					}
				}
			},
			MuiTextField: {
				styleOverrides: {
					input: { 
						color: 'white', 
						borderColor:'white', 
						border: '1px solid #ced4da', 
					}
				}
			}
		}
	});
	
	
  return (
    <>
    <ThemeProvider theme={theme}>
    <div className="w-100" style={{maxWidth : '100%'}}></div>
    <Router>
	
	<AuthProvider>
      <Routes>
      <Route path='/' element={<Sidenav themeColor={themeColor} lowergridmenu={lowergridmenu} setThemeColor={setTheme} setLowergridmenu={setLowergrid} big={big} />}>
		<Route path='/' element = {<Suspense fallback={<Loader />}><Home setThemeColor={setTheme} setLowergridmenu={setLowergrid} /></Suspense>}></Route>
      	<Route path='/gallery' element={<Suspense fallback={<Loader />}><CarouselFadeExample setThemeColor={setTheme} setLowergridmenu={setLowergrid}/></Suspense>}></Route>
      	<Route path='/merchandise' element={<Suspense fallback={<Loader />}><Merchandise setThemeColor={setTheme} setLowergridmenu={setLowergrid}/></Suspense>}></Route>
		<Route path='/workshops' element={<Suspense fallback={<Loader />}><Workshop setThemeColor={setTheme} setLowergridmenu={setLowergrid}/></Suspense>}></Route>
      	<Route path='/merchandise' element={<Suspense fallback={<Loader />}><Merchandise setThemeColor={setTheme} setLowergridmenu={setLowergrid}/></Suspense>}></Route>
		<Route path='/register-w/:workName' element={<RegisterWorkshop setThemeColor={setTheme} setLowergridmenu={setLowergrid} />} />

      	<Route path='/competitions/'>
      		<Route index element={<Suspense fallback={<Loader />}><Competition setThemeColor={setTheme} setLowergridmenu={setLowergrid} category="" big={big}/></Suspense> }></Route>
      		<Route path="technical/">
      			<Route index element={<Suspense fallback={<Loader />}><Competition setThemeColor={setTheme} setLowergridmenu={setLowergrid} category="Technical" big={big} /></Suspense>}></Route>
      			<Route path=":params" element={<Suspense fallback={<Loader />}><Competition setThemeColor={setTheme} setLowergridmenu={setLowergrid} category="Technical" big={big} /></Suspense> }></Route>
      		</Route>
      		<Route path="entrepreneurial/">
      			<Route index element={<Suspense fallback={<Loader />}><Competition setThemeColor={setTheme} setLowergridmenu={setLowergrid} category="Entrepreneurial" big={big} /></Suspense> }></Route>
      			<Route path=":params" element={<Suspense fallback={<Loader />}><Competition setThemeColor={setTheme} setLowergridmenu={setLowergrid} category="Entrepreneurial" big={big} /></Suspense> }></Route>
      		</Route>
      		<Route path="miscellaneous/">
      			<Route index element={<Suspense fallback={<Loader />}><Competition setThemeColor={setTheme} setLowergridmenu={setLowergrid} category="Miscellaneous" big={big} /></Suspense> }></Route>
      			<Route path=":params" element={<Suspense fallback={<Loader />}><Competition setThemeColor={setTheme} setLowergridmenu={setLowergrid} category="Miscellaneous" big={big} /></Suspense> }></Route>
      		</Route>
      		<Route path="details/">
      			<Route index element={<Suspense fallback={<Loader />}><Competition setThemeColor={setTheme} setLowergridmenu={setLowergrid} category="Details" big={big} /> </Suspense>}></Route>
      			<Route path=":params" element={<Suspense fallback={<Loader />}><Competition setThemeColor={setTheme} setLowergridmenu={setLowergrid} category="Details" big={big} /></Suspense> }></Route>
      		</Route>
      	</Route>
      	<Route path='/contact-us' element={<Suspense fallback={<Loader />}><Contact setThemeColor={setTheme} setLowergridmenu={setLowergrid}/></Suspense>}></Route>
  	    <Route path='/profile' element={<Suspense fallback={<Loader />}><Dashboard setThemeColor={setTheme} setLowergridmenu={setLowergrid}/></Suspense>}></Route>
	    <Route path='/login' element={<Suspense fallback={<Loader />}><Login setThemeColor={setTheme} /></Suspense>}></Route>
	    <Route path='/update' element={<Suspense fallback={<Loader />}><Update setThemeColor={setTheme} setLowergridmenu={setLowergrid}/></Suspense>}></Route>
	    <Route path='/register/:events' element={<Suspense fallback={<Loader />}><Register setThemeColor={setTheme} /></Suspense>}></Route>
		<Route path='/workshop/:workName' element={<Suspense fallback={<Loader />}><WorkshopTemplate setThemeColor={setTheme} /></Suspense>}></Route>
		<Route path='*' element={<Suspense fallback={<div></div>}><NotFound setThemeColor={setTheme} setLowergridmenu={setLowergrid}/></Suspense>}></Route>
      </Route>

    </Routes>
	</AuthProvider>
    </Router>
    </ThemeProvider>
    </>
  );
}

export default App;