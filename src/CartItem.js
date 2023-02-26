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
        // this.state.Qty += 1;
        // console.log('This.state',this.state);
        //setstate from1
        // this.setState({
        //     Qty: this.state.Qty + 1
        // })
        //setstate from2 use previous state if required
        this.setState((prevState) => {
            return {
                Qty: prevState.Qty + 1

            }
        })
    }
    decreaseQuantity =()=>{
        const {Qty} = this.state;
        if(Qty === 0){
            return;
        }
        this.setState((prevState) => {
            return {
                Qty: prevState.Qty - 1

            }
        })
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
                                onClick={this.decreaseQuantity}
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