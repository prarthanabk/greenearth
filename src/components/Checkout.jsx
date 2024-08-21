import React, { useState } from 'react';
import axios from 'axios';
import calculateTotal from './CartPage';

const Checkout = () => {
  const [cartItems, setCartItems] = useState([]);

  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address1, setAddress1] = useState('');
  const [address2, setAddress2] = useState('');

//   const addToCart = (item) => {
//     setCartItems([...cartItems, item]);
//   };

//   const removeFromCart = (itemId) => {
//     setCartItems(cartItems.filter((item) => item.id !== itemId));
//   };

//   const clearCart = () => {
//     setCartItems([]);
//   };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      fullname: fullname,
      phone: phone,
      address1: address1,
      address2: address2,
      email: email,
      productcost: calculateTotal(cartItems),
    };
    console.log(data);
    try {
      const response = await axios.post('http://localhost:3001/checkout', data);
      console.log(data);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="container my-5">
        <div className="row g-5">
          <div className="col-md-5 col-lg-4 order-md-last">
            <h4 className="d-flex justify-content-between align-items-center mb-3">
              <span className="text-primary">Your cart</span>
              <span className="badge bg-primary rounded-pill">
                {cartItems.length}
              </span>
            </h4>
            <ul className="list-group mb-3">
              {/* Render the cart items here */}
              {cartItems.map((item) => (
                <li className="list-group-item d-flex justify-content-between lh-sm" key={item.id}>
                  <div>
                    <h6 className="my-0">{item.title}</h6>
                  </div>
                  <span className="text-muted">₹{item.price}</span>
                </li>
              ))}
              {/* Display the total */}
              <li className="list-group-item d-flex justify-content-between">
                <span>Total (USD)</span>
                <strong>₹{calculateTotal(cartItems)}</strong>
              </li>
            </ul>
          </div>
          <div className="col-md-7 col-lg-8">
            <h4 className="mb-3">
              <u>Billing address</u>
            </h4>
            <form className="needs-validation" onSubmit={handleSubmit} noValidate>
              <div className="row g-3">
                <div className="col-sm-6">
                  <label htmlFor="fullname" className="form-label">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="fullname"
                    value={fullname}
                    onChange={(e) => setFullname(e.target.value)}
                    required
                  />
                </div>
                <div className="col-sm-6">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="col-12">
                  <label htmlFor="phone" className="form-label">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </div>
                <div className="col-12">
                  <label htmlFor="address1" className="form-label">
                    Address Line 1
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="address1"
                    value={address1}
                    onChange={(e) => setAddress1(e.target.value)}
                    required
                  />
                </div>
                <div className="col-12">
                  <label htmlFor="address2" className="form-label">
                    Address Line 2
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="address2"
                    value={address2}
                    onChange={(e) => setAddress2(e.target.value)}
                    required
                  />
                </div>
              </div>
              <hr className="my-4" />
              {/* Additional form inputs */}
              {/* ... */}
              <button className="w-100 btn btn-primary btn-lg" type="submit">
                Place Order
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
