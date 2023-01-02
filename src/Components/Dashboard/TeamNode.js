import React from 'react'
import {Card} from 'react-bootstrap'
import { styled } from '@mui/material/styles';
import { CardContent } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';
// className={classes.button}
const useStyles = makeStyles({
  flexGrow: {
    flex: '1',
  },
  button: {
    color: '#fff !important',
    '&:hover': {
      backgroundColor: '#fff !important',
      color: '#3c52b2 !important',
  },
}});
export default function TeamNode(props) {
    const classes = useStyles();
  return (
        <div style={{borderColor:'#000'}} className='resp resp-pending'>
        <Grid containter>
    <Grid item xs={2}>
    <Box sx={{ minWidth: 300,boxSizing: 'border-box'}}>
    
            <CardContent>
            
            <div className='task'>
                <div className='pendingTask'>
                    
                       <h1>{props.name}</h1> 
                  
                    <div className='pointspending'>
                        <Button  variant='text' sx={{backgroundColor:'rgb(32,178,170)', height:'30px'}} rounded>
                            {props.name}
                        </Button>
                   </div>
                </div><br/><br/> <br />
                <p> {props.name}</p>
                <div>Last Date: {props.name}</div>     
                <div className='status'>Status</div> <Button className={classes.button}  variant='text' sx={{backgroundColor:'rgb(32,178,170)', height:'30px'}}> </Button>
                </div>
            </CardContent>
            
            
        </Box>
        </Grid>
        </Grid>
        </div> 
    )
}
