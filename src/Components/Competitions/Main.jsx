import React, {useState, useEffect} from "react";
import { Grid, Button, Tab, Tabs } from "@mui/material";
import "./styles.css";
import comps from "./competitions.json";
import { Link, useParams, useNavigate, useLocation } from "react-router-dom";
import Card from "./contestcard";
import EachContest from "./EachContest";

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
		content = comps.filter((el) => el.category === category)[0].contests;
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
					<div style={{width: "calc(100% - 400px)", maxWidth:"60%", margin:"50px", marginBottom:"10px"}}>
						<h1>{el.title}</h1>
						<p>{el.text}</p>
					</div>
					<img src={`/images/${el.img}.svg`} alt={`Illustration for the ${el.title} competition`} style={{width:"300px", float:"right"}} />
					{el.explore.map((contest) => (
						<div 
							style={{margin:"10px"}}
							key={contest.name}
						>
						<Card name={contest.name} title={contest.about}/>
						</div>)
					)}
				</div>
			);
			else return (<div className="main-text-small" style={{padding:"20px"}}>
				<div>
					<h1>{el.title}</h1>
					<p>{el.text}</p>
				</div>
				<img src={`/images/${el.img}.svg`} alt={`Illustration for the ${el.title} competition`} style={{width:"300px"}} />
				<div style={{display:"flex", flexWrap:"wrap", alignSelf:"center", justifyContent:"center"}}>
				{el.explore.map((contest) => (
					<div
						style={{alignSelf:"center",margin:"10px"}}
						key={contest.name}
					>
					<Card name={contest.name} title={contest.about}/>
					</div>
				))}
				</div>
			</div>);
		});
		links = content.map((el) => {
			return (
				<Link 
					to={`/competitions/${category.toLowerCase()}/${el.title.toLowerCase().replace(/\s/g, '')}`}
					style={{
						cursor:"pointer",
						marginLeft:"20px",
						marginRight:"20px",
						flexShrink:"0",
						padding:"5px"
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
		competitions.push(<div className="contestEach">
		<EachContest compName={contestobj.name} content={contestobj.about}/>
		{/* <h1>{contestobj.name}</h1>
		<h2>{contestobj.about}</h2> */}
		</div>);
	} else { //path: /competitons/ OR /competitions/details/
		content.push({color:"#000"});
		competitions.push(<div className="main-text">
		    <img id="myVideo" src = "background.gif"></img>
			<div class="containercomp">

  <div class="card">
    <div class="face face1">
      <div class="content">
        <span class="stars"></span>
        <h2 class="java">Technical</h2>
        <p class="java">Java is a class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.</p>
      </div>
    </div>
    <div class="face face2">
      <h2>01</h2>
    </div>
  </div>

  <div class="card">
    <div class="face face1">
      <div class="content">
        <span class="stars"></span>
        <h2 class="python">Enterprenurial</h2>
        <p class="python">Python is an interpreted, high-level and general-purpose programming language.</p>
      </div>
    </div>
    <div class="face face2">
      <h2>02</h2>
    </div>
  </div>

  <div class="card">
    <div class="face face1">
      <div class="content">
        <span class="stars"></span>
        <h2 class="cSharp">Misc</h2>
        <p class="cSharp">C# is a general-purpose, multi-paradigm programming language encompassing static typing, strong typing, lexically scoped and component-oriented programming disciplines.</p>
      </div>
    </div>
    <div class="face face2">
      <h2>03</h2>
    </div>
  </div>
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