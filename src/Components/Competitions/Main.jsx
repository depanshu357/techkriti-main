import React, {useState, useEffect} from "react";
import { Grid, Button } from "@mui/material";
import "./styles.css";
import content from "./content1.json";
import comps from "./competitions.json";
import { Link, useParams, useNavigate } from "react-router-dom";
import Card from "./contestcard";

function Main({setThemeColor, setLowergridmenu, params, category}) {

	const navigate = useNavigate();
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
	console.log(params);
	
	if (comps.map((el) => (el.category)).includes(category)) {
		content = comps.filter((el) => el.category === category)[0].contests;
		competitions = content.map((el) => {
			return (
				<div className="main-text">
				<div style={{display:"flex", justifyContent:"space-between", margin:"50px"}} key={el.index}>
					<div style={{maxWidth:"60%"}}>
					<div style={{margin:"50px"}}>
					<h1>{el.title}</h1>
					<p>{el.text}</p>
					</div>
					</div>
					<img src={`/images/${el.img}.svg`} alt={`Illustration for the ${el.title} competition`} style={{width:"300px"}} />
				</div>
				<div style={{display:"flex", flexWrap:"wrap", width:"100%"}}>
				{el.explore.map((contest) => (
					<div 
						style={{alignSelf:"flex-start",margin:"10px"}}
					>
					{/* <h2>{contest.name}</h2>
					<p>{contest.about}</p>
					<Link to={`/competitions/details/${contest.name.toLowerCase().replace(/\s/g, "")}`}><Button variant="contained">Details</Button></Link>
					<Button variant="contained">Register</Button> */}
					<Card name={contest.name} title={contest.about}/>
					</div>)
				)}
				</div>
				</div>
			);
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
						border:"solid 3px",
						borderRadius:"1px",
						padding:"5px"
					}}
					key={el.title}
				>
				{el.title}	
				</Link>
			);
		});
	} else if (category === "Details" && (all_contests.map(el => el.name.toLowerCase().replace(/\s/g, "")).includes(params))) { //path: /competitons/details/params
		content.push({color:"#000"});
		let contestobj = all_contests.find(el => (el.name.toLowerCase().replace(/\s/g, "") === params));
		competitions.push(<div className="main-text">
		<h1>{contestobj.name}</h1>
		<h2>{contestobj.about}</h2>
		</div>);
	} else { //path: /competitons/ OR /competitions/details/
		content.push({color:"#000"});
		competitions.push(<div className="main-text">
			Lorem Ipsum
		</div>);
	}
	
	
	const lowergridmenu = comps.map((el) => {
		return {
			text:el.category,
			link:`competitions/${el.category.toLowerCase()}`
		}
	});
		
	if (params && (comps.map((el) => (el.category)).includes(category)) && content.findIndex((el) => (el.title.toLowerCase().replace(/\s/g, '') === params)) > 0) {
		current = content.findIndex((el) => (el.title.toLowerCase().replace(/\s/g, '') === params));	
	} else current = 0;
	setThemeColor(content[current].color)

	//on mount: set lowergridmenu to what it needs to be
	useEffect(() => {
		setLowergridmenu(lowergridmenu);
	}, []);
	
	const setSlide = (number) => {
		current = number;
	}
	

  return (
  		<>
          <div className="main-container">
            {competitions[current]}
          {comps.map((el) => (el.category)).includes(category)
          ? <div className="navigator scroll-less">
          	<div
          		style={{
          			display:"inline-flex",
          			flexWrap:"nowrap",
          			flexBasis:"auto"
          		}}
          	>
          		<div style={{position:"absolute", left:"auto"}}>
          			{"<"}
          		</div>
          		{links}
          		<div style={{position:"absolute", right:"10vw"}}>
          			{">"}
          		</div>
          	</div>
          	</div>
          	: ""}
          </div>
        </>
    //     {/* </Grid>
    //   </Grid>
    // </div> */}
  );
}

export default Main;