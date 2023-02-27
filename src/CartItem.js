import React from "react";

const CartItem = (props) =>{
        const {price,title,Qty} = props.product;
        const {product,onIncreasQuantity,onDecreasQuantity,onDeleteProduct} = props;
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image} src={product.img}/>
                </div>
                <div className="right-block">
                    <div style={{fontSize: 25}}>{title}</div>
                    <div style={{color: '#777'}}>Rs: {price}</div>
                    <div style={{color: '#777'}}>Qty: {Qty}</div>
                    <div className="cart-item-actions">
                        {/* Button */}
                            <img 
                                alt="increase" 
                                className="action-icons" 
                                src="https://cdn-icons-png.flaticon.com/512/3303/3303893.png"
                                onClick={()=> onIncreasQuantity(product)}
                            />
                            <img 
                                alt="decrease" 
                                className="action-icons" 
                                src="https://cdn-icons-png.flaticon.com/512/992/992683.png"
                                onClick={()=> onDecreasQuantity(product)}
                            />
                            <img 
                                alt="delete" 
                                className="action-icons" 
                                src="https://cdn-icons-png.flaticon.com/512/3405/3405244.png"
                                onClick={() => onDeleteProduct(product.id)}
                            />
                    </div>
                </div>

            </div>
        )
    }


const styles ={
    image:{
      height: 110,
      width: 110,
      borderRadius: 4,
      backgroundColor: '#ccc'
    }
  }

export default CartItem;