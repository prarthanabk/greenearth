import React, { useContext, useState } from 'react';
import { CartContext } from './CartContext';
import './CartPage.css';

const CartPage = () => {
  const { cartItems, removeFromCart, clearCart, increaseQuantity, decreaseQuantity } = useContext(CartContext);
  const [isCheckoutOpen, setCheckoutOpen] = useState(false);
  const [isFormComplete, setFormComplete] = useState(false);
  const [deliveryAddress, setDeliveryAddress] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    address: '',
    landmark: '',
    city: '',
    pincode: ''
  });

        //  payment section
  const [selectedMethod, setSelectedMethod] = useState(null);
  const [accountDetails, setAccountDetails] = useState({
    upiId: '',
    pin: ''
  });
  const [errorMessage, setErrorMessage] = useState('');

  const handleMethodSelect = (method) => {
    setSelectedMethod(method);
    setErrorMessage('');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAccountDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value
    }));
  };

  const handlePayment = () => {
    if (validateAccountDetails()) {
      // Perform payment processing logic here
      // Display success message or redirect to a success page
      console.log('Payment successful');
    } else {
      setErrorMessage('Please enter proper credentials');
    }
  };

  const validateAccountDetails = () => {
    const { upiId, pin } = accountDetails;
    return upiId !== '' && pin !== '';
  };



  const handleIncreaseQuantity = (item) => {
    increaseQuantity(item.id);
  };

  const handleDecreaseQuantity = (item) => {
    decreaseQuantity(item.id);
  };

  const calculateTotal = (cartItems) => {
    let total = 0;
    for (const item of cartItems) {
      total += item.price * item.quantity;
    }
    return total;
  };

  const handleCheckout = () => {
    setCheckoutOpen(true);
  };

  const handleCloseCheckout = () => {
    setCheckoutOpen(false);
  };

  const handleFormChange = (e) => {
    setDeliveryAddress((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  const handleContinue = () => {
  
    if (isFormValid() && cartItems.length > 0) {
      setFormComplete(true);
    }
  };

  const isFormValid = () => {
    const { firstName, lastName, phoneNumber, address, landmark, city, pincode } = deliveryAddress;
    return firstName !== '' && lastName !== '' && phoneNumber !== '' && address !== '' && landmark !== '' && city !== '' && pincode !== '';
  };

  return (
    <div className="cart-container">
      {/* Cart items table */}
      <h1>Cart</h1>
      {cartItems.length > 0 ? (
        <table className="cart-table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id}>
                <td>{item.title}</td>
                <td>₹{item.price}</td>
                <td>
                  <div className="quantity-container">
                    <button className="quantity-button minus" onClick={() => handleDecreaseQuantity(item)}>
                      -
                    </button>
                    <input className="quantity-input" type="number" value={item.quantity} readOnly />
                    <button className="quantity-button plus" onClick={() => handleIncreaseQuantity(item)}>
                      +
                    </button>
                  </div>
                </td>
                <td>
                  <button onClick={() => removeFromCart(item.id)}>Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="empty-cart-message">Your cart is empty.</p>
      )}

      <div className="cart-total">
        <p>Total:</p>
        <span>{calculateTotal(cartItems)}</span>
      </div>

      <div className="cart-buttons">
        <button onClick={clearCart}>Clear Cart</button>
        <button onClick={handleCheckout}>Checkout</button>
      </div>

      {isCheckoutOpen && (
        <div className="checkout-overlay">
          <div className="checkout-box">
            <button className="checkout-close" onClick={handleCloseCheckout}>
              X
            </button>
            {!isFormComplete ? (
              <div className="checkout-content">
                <div className="product-summary">
                  <h2>Product Summary</h2>
                  <div className="product-summary-content">
                  <table>
                    {/* Product summary table */}
                    {cartItems.length > 0 ? (
                      <table className="cart-table">
                        <thead>
                   
                        </thead>
                        <tbody>
                          {cartItems.map((item) => (
                            <tr key={item.id}>

                              <td>{item.id}. {item.title}</td>
                              <td>₹{item.price}</td>
                              <td>Qty:{item.quantity}</td>

                            </tr>
                          ))}
                        </tbody>
                      </table>
                    ) : (
                      <p className="empty-cart-message">Your cart is empty.<li><b><a href="/products1">SHOP NOW  </a></b> </li> </p>
                    )}

                    <div className="cart-total">
                      <p>Total:</p>
                      <span>{calculateTotal(cartItems)}</span>
                    </div>

                  </table>
                  </div>
                </div>


                <div className="delivery-address">
                  <h2>Delivery Address</h2>
                  <form>
                    <div className="form-group">
                      <label htmlFor="firstName">First Name:</label>
                      <input type="text" id="firstName" name="firstName" required value={deliveryAddress.firstName} onChange={handleFormChange} />
                    </div>
                    <div className="form-group">
                      <label htmlFor="lastName">Last Name:</label>
                      <input type="text" id="lastName" name="lastName" required value={deliveryAddress.lastName} onChange={handleFormChange} />
                    </div>
                    <div className="form-group">
                      <label htmlFor="phoneNumber"> phone Number:</label>
                      <input type="text" id="phoneNumber" name="phoneNumber" required value={deliveryAddress.phoneNumber} onChange={handleFormChange} />
                    </div>
                    <div className="form-group">
                      <label htmlFor="address">Address: </label><br />
                      <input type="text" id="address" name="address" required value={deliveryAddress.address} onChange={handleFormChange} />
                    </div>
                    <div className="form-group">
                      <label htmlFor="landmark">Landmark:</label>
                      <input type="text" id="landmark" name="landmark" required value={deliveryAddress.landmark} onChange={handleFormChange} />
                    </div>
                    <div className="form-group">
                      <label htmlFor="city">City:</label><br />
                      <input type="text" id="city" name="city" required value={deliveryAddress.city} onChange={handleFormChange} />
                    </div>
                    <div className="form-group">
                      <label htmlFor="pincode">Pincode:</label><br />
                      <input type="text" id="pincode" name="pincode" required value={deliveryAddress.pincode} onChange={handleFormChange} />
                    </div>
                  </form>
                  <div className="checkout-buttons">
                    <button className="continue-button" disabled={!isFormValid()} onClick={handleContinue}>
                      Continue
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="checkout-content">
                {/* Display a success message or redirect to a success page */}
                {/* <h2>Order Placed Successfully!</h2>
                <p>Thank you for your purchase.</p> */}
                 <div className="product-summary">
                  <h2>Orders Summary</h2>
                  <div className="product-summary-content">
                  <table>
                    {/* Product summary table */}
                    {cartItems.length > 0 ? (
                      <table className="cart-table">
                        <thead>
                   
                        </thead>
                        <tbody>
                          {cartItems.map((item) => (
                            <tr key={item.id}>

                              <td>{item.id}. {item.title}</td>
                              <td>₹{item.price}</td>
                              <td>Qty:{item.quantity}</td>

                            </tr>
                          ))}
                        </tbody>
                      </table>
                    ) : (
                      <p className="empty-cart-message">Your cart is empty.<li><b><a href="/products1">SHOP NOW  </a></b> </li> </p>
                    )}

                    <div className="cart-total">
                      <p>Total:</p>
                      <span>{calculateTotal(cartItems)}</span>
                    </div>

                  </table><br /><br />
                  </div>
                  <div className="Delivery-T0">
                   
                    
                    
                  Delivering  to :{deliveryAddress.firstName} {deliveryAddress.lastName}.{deliveryAddress.phoneNumber},<br />
                   {deliveryAddress.address},<br />
                   {deliveryAddress.city},{deliveryAddress.landmark}, <br />
                   {deliveryAddress.pincode},
                      
                  </div> 
                </div>
                
                {/* <div className="delivery-address">
                <h2>select payment</h2>
                

                <button className="continue-button" >
                      Continue payment
                    </button>
              </div> */}

<div className="payment-container">
      <h1>Payment</h1>
      <div className="payment-methods">
        <h2>Select Payment Method:</h2>
        <div className="payment-icons">
          <div
            className={`payment-icon ${selectedMethod === 'googlePay' ? 'selected' : ''}`}
            onClick={() => handleMethodSelect('googlePay')}
          >
            <img style={{ height: 50 }}src="/images/gpay.jpg" alt="Google Pay" />
          </div>
          <div
            className={`payment-icon ${selectedMethod === 'phonePe' ? 'selected' : ''}`}
            onClick={() => handleMethodSelect('phonePe')}
          >
          <img style={{ height: 50 }}src="/images/phonepe.jpg" alt="PhonePe" />
          </div>
          <div
            className={`payment-icon ${selectedMethod === 'paytm' ? 'selected' : ''}`}
            onClick={() => handleMethodSelect('paytm')}
          >
             <img style={{ height: 50 }}src="/images/paytm.jpg" alt="Paytm" />
          </div>
        </div>
      </div>
      {selectedMethod && (
        <div className="account-details">
          <h2>Enter Account Details:</h2>
          <form>
            <div className="form-group">
              <label htmlFor="upiId">UPI ID:</label>
              <input
                type="text"
                id="upiId"
                name="upiId"
                value={accountDetails.upiId}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="pin">PIN:</label>
              <input
                type="password"
                id="pin"
                name="pin"
                value={accountDetails.pin}
                onChange={handleInputChange}
              />
            </div>
          </form>
          <button onClick={handlePayment}>Pay Now</button>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          
        </div>
      )}
    </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
