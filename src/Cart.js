import React from "react";
import CartItem from './CartItem';
const Cart =(props) => {
    const {products} = props;
    return(
        <div className="cart">
            {products.map((product)=>{
                return(
                    <CartItem 
                        product={product} 
                        key={product.id} 
                        onIncreasQuantity = {props.onIncreasQuantity}
                        onDecreasQuantity = {props.onDecreasQuantity}
                        onDeleteProduct = {props.onDeleteProduct}
                    />
                ) 
            })}
        </div>
    );
}


export default Cart;