import React from 'react';
import './Product.css'

const Product = (props) => {
    // console.log(props)
    const { stock, name, price } = props.Product;
    return (
        <div className='product'>
            <div className='product-dtls'>
                <img className='product-img' src="" alt="" />
                <div className="name-price">
                    <h4 className='product-name'>{name}</h4>
                    <br />
                    <p>Price : ${price}</p>
                    <p>only {stock} left in stock - order soon</p>
                    <button className='main-button' 
                    onClick={()=>props.handleAddProduct(props.Product)}>add to chart</button>
                </div>
            </div>
        </div>
    );
};

export default Product;