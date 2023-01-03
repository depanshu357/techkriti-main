import React from 'react'
import PropTypes from 'prop-types'
import './comps.css';
import comp from './images/comp1.png'
function EachContest(props) {
  return (
    
    <div className='contestEach'>
    <div class="containerEach">
      <div class="cardEach">
      <div className='containerLeftEach'>
        <h1 class="titleEach">{props.compName}</h1>
        <p class="subtitleEach">Introducing the first ever 5G enabled tablet. You've got a tablet that
          let's you play harder and work smarter.</p>
        <button class="btnEach">Get Started</button>
        </div>
        <div className='containerRightEach'>
            <img style={{height:'30vh'}} className='compImg' src={comp} />
        </div>
      </div>
      {/* <div class="blob"></div> */}
      
    </div>
    <br/>

    <div class="blob1"></div>
      <div class="compRegEach">
       
       
        <center><button class="glass-button">Register</button> <button class="glass-button">Problem Statement</button></center>

    </div>

    </div>
    
  )
}

EachContest.propTypes = {}

export default EachContest
