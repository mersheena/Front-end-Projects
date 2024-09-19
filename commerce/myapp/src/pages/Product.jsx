import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContent';
import { useParams } from 'react-router-dom';
import Breadcrum from '../components/Breadcrums/Breadcrums';
import ProductDisplay from '../components/ProductDisplay/ProductDisplay';
import Description from '../components/DescriptionBox/Description';
import Related from '../components/Related Products/Related';


const Product = () => {
  const {all_product} = useContext(ShopContext);
  const {productId} = useParams();
  const product = all_product.find((e)=>e.id === Number(productId));
  return (
    <div>
    <Breadcrum product = {product}/>
    <ProductDisplay product={product}/>
    <Description />
    <Related />
    </div>
  )
}

export default Product