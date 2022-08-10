import React, { useState } from 'react'
import styled from 'styled-components';
import {Products} from "./Products"
import Cart from "../components/Cart";

export default function Shop () {
    const [cart,setCart] = useState({
      products:[],
      totalPrice: 0,
    })

  function addToCart(id){
      const data = {
        id:id,
        count: 1
      }
      const copyState ={...cart};
      copyState.products.push(data);

      setCart(copyState);
  }

  function changeCount(action,id){
    const cartCopy = {...cart}
    const index = cart.products.findIndex(product => product.id === id)
      if (action === "+"){
         cartCopy.products[index].count += 1;
    } 
      else{
        cartCopy.products[index].count -= 1;

        }
    setCart(cartCopy)
  }

  return (
      <Wrapper>
            <Products addToCart={addToCart}/>
            <Cart cartData={cart} changeCount={changeCount} />    
      </Wrapper>
  )
}


const Wrapper = styled.div`
  display: flex;
  gap: 20px;
  padding: 22px;
  background: #d7d5d5;
  padding-top: 40px ;
`
