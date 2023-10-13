import React from 'react'
import Auth from '../Auth/Auth'
import './Landing.css'
import LandingIcon from '../../Assets/landing.jpeg'
import { AppBar,Toolbar,Typography } from '@mui/material'
const Landing = (props) => {
  return (
    <div >
        <div>
        {/* <AppBar position="static">
  <Toolbar variant="dense" sx={{padding:1}}>
   
    <Typography variant="h4" color="inherit" component="div">
      MY STORE
    </Typography>
  </Toolbar>
</AppBar> */}
        </div>
       <div className='container'>
       <div className='left-bar'>
            <img src={LandingIcon} className='landing-icon' alt="img loading wait"/>
        </div>
        <div className='right-bar'>
                <Auth setUserDetails={props.setUserDetails}/>
        </div>
       </div>
    </div>
  )
}

export default Landing