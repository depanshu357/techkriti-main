import React, {useState, useEffect} from "react";
import { Grid, Button } from "@mui/material";
import "./styles.css";
import comps from "./competitions.json";
import { Link } from "react-router-dom"

function Main({setThemeColor, setLowergridmenu, params, category}) {
	
	let current = 0;
	
	let content = [];
	let competitions = [];
	let links = [];
	console.log(params);
	if (category !== "") {
		content = comps.filter((el) => el.category === category)[0].contests;
		competitions = content.map((el) => {
			return (
				<div className="main-text">
				<div style={{display:"flex", flexDirection:"column", overflow:"auto"}}key={el.index}>
					<div>
					<h1>{el.title}</h1>
					<p>{el.text}</p>
					</div>
					<Button variant="contained">Explore</Button>
				</div>
				<img src={`images/${el.img}.svg`} alt={`Illustration for the ${el.title} competition`} />
				</div>
			);
		});
		links = content.map((el) => {
		return (
			<div 
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
				onClick={() => {
					// setSlide(el.index);
				}}
			>
				<Link to={`/competitions/${category.toLowerCase()}/${el.title.toLowerCase().replace(/\s/g, '')}`}>
				{el.title}
				</Link>
			</div>
		);
	});

	} else {
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
	
	
	
	if (params && content.findIndex((el) => (el.title.toLowerCase().replace(/\s/g, '') === params)) > 0) {
		current = content.findIndex((el) => (el.title.toLowerCase().replace(/\s/g, '') === params));	
	} else current = 0;
	setThemeColor(content[current].color)
	
	//on mount: set lowergridmenu to what it needs to be
	useEffect(() => {
		setLowergridmenu(lowergridmenu);
		
	}, []);
	
	//make sure correct thing is loaded according to params
	
	
	//update color according to current value of current
	
	
	
	const setSlide = (number) => {
		current = number;
	}
	
  return (
  		<>
          <div className="main-container">
            {competitions[current]}
          <div className="navigator scroll-less">
          	<div
          		style={{
          			display:"inline-flex",
          			flexWrap:"nowrap",
          			flexBasis:"auto"
          		}}
          	>
          		{category !== "" 
          			? (<><div style={{position:"absolute", left:"auto"}}>
          				{"<"}
          			</div>
          			{links}
          			<div style={{position:"absolute", right:"10vw"}}>
          			{">"}
          			</div></>) 
          			: ""}
          	</div>
          </div>
          </div>
        </>
    //     {/* </Grid>
    //   </Grid>
    // </div> */}
  );
}

export default Main;