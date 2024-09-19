import React from 'react';
import {MenuList} from '../data/data';
import Layout from '../components/Layout/Layout';
import {Link} from "react-router-dom";
import { Box, Card,CardActionArea, CardContent, CardMedia, Typography}from '@mui/material';
import '../styles/Style.css';

const Menu = () => {
  return (
    <Layout>
        <div className='id'>
        <Link to="/amount">
                      <button>Click Here  </button>
                  </Link>
                  </div>
       
         <Box>
          {
            
            MenuList.map(menu =>(
              <Card >
                <CardActionArea>
           
                  <CardContent>
                    <Typography variant='h5' gutterBottom component={'div'}>
                      {menu.name} 
                    </Typography>
                    <Typography  variant='body2'>
                      {menu.description}
                    </Typography>
                    <Typography>
                        {menu.price}
                    </Typography>
        

                  </CardContent>

                </CardActionArea>
              </Card>
            ))
          }
       </Box>
    </Layout>
  )
}

export default Menu