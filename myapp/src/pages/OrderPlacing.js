import React, { useState } from 'react';
import Layout from '../components/Layout/Layout'
import {Link} from "react-router-dom";
import LocalPizzaIcon from '@mui/icons-material/LocalPizza';
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import BakeryDiningIcon from '@mui/icons-material/BakeryDining';
import FastfoodOutlinedIcon from '@mui/icons-material/FastfoodOutlined';
import LocalDrinkOutlinedIcon from '@mui/icons-material/LocalDrinkOutlined';
import FoodBankOutlinedIcon from '@mui/icons-material/FoodBankOutlined';
import '../styles/AmountStyle.css';


function App() {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const addToCart = (item) => {
    const updatedCart = [...cart, item];
    setCart(updatedCart);

    // Calculate the total price
    const totalPrice = updatedCart.reduce((acc, currentItem) => acc + currentItem.price, 0);
    setTotal(totalPrice);
  };

  return (
    <Layout>
    <div className='amount'>
      <h1>Food Delivery App</h1>
      <br></br>
      <br></br> 
      <div className='MENU'>
        <h2>Menu</h2>
        <ul>
        <li>
            <LocalPizzaIcon />
            <button onClick={() => addToCart({ name: 'Pizza', price: 200 })}>PIZZA</button>
          </li>
          <br></br>
          <li>
            <LunchDiningIcon />
            <button onClick={() => addToCart({ name: 'Burger', price: 150 })}>BURGER</button>
          </li>
          <br></br>
          <li>
            <BakeryDiningIcon />
            <button onClick={() => addToCart({ name: 'Sandwitch', price: 100 })}>SANDWITCH</button>
          </li>
          <br></br>
          <li>
          <FoodBankOutlinedIcon/>
            <button onClick={() => addToCart({ name: 'Chicken', price: 300 })}>CHICKEN</button>
          </li>
          <br></br>
          <li>
          <LocalDrinkOutlinedIcon />
            <button onClick={() => addToCart({ name: 'Cool Drinks', price: 250 })}>COOL DRINKS</button>
          </li>
          <br></br>
          <li>
            <FastfoodOutlinedIcon />
            <button onClick={() => addToCart({ name: 'Combo', price: 500 })}>COMBO</button>
          </li>
        </ul>
      </div>
      <br></br>
      <br></br>
      <div className='cart'>
        <h2>Cart</h2>
        <p>Number of items in the cart: {cart.length}</p>
        <p>Total price: Rs.{total.toFixed(2)}</p>
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              {item.name} - Rs.{item.price.toFixed(2)}
            </li>
          ))}
        </ul>
      </div>
      {/* <div className='redirect'>
      <Link to="/contact">
                      <button>click Here</button>
                  </Link>
                  </div> */}
    </div>
    <br></br>
    <br></br>
    </Layout>
  );
}

export default App;

