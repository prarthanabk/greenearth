
import { NavLink } from 'react-router-dom'
// import { useSelector } from 'react-redux'
import { useSelector } from 'react-redux';

import React, { useContext } from 'react';
// import { Provider } from 'react-redux';

import { CartContext } from '../CartContext';

const CartBtn = () => {
    // We get a state of addItems
    // Write the name of the file not the function
    const state = useSelector((state)=> state.addItem)
    const { cartItems } = useContext(CartContext);

    return (
        <>
            <NavLink to="/ci" className="btn btn-outline-primary ms-2">
                {/* <span className="fa fa-shopping-cart me-1"></span> Cart ({state.length}) */}
                
                <span className=""></span> Products
            </NavLink>
            <NavLink to="/orders" className="btn btn-outline-primary ms-2">
                {/* <span className="fa fa-shopping-cart me-1"></span> Cart ({state.length}) */}
                
                <span className="fa fa-shopping-cart me-1"></span> Orders
            </NavLink>

            <NavLink to="/cart" className="btn btn-outline-primary ms-2">
                {/* <span className="fa fa-shopping-cart me-1"></span> Cart ({state.length}) */}
                
                <span className="fa fa-shopping-cart me-1"></span> Cart ({cartItems.length})
            </NavLink>
            {/* <NavLink to="/cart">Cart ({cartItems.length})</NavLink> */}
        </>
    )
}

export default CartBtn
