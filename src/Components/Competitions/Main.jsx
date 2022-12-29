import React, {useState, useEffect} from "react";
import { Grid, Button } from "@mui/material";
import "./styles.css";
import content from "./content1.json";
import comps from "./competitions.json";

function Main({setThemeColor, setLowergridmenu}) {
	const [current, setCurrent] = useState(0);
	
	const competitions = content.map((el) => {
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
	
	
	
	const lowergridmenu = comps.map((el) => {
		return {
			text:el.category,
			link:""
		}
	});
	
	//on mount: set lowergridmenu to what it needs to be
	useEffect(() => {
		setLowergridmenu(lowergridmenu);
	}, []);
	
	//update color according to current value of current
	useEffect(() => {
		setThemeColor(content[current].color);
	},[current])
	
	
	
	const setSlide = (number) => {
		console.log(number);
		setCurrent(number);
	}
	
	const links = content.map((el) => {
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
					setSlide(el.index);
				}}
			>
				{el.title}
			</div>
		);
	});

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
          		<div style={{position:"absolute", left:"auto"}}>
          		{"<"}
          		</div>
          		{links}
          		<div style={{position:"absolute", right:"10vw"}}>
          		{">"}
          		</div>
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