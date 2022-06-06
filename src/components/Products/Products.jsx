import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import Product from "./Product/Product"

const Products = () => {
  const [products,setProd]=useState([]);
  useEffect(()=>{
    axios.get(`http://localhost:8080/products`).then((res)=>{
      setProd(res.data);
    }).catch((err)=>console.log(err));
    // return ()=>{
    //   id=null;
    // }
  },[])
  return <div>{
    products.map((data)=>{
      return <Product key={data.id} {...data}/>
    })
    }</div>;
};

export default Products;
