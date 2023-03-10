import React, {useState, useEffect} from "react";
import { Grid, Button, Tab, Tabs } from "@mui/material";
import "./styles.css";
import comps from "./competitions.json";
import { Link, useParams, useNavigate, useLocation } from "react-router-dom";
import Card from "./contestcard";
import EachContest from "./EachContest";
import "./main.css"

function Main({setThemeColor, setLowergridmenu, params, category, big}) {

	const navigate = useNavigate();
	const location = useLocation();
	let current = 0;
	let content = [];
	let competitions = [];
	let links = [];
	let all_contests = [];
	for (const category of comps) {
			for (const contest of category.contests) {
				all_contests.push(...contest.explore);
			}
	}
	
	if (comps.map((el) => (el.category)).includes(category)) {
		content = [];
		content = comps.filter((el) => el.category === category)[0].contests;
		console.log(content);
		competitions = content.map((el) => {
			if (big) return (
				//<div className="main-text">
// 				<div style={{display:"flex", justifyContent:"space-between", margin:"50px", marginBottom:"0px"}} key={el.index}>
// 					<div style={{maxWidth:"60%"}}>
// 					<div style={{margin:"50px"}}>
// 					<h1>{el.title}</h1>
// 					<p>{el.text}</p>
// 					</div>
// 					</div>
// 					<img src={`/images/${el.img}.svg`} alt={`Illustration for the ${el.title} competition`} style={{width:"300px"}} />
// 				</div>
// 				<div style={{display:"flex", flexWrap:"wrap", width:"100%"}}>
// 				{el.explore.map((contest) => (
// 					<div 
// 						style={{alignSelf:"flex-start",margin:"10px"}}
// 						key={contest.name}
// 					>
// 					<Card name={contest.name} title={contest.about}/>
// 					</div>)
// 				)}
// 				</div>
// 				</div>
				
				<div className="main-text">
					{// <div style={{width: "calc(100% - 450px)", maxWidth:"60%", margin:"50px", marginBottom:"10px"}}>
// 						<h1>{el.title}</h1>
// 						<p>{el.text}</p>
// 					</div>
// 					<img src={`/images/${el.img}.svg`} alt={`Illustration for the ${el.title} competition`} style={{width:"300px", float:"right", margin:"20px"}} />
// 					<div className="main-container-card">
// 					{el.explore.map((contest) => (
// 						<div 
// 							style={{margin:"10px"}}
// 							key={contest.name}
// 							>
// 						<Card name={contest.name} title={contest.about}/>
// 						</div>)
// 					)}
// 					</div>
					}
					<div className="scroll-less" style={{width:"60%", height:"100%", overflow:"auto"}}>
					<div style={{margin:"50px"}}>
						<h1>{el.title}</h1>
						<p>{el.text}</p>
					</div>
					<div style={{margin:"0 auto 0", width:"calc(44vw - 60px)", display:"flex", flexWrap:"wrap"}}>
					{el.explore.map((contest) => (
						<Card name={contest.name} key={contest.name} title={contest.cardAbout} />)
					)}
					</div>
					</div>
					<img style={{width:"calc(40% - 100px)", margin:"50px 50px 25px", objectFit:"contain"}} src={`/images/${el.img}.png`} alt={`Illustration for the ${el.title} competition`} />
				</div>
			);
			else return (<div className="main-text-small" style={{padding:"20px"}}>
				<div>
					<h1>{el.title}</h1>
					<p>{el.text}</p>
				</div>
				{/*<img src={`/images/${el.img}.svg`} alt={`Illustration for the ${el.title} competition`} style={{width:"300px"}} />*/}
				<div style={{display:"flex", flexWrap:"wrap", alignSelf:"center", justifyContent:"center"}}>
				{el.explore.map((contest) => (
					<div
						style={{alignSelf:"center",margin:"10px"}}
						key={contest.name}
					>
					<Card name={contest.name}/>
					</div>
				))}
				</div>
			</div>);
		});
		console.log(competitions);
		links = content.map((el) => {
			return (
				<Link 
					to={`/competitions/${category.toLowerCase()}/${el.title.toLowerCase().replace(/\s/g, '')}`}
					style={{
						cursor:"pointer",
						marginLeft:"5px",
						marginRight:"5px",
						flexShrink:"0",
						padding:"5px",
					}}
					key={el.title}
				>
				<Tab value={content.indexOf(el)} label={el.title} />
				</Link>
			);
		});
	} else if (category === "Details" && (all_contests.map(el => el.name.toLowerCase().replace(/\s/g, "")).includes(params))) { //path: /competitons/details/params
		content.push({color:"#000"});
		let contestobj = all_contests.find(el => (el.name.toLowerCase().replace(/\s/g, "") === params));
		competitions = [];
		competitions.push(<EachContest compName={contestobj.name} content={[contestobj.about,"lollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollollol","haha","rip"]}/>);
		
		
		
	} else { //path: /competitons/ OR /competitions/details/
		content.push({color:"#000"});
		competitions.push(<div className="main-text">
		    <video autoPlay loop muted playsInline id="myVideo">
		<source  src="https://ik.imagekit.io/vc4stuoufz/0001-0480__2_.mp4?ik-sdk-version=javascript-1.4.3&updatedAt=1672862349164"/>
		{/* <source  src="https://ik.imagekit.io/vc4stuoufz/contact_us_page_techkriti.mp4?ik-sdk-version=javascript-1.4.3&updatedAt=1672855066214"/> */}
		{/* <source  src="contact us page techkriti.mp4"/> */}
	</video>
			<div className="containercomp">
	<Link to="/competitions/technical/">
			  <div className="contest-main-card">
				<div className="contest-main-face contest-main-face1">
				  <div className="contest-main-content">
					<img className="contest-main-img" style={{backgroundColor:"#fffc00"}} src={require("./images/tech.jpg")}></img>
				  </div>
				</div>
				<div className="contest-main-face contest-main-face2">
				  <h2 className="contest-main-h2">TECHNICAL</h2>
				</div>
			  </div>
			</Link>
			<Link to="/competitions/entrepreneurial">
			  <div className="contest-main-card">
				<div className="contest-main-face contest-main-face1">
				  <div className="contest-main-content">
					<img className="contest-main-img" style={{backgroundColor:"#00fffc"}} src={require("./images/entrepreneurial.png")}></img>
				  </div>
				</div>
				<div className="contest-main-face contest-main-face2">
				  <h2 className="contest-main-h2">ENTREPRENEURIAL</h2>
				</div>
			  </div>

			</Link>
			<Link to="/competitions/miscellaneous">
			  <div className="contest-main-card">
				<div className="contest-main-face contest-main-face1">
				  <div className="contest-main-content">
					<img className="contest-main-img" style={{backgroundColor:"#fc00ff"}} src={require("./images/miscellaneous.jpg")}></img>
				  </div>
				</div>
				<div className="contest-main-face contest-main-face2">
				  <h2 className="contest-main-h2">MISCELLANEOUS</h2>
				</div>
			  </div>
			</Link>
			</div>
		</div>);
	}
	
	
	
		
	if (params && (comps.map((el) => (el.category)).includes(category)) && content.findIndex((el) => (el.title.toLowerCase().replace(/\s/g, '') === params)) > 0) {
		current = content.findIndex((el) => (el.title.toLowerCase().replace(/\s/g, '') === params));	
	} else current = 0;



	//on anything: set lowergridmenu to what it needs to be
	useEffect(() => {
		const lowergridmenu = comps.map((el) => {
			return {
				text:el.category,
				link:`competitions/${el.category.toLowerCase()}`
			}
		});
		setLowergridmenu(lowergridmenu);
		setThemeColor(content[current].color);
		console.log("setting lowergridmenu");
	}, [location]);
	
	const setSlide = (number) => {
		current = number;
	}
	

  return (
  		<>
          <div className="main-container">
            {competitions[current]}
          {comps.map((el) => (el.category)).includes(category)
          ? <Tabs
          		style={{
          			width:"100%", 
          			maxHeight: "60px", 
          			marginLeft:"10px", 
          			marginRight: "10px", 
          			borderTop:"solid 1px #fff"
          		}} 
          		variant="scrollable" 
          		value={current}
          	>
          		{links}
          	</Tabs>
          	: ""}
          </div>
        </>
    //     {/* </Grid>
    //   </Grid>
    // </div> */}
  );
}

export default Main;