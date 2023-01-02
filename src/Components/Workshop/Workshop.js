import React, {useEffect, useParams} from 'react'
import Card from './Card'
import { Grid } from '@mui/material';
import "./card.css";
import workshopProps from './workshopsProps';
const Workshop = ({setThemeColor, setLowergridmenu}) => {

	useEffect(() => {
		setThemeColor("#000"); //on mount: set theme to black
		setLowergridmenu([]);
	},[]);
	
  return (

  	
    <>
    <b><h2 className='workhead'>WORKSHOPS</h2></b>
    <div className='cards'>
      <div><Card title={workshopProps.w0.title} img={workshopProps.w0.image}/></div>
      <div><Card title={workshopProps.w1.title} img={workshopProps.w1.image}/></div>
      <div><Card title={workshopProps.w2.title} img={workshopProps.w2.image}/></div>
      <div><Card title={workshopProps.w3.title} img={workshopProps.w3.image}/></div>
      {/* <div><Card/></div>
      <div><Card/></div>
      <div><Card/></div>
      <div><Card/></div>
      <div><Card/></div>
      <div><Card/></div>
      <div><Card/></div>
      <div><Card/></div>
      <div><Card/></div>
      <div><Card/></div>
      <div><Card/></div>
      <div><Card/></div>
      <div><Card/></div>
      <div><Card/></div>
      <div><Card/></div>
      <div><Card/></div> */}
    </div>
    </>
  )
}

export default Workshop

