import React, { useState } from 'react';
import './Shop.css';
import Product from '../product/Product';
import Cart from '../Cart/Cart';
const Shop = () => {
    const products=[
        {id:1,name:"Aam",stock:50,price:10.63},
        {id:2,name:"Jma ",stock:100,price:20.86},
        {id:3,name:"kola",stock:120,price:15.54},
        {id:4,name:"apple",stock:45,price:12},
        {id:5,name:"lichu",stock:65,price:30.47},
        {id:6,name:"angur",stock:80,price:22},
        {id:7,name:"peara",stock:40,price:40},
        {id:8,name:"akh",stock:80,price:50},
        {id:9,name:"boroi",stock:102,price:18},
        {id:10,name:"kathal",stock:65,price:80}
    ];
    const [cart, setCart]=useState([]);
    const handleAddProduct=(product)=>{
        const newCart=[...cart,product];
        setCart(newCart)
    }
    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(pd=><Product 
                        handleAddProduct={handleAddProduct}
                        Product={pd}
                        ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
                {/* <h5>order sumary : {cart.length}</h5> */}
            </div>   
        </div>
    );
};
 
export default Shop;