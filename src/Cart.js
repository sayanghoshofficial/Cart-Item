import React from "react";
import CartItem from './CartItem';
class Cart extends React.Component{
    constructor () {
        super();
        this.state = {
            products:[
                {
                    price: 9999,
                    title: 'Mobile Phone',
                    Qty: 5,
                    img: '',
                    id:1
                },
                {
                    price: 99999,
                    title: 'Laptop',
                    Qty: 1,
                    img: '',
                    id:2
                },
                {
                    price: 999,
                    title: 'Watch',
                    Qty: 10,
                    img: '',
                    id:3
                }
            ]
        }
    }
    handledIncreaseQuantity= (product) =>{
        // console.log('hey please increase the quantity of ',product);
        const {products} = this.state;
        const index = products.indexOf(product);

        products[index].Qty += 1;

        this.setState({
            products
        })
    }
    handledDecreaseQuantity = (product) =>{
        
        const {products} = this.state;
        const index = products.indexOf(product);
        // console.log('hey please increase the quantity ofxx ',products[index].Qty);
        if(products[index].Qty === 0){
            return;
        }
        products[index].Qty -= 1;

        this.setState({
            products
        })
    }
    handledDeleteProduct = (id) => {
        const {products} = this.state;

        const items = products.filter((item) => item.id != id);

        this.setState({
            products:  items
        })
    }
    render(){
        const {products} = this.state;
        return(
            <div className="cart">
                {products.map((product)=>{
                    // console.log('product',product)
                    return(
                        <CartItem 
                            product={product} 
                            key={product.id} 
                            onIncreasQuantity = {this.handledIncreaseQuantity}
                            onDecreasQuantity = {this.handledDecreaseQuantity}
                            onDeleteProduct = {this.handledDeleteProduct}
                        />
                    ) 
                })}
            </div>
    );
}
}

export default Cart;