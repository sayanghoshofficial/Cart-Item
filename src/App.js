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
  getCartCount = () =>{
    const {products} = this.state;

    let count = 0;

    products.forEach((product) =>{
      count += product.Qty;
    })


    return count;
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
      </div>
    );
  }
}



export default App;
