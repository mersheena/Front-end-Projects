import React from 'react'
import Layout from '../components/Layout/Layout';
import {Link} from "react-router-dom";
import images from '../images/pic3.jpg';
import '../styles/HomeStyles.css';

const Home = () => {
  return (
    <Layout>
       <div className='home' style={{backgroundImage:`url(${images})`}} >
        <div className='headerContainer'>
            <h2>Food Zone</h2>
            <br></br>
            <br></br>
            <br></br>
            <h1>Food Website</h1>
            <p>Best Food In India</p>
            <Link to="/menu">
               <button>ORDER NOW </button>
            </Link>
        </div>
       </div>
    </Layout>
  )
}

export default Home;