import React ,{useState}from 'react';
import {AppBar,Box,IconButton,Toolbar,Typography } from '@mui/material'
import FastfoodIcon from '@mui/icons-material/Fastfood';
import {Link} from 'react-router-dom';
import '../../styles/HeaderStyle.css';


const Header = () => {
   
  return (
    <>
      <Box>
        <AppBar component={'nav'} sx={{bgcolor:"black"}}>
            <Toolbar>
                
            <Typography color={'goldenrod'} variant='h6' component="div" sx={{flexGrow: 1, my:2}}>
                <FastfoodIcon />
                 My Restaurant
            </Typography>
            <Box sx={{display:{xs:'none', sm:'block'}}}>
                <ul className='navigation-menu'>
                    <li>
                        <Link to={'/'}>Home</Link>
                    </li>
                    <li>
                        <Link to={'/menu'}>Menu</Link>
                    </li>
                   
                  
                    <li>
                        <Link to={'/payment'}>Menu Details</Link>
                    </li>
                    <li>
                        <Link to={'/amount'}>OrderPlacing</Link>
                    </li>
                    <li>
                        <Link to={'/contact'}>Contact</Link>
                    </li>
                   
                  
                </ul>

            </Box>
                
            </Toolbar>
            

        </AppBar>
        <Box sx={{p:2 }}>
            <Toolbar />
        </Box>
      </Box>
   
     
    </>
  )
}

export default Header