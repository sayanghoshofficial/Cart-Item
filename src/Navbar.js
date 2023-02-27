import React from "react";

const Navbar = (props) =>{
  return(
            <div style={styles.nav}>
                <div style={styles.cartIconCointainer}>
                    <img 
                        style={styles.cartIcon}
                        src="https://cdn-icons-png.flaticon.com/512/1170/1170678.png" 
                        alt="cart-icon"
                    />
                    <spna style={styles.cartCount}>3</spna>
                </div>
            </div>
    );
}

const styles = {
    cartIcon:{
        height:32,
        width:32,
        marginRight: 20
    },
    nav:{
        height:70,
        backgroundColor:'#4267b2',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    cartIconCointainer: {
        position:'relative'
    },
    cartCount:{
        background:'Yellow',
        borderRadius: '50%',
        padding: '4px 8px',
        position: 'absolute',
        right:0,
        top:-9
    }
}
export default Navbar;