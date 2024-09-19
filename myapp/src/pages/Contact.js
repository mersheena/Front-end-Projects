import React from 'react'
import Layout from '../components/Layout/Layout'
import { Box,Paper,TableContainer,TableHead,TableRow,Table,TableCell,Typography, TableBody } from '@mui/material'
import CallIcon from '@mui/icons-material/Call';
import MailIcon from '@mui/icons-material/Mail';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

const Contact = () => {
  return (
    <Layout>
       <Box sx={{ my:10,ml:10}}>
        <Typography variant='h3'>Contact My Restaurant</Typography>
       </Box>
       <Box sx={{m:3,width:"600px"}}>
        <TableContainer component={Paper}>
          <Table aria-label="contact table">
           <TableHead>
            <TableRow>
              <TableCell sx={{bgcolor:"black",color:"white"}} align='center'>Contact Details</TableCell>
            </TableRow>
            </TableHead> 
            <TableBody>
              <TableRow>
                <TableCell>
                  <CallIcon sx={{color:"blue",pt: 1}} /> 123 456 7890
                </TableCell>
                </TableRow>
              <TableRow>
                
                <TableCell>
                  <MailIcon sx={{color:"red",pt: 1}} /> Help@myrest.com
                </TableCell>
              
                </TableRow>
                <TableRow>
                
                <TableCell>
                  <DeliveryDiningIcon sx={{color:"green",pt: 0}} />On Time Delivery
                </TableCell>
              
                </TableRow>
                <TableRow>
                
                <TableCell>
                  <LocalShippingIcon sx={{color:"black",pt: 0}} />Free Shipping
                </TableCell>
              
                </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      
       </Box>
       <br></br>
    </Layout>
  )
}

export default Contact