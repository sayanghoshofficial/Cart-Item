import React from "react";
import Cart from './Cart';
import Navbar from "./Navbar";

class App extends React.Component {
  constructor () {
    super();
    this.state = {
        products:[
            {
                price: 9999,
                title: 'Mobile Phone',
                Qty: 5,
                img: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=367&q=80',
                id:1
            },
            {
                price: 99999,
                title: 'Laptop',
                Qty: 1,
                img: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80',
                id:2
            },
            {
                price: 999,
                title: 'Watch',
                Qty: 10,
                img: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80',
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
  getCartCount = () =>{
    const {products} = this.state;

    let count = 0;

    products.forEach((product) =>{
      count += product.Qty;
    })


    return count;
  }
  getCartTotal = () =>{
    const {products} = this.state;

    let cartTotal = 0;

    products.map((product) =>{
      cartTotal += product.Qty * product.price;
    });
    return cartTotal;
  }
  render(){
    const {products} = this.state;
    return (
      <div className="App">
        <Navbar
          count = {this.getCartCount()}
        />
        <Cart
          products = {products}
          onIncreasQuantity = {this.handledIncreaseQuantity}
          onDecreasQuantity = {this.handledDecreaseQuantity}
          onDeleteProduct = {this.handledDeleteProduct}
        />
         <div style={{fontSize:20,padding:10}}>
            Total: {this.getCartTotal()}
        </div>
      </div>
     
    );
  }
}



export default App;
