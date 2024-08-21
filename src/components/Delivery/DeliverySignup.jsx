import React from 'react'
import '../Farmer/RegistrationPage.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


function DeliverySignup() {
  const [fullname, setfullname] = useState('');
  const [phone, setphone] = useState('');
  const [password, setpassword] = useState('');
  const [email, setemail] = useState('');
  const [address, setaddress] = useState('');
  const [city, setcity] = useState('');
  const [adhar, setadhar] = useState('');

  const handleSubmit=async(e)=>{
    e.preventDefault();
    const data = {
      fullname: fullname,
      email:email,
      password:password,
      address:address,
      city:city,
      phone:phone,
      adhar:adhar
      

    }
    console.log(data);
    try {
      const response = await axios.post('http://localhost:3001/deliverysignup', data);
      console.log(data);
      console.log(response);
     
    } catch (error) {
      console.log(error);


    }
  }

  const showAlert = () => {
    window.alert('Registration Successfull. Please Login');
  };
  
  return (
    
   
    <div className="registration-container">
    <h1><u>Delivery Guy Registration</u></h1>
    <form className="registration-form" onSubmit={handleSubmit}  method='post'>
      <div className="form-group">
        <label htmlFor="name">Full Name:</label>
        <input type="text" id="name" name='fullname' value={fullname} onChange={(e) => setfullname(e.target.value)} required />
      </div>
      <div className="form-group">
        <label htmlFor="phone">Phone    No:</label>
        <input type="tel" id="phone" name='phone' value={phone} onChange={(e) => setphone(e.target.value)} required />
      </div>
      <div className="form-group">
        <label htmlFor="email">Mail Address:</label>
        <input type="email" id="email" name='email' value={email} onChange={(e) => setemail(e.target.value)} required  />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name='password' value={password} onChange={(e) => setpassword(e.target.value)} required />
      </div>
     
      <div className="form-group">
        <label htmlFor="address">Home Address:</label>
        <input type="text" id="address" name='address' value={address} onChange={(e) => setaddress(e.target.value)} required />
      </div>
      <div className="form-group">
        <label htmlFor="phone">Adhar:</label>
        <input type="number" id="adhar" name='adhar' value={adhar} onChange={(e) => setadhar(e.target.value)} required />
      </div>
      {/* <div className="form-group">
        <label htmlFor="email">DL Number:</label>
        <input type="email" id="email" value={email} onChange={handleEmailChange} required />
      </div> */}
      <div className="form-group">
        <label htmlFor="city">City:</label>
        <select id="city" name='city' value={city} onChange={(e) => setcity(e.target.value)} required>
          <option value="">Select a city</option>
          <option value="Kundapura">Kundapura</option>
          <option value="Udupi">Udupi</option>
          <option value="Manglore">Manglore</option>
          <option value="shivamogga">Shivamogga</option>
        </select>
      </div>
      
      <button type="submit" className="register-button" onClick={showAlert}>Register</button>
    </form>
  </div>
        
  );
};

export default DeliverySignup