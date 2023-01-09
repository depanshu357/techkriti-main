import React, {useEffect, useParams} from 'react'
import Card from './Card'
import { Grid } from '@mui/material';
import "./card.css";
import workshopProps from './workshopsProps';
import { workshopData } from './workshopData';
import WorkshopTemplate from './WorkshopTemplate';

const Workshop = ({setThemeColor, setLowergridmenu}) => {


	useEffect(() => {
		setThemeColor("#000"); //on mount: set theme to black
		setLowergridmenu([]);
	},[]);
	
  return (

  	
    <>
    <b><h2 className='workhead'>WORKSHOPS</h2></b>
    <div className='workshop-cards'>
        {workshopData.map((data, key) => {
          return (
            <Card name={data.workName} />
          );
        })}
    </div>
    </>
  )
}

export default Workshop

