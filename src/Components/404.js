import React, {useEffect} from "react";
import {Link} from "react-router-dom";

export default function NotFound(props) {
	useEffect(() => {
		props.setThemeColor("#000"); //on mount: set theme to black
		props.setLowergridmenu([]);
	},[]);

	return (
		<div>
		Page not found! Seems like you've accidentally gone to an invalid page. 
		<Link to="/"> Click here to return to the home page.</Link>
		</div>
	);
}