import React from "react";
import "./index.css";
import Cart from "./Cart";
import Navbar from "./Navbar";
import { firestore } from "./firebase";


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
      loading: true
    };
  }


handleIncreaseQuantity = (product)=>{
  const { products } = this.state;
    const index = products.indexOf(product);
    //increase qty in firebase cloud directly
    //using id below we get the ref of that product which we are increasing
    const docRef = firestore.collection("products").doc(products[index].id);

    docRef
      .update({
        Qty: products[index].Qty + 1,
       // price: (products[index].price + product.price),
      })
      // .then(() => {
      //   console.log("document updated successfully");
      // })
      .catch((error) => {
        console.log("error", error);
      });
}

 handleDecreaseQuantity = (product)=>{
  const{products} = this.state;
  const index = products.indexOf(product);
  const docRef = firestore.collection('products').doc(products[index].id);
  docRef
  .update({
   Qty: products[index].Qty-1,
  })
  // .then(()=>{
  //   console.log(' Hii Arif DecreaseQuantity Qty',products[index].Qty);
  // })
  .catch((err)=>{
    console.log("Hiii arif this is your ERROR",err)
  });

 }


handleDeleteProduct = (id) => {
    const { products } = this.state;
    // const item = products.filter((item) => item.id !== id); //return Array which id not mach in the product list

    // this.setState({
    //   products: item,
    // });
   const docRef = firestore.collection("products").doc(id);
      docRef
      .delete()
      .then(()=>{
          console.log('deleted id id :', id);

      })
      .catch((err)=>{
        console.log('rthis is errr :',err);
      })

  };
  componentDidMount() {
    //fetching all the products from the cloud firestore
    firestore
      //this.db
      //query for fecthing the product which we want as per our query
      .collection("products") //getting all the products
      // .where('price','>=', 999) // after fetching db we should write query
      .onSnapshot((snapshot) => {
        const products = snapshot.docs.map((doc) => {
          const data = doc.data();
          data["id"] = doc.id;
          return data;
        });

        this.setState({
          products,
          loading: false,
        });
       });
  }
  
  getcountOfCartItems = () => {
    const { products } = this.state;
    let count = 0;

    products.forEach(product => {
      count += product.Qty;
    });

    return count;
  };


  getcartTotal = () => {
    const { products } = this.state;
    let cartTotal = 0;

    products.map(product => {
      if (product.Qty > 0) {
        cartTotal = cartTotal + product.Qty * product.price;
      }
      return "";
    });

    return cartTotal;
  };

  render() {
    const { products , loading} = this.state;
    return (
      <div className="App">
        <Navbar count={this.getcountOfCartItems()}
         
        />
        <Cart
           products={products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity ={this.handleDecreaseQuantity}
          onDeleteProduct ={this.handleDeleteProduct}
         
          
        />
        {loading && <h1> Loading Products ....</h1>}
        <div style={{ padding: 10, fontSize: 20 }}>
          TOTAL : {this.getcartTotal()}
        </div>
      </div>
    );
  }
}

export default App;


