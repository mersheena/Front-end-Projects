import React from 'react';
import {Box, Typography } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
const Footer = () => {
  return (
    <>
    <Box sx={{textAlign:'center',bgcolor:'#1A1A19',color:'white',p:3}}>
        <Box>
            <InstagramIcon/>
            <TwitterIcon/>
            <FacebookIcon/>
        </Box>
        <Typography >
            All Rights Reserved 
        </Typography>
    </Box>
        
    </>
  )
}

export default Footer