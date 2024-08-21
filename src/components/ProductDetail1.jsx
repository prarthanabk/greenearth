import React, { useState } from 'react';
import { useParams, useHistory } from 'react-router';
import { NavLink } from 'react-router-dom';
import './CartPage.css'
import DATA1 from '../Data1';
import CartPage from './CartPage';


const ProductDetail1 = () => {
  const [cartItems, setCartItems] = useState([]);
  const [cartImages, setCartImages] = useState([]); // Define and initialize cartImages state

  const proid = useParams();
  const proDetail = DATA1.filter((x) => x.id == proid.id);
  const product = proDetail[0];

  const history = useHistory();

  const handleCart = (product) => {
    addToCart(product);
  };

  const addToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);
    if (existingItem) {
      // If the item already exists in the cart, update its quantity
      const updatedCart = cartItems.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCartItems(updatedCart);
    } else {
      // If the item doesn't exist in the cart, add it with quantity 1
      const newItem = { ...product, quantity: 1 };
      const updatedCart = [...cartItems, newItem];
      setCartItems(updatedCart);
    }

    // Add the image information to the cart
    const imageInfo = { id: product.id, img: product.img };
    const updatedImageCart = [...cartImages, imageInfo];
    setCartImages(updatedImageCart);
  };

  const handleQuantityChange = (product, quantity) => {
    const updatedCart = cartItems.map((item) =>
      item.id === product.id ? { ...item, quantity: quantity } : item
    );
    setCartItems(updatedCart);
  };

  const handleCheckout = () => {
    history.push('/checkout');
  };

  return (
    <>
      {cartItems.length > 0 ? (
        <CartPage cartItems={cartItems} handleQuantityChange={handleQuantityChange} />
      ) : (
        <div className="container my-5 py-3">
          <div className="row">
            <div className="col-md-6 d-flex justify-content-center mx-auto product">
              <img
                style={{ width: 500, height: 500 }}
                src={product.img}
                alt={product.title}
              />
            </div>
            <div className="col-md-6 d-flex flex-column justify-content-center">
              <h1 className="display-5 fw-bold">{product.title}</h1>
              <hr />
              <h2 className="my-4">₹{product.price}</h2>
              <p className="lead">{product.desc}</p>
              {/* <button
                onClick={() => handleCart(product)}
                className="btn btn-outline-primary my-5"
              >
                Add to Cart
              </button> */}
              <button onClick={handleCheckout} className="btn btn-primary">
                Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetail1;
