import React from 'react'
import './Related.css'
import data_product from '../Assets/data'
import Item from '../xxx/xxx'

const Related = () => {
  return (
    <div className='relatedproducts'>
        <h1>Telated Products</h1>
        <hr />
        <div className="relatedproducts-item">
            {data_product.map((item,i)=>{
                return <Item  key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />

            })}

        </div>
    </div>
  )
}

export default Related