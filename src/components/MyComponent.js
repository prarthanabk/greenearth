// MyComponent.js

import React from 'react';
import { connect } from 'react-redux';

import { addToCart, removeFromCart } from '../redux1/actions/cartActions';

const MyComponent = ({ cartItems, addToCart, removeFromCart }) => {
  // Component logic here...
};

const mapStateToProps = (state) => {
  return {
    cartItems: state.cart.cartItems,
  };
};

export default connect(mapStateToProps, { addToCart, removeFromCart })(MyComponent);
