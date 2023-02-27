import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";

const Cart = () => {
  const cart = useSelector((state)=>state.cart)
  return (
    <div>
      <h1>This is Add to cart page</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10'>
         {
          cart.sort((a,b)=>b.rating - a.rating).map((product)=><ProductCard
          product={product} 
          key={product._id}/>)
         }
      </div>
    </div>
  );
};

export default Cart;
