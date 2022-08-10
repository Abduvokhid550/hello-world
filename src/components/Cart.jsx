import { useState } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from 'uuid';
import { products } from "../data/ProductsArray";

function Cart({cartData,changeCount}) {

    function showItems(){
        const result =[];

        for (let cartItem of cartData.products){
            const index = products.findIndex(product => product.id === cartItem.id)

            result.push({...products[index],count: cartItem.count })
        }
        return result
    }

    return ( 
        <Wrapper>
            <h2>Cart</h2>

            {showItems().map((product) => {
                return (
                    <div className="cart" key={product.id}>
                        <img src={product.image} alt="" />
                        <div>
                            <p>{product.NameProduct}</p>
                            <p>Price: {product.sellProduct}</p>
                            <p>Total: {product.sellProduct * product.count}</p>
                        </div>
                        <div className="cart_btns">
                            <button id={product.id} onClick={() => changeCount("+",product.id)}>+</button>
                            <p>{product.count}</p>
                            <button id={product.id} onClick={() => changeCount("-",product.id)}>-</button>
                        </div>
                    </div>
                )
            })}
        </Wrapper>
     );
}

export default Cart;

const Wrapper = styled.div`
    margin: 12px;
    text-align: center;
    width: 100%;
    display: flex;
    gap: 20px;
    flex-direction: column;

    .cart {
        margin: 12px;
        width: 100%;
        height: 100px;
        background-color: white;
        display: flex;
        justify-content: space-between;
        padding: 12px;
        img {
            width: 90px;
            height: 90px;
        }

        .cart_btns {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }
    }
`