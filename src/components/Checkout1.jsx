import React, { useState } from 'react';
import './Checkout1.css';

const Checkout1 = () => {
  const [isCheckoutOpen, setCheckoutOpen] = useState(false);
  const cartItems = []; // Replace this with the actual cart items

  const calculateTotal = () => {
    let total = 0;
    for (const item of cartItems) {
      total += item.price * item.quantity;
    }
    return total;
  };

  const handleCheckout = () => {
    setCheckoutOpen(true);
  };

  return (
    <div className={`checkout-container ${isCheckoutOpen ? 'blur' : ''}`}>
      <div className="checkout-overlay"></div>
      <div className="checkout-box">
        <div className="product-summary">
          <h2>Product Summary</h2>
          <table>
            {/* Product summary table */}
          </table>
          <div className="subtotal">
            <span>Total:</span>
            <span>₹{calculateTotal()}</span>
          </div>
        </div>
        <div className="delivery-address">
          <h2>Delivery Addressgfkhg</h2>
          <form>
          <div className="form-group">
              <label htmlFor="firstName">First Name:</label>
              <input type="text" id="firstName" name="firstName" required />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name:</label>
              <input type="text" id="lastName" name="lastName" required />
            </div>
            <div className="form-group">
              <label htmlFor="flatNumber">Flat Number:</label>
              <input type="text" id="flatNumber" name="flatNumber" required />
            </div>
            <div className="form-group">
              <label htmlFor="address">Address:</label>
              <input type="text" id="address" name="address" required />
            </div>
            <div className="form-group">
              <label htmlFor="landmark">Landmark:</label>
              <input type="text" id="landmark" name="landmark" required />
            </div>
            <div className="form-group">
              <label htmlFor="city">City:</label>
              <input type="text" id="city" name="city" required />
            </div>
            <div className="form-group">
              <label htmlFor="pincode">Pincode:</label>
              <input type="text" id="pincode" name="pincode" required />
            </div>
          </form>
        </div>
        <div className="continue-button">
          <button onClick={handleCheckout}>Continue</button>
        </div>
      </div>
    </div>
  );
};

export default Checkout1;
