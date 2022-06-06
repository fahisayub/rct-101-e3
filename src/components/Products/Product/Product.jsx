import React from "react";
import { useState,useEffect } from "react";
import axios from 'axios';
const Product = (product) => {
  
  const [prod ,setprod]=useState({});
  const [status,setstat]=useState(false);

  useEffect(()=>{
    axios.get(`http://localhost:8080/cartItems`).then((res)=>{
     const data=res.data;
      data.filter(data=>data.productId==product.id?(setstat(true),setprod(data)):(setstat(false),setprod(data)));
   
     console.log(data);
     
      
     })

    .catch((err)=>console.log(err));
 
  },[product.id]);

  
  
  return (
    <div data-cy={`product-${product.id}`}>
      <h3 data-cy="product-name">{product.name}</h3>
      <h6 data-cy="product-description">{product.description}</h6>
     {status==false?<button data-cy="product-add-item-to-cart-button">Add to Cart</button>:
      <div>
        <button data-cy="product-increment-cart-item-count-button">+</button>
        <span data-cy="product-count">
          {
            prod.count
          }
        </span>
        <button data-cy="product-decrement-cart-item-count-button">-</button>
        <button data-cy="product-remove-cart-item-button">Remove From Cart</button>
      </div>}
    </div>
  );
};

export default Product;
