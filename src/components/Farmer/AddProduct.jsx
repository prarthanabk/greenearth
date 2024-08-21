import React from 'react'
import './RegistrationPage.css';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
function AddProduct() {
    const [pname, setpname] = useState('');
    const history = useHistory();
    const [error, setError] = useState('');
    const [password, setpassword] = useState('');
    const [qty, setqty] = useState('');
    const [ppu, setppu] = useState('');
    const [ppa, setppa] = useState('');
    const [phone, setphone] = useState('');
    
    
    

    const handleSubmit=async(e)=>{
      e.preventDefault();
      const data = {
        pname:pname,
        qty:qty,
        ppu:ppu,
        ppa:ppa,
        phone:phone,
        password:password
        

        
  
      }
      console.log(data);
      try {
        const response = await axios.post('http://localhost:3001/addproduct', data);
        console.log(data);
        console.log(response);
       
      } catch (error) {
        console.log(error);
  
  
      }
    }
  
    const showAlert = () => {
      window.alert('Product Added');
    };

  return (
    <div className="registration-container">
    <h1>Add Product</h1>
    <form className="registration-form" onSubmit={handleSubmit}  method='post'>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name='pname' value={pname} onChange={(e) => setpname(e.target.value)} required/>
      </div>
      <div className="form-group">
        <label htmlFor="name">Quantity:</label>
        <input type="number" id="qty" name='qty' value={qty} onChange={(e) => setqty(e.target.value)} required/>
      </div>
      <div className="form-group">
        <label htmlFor="phone">Cost/Unit:</label>
        <input type="number" id="ppu" name='ppu' value={ppu} onChange={(e) => setppu(e.target.value)} required />
      </div>

      <div className="form-group">
        <label htmlFor="email">Phone No:</label>
        <input type="number" id="num" name='phone' value={phone} onChange={(e) => setphone(e.target.value)} required />
      </div>
      
     
      <div className="form-group">
        <label htmlFor="address">Pick Address:</label>
        <input type="text" id="address" name='ppa' value={ppa} onChange={(e) => setppa(e.target.value)} required />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password:_</label>
        <input type="password" id="password" name='password' value={password} onChange={(e) => setpassword(e.target.value)} required/>
      </div>
      
      <button type="submit" className="register-button" onClick={showAlert}>Add</button>
      {error && <p>{error}</p>}
    </form>
  </div>
  )
}

export default AddProduct