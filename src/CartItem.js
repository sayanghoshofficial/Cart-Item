import React from "react";

class CartItem extends React.Component{
    constructor(){
        super();
        this.state = {
            price: 999,
            title: 'Mobile Phone',
            Qty: 1,
            image: ''
        }
    }
    increaseQuantity =()=>{
        console.log('This.state',this.state)
    }
    render(){
        const {price,title,Qty} = this.state;
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image}/>
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
                                onClick={this.increaseQuantity}
                            />
                            <img 
                                alt="decrease" 
                                className="action-icons" 
                                src="https://cdn-icons-png.flaticon.com/512/992/992683.png"
                            />
                            <img 
                                alt="delete" 
                                className="action-icons" 
                                src="https://cdn-icons-png.flaticon.com/512/3405/3405244.png"
                            />
                    </div>
                </div>

            </div>
        )
    }
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