import React from 'react';

const Cart = (props) => {
    const cart=props.cart;
    // const totalPrice = cart.reduce((total,prd)=>total+prd.price,0)

    let total=0;
    for(let i=0; i<cart.length; i++){
        const product=cart[i];
        total=Number((total+product.price).toFixed(2));
    }
    let shipping =0;
    if(total>30){
        shipping=0;
    }else if(total>15){
        shipping=5;
    }else{
        shipping=0;
    }
    let tax= 0;
    if(total>20){
        tax=(total/10).toFixed(2);
    }
    const grandTotal= Number((total + shipping + Number(tax)).toFixed(2));
       return (
        <div>
            <h4>this is fuck</h4>
            <p>Item Ordered : {cart.length}</p>
            <p>total Price : {total}</p>
            <p><small>shipping : {shipping}</small></p>
            <p><small>tax & Vat : {tax}</small></p>
            <p>Total Price : {grandTotal}</p>
        </div>
    );
};

export default Cart;