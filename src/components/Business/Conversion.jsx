import React from 'react'
import '../Farmer/RegistrationPage.css';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
function Conversion() {
    const [pname, setpname] = useState('');
    const [cost, setcost] = useState('');

    const [qty, setqty] = useState('');
    const [capacity, setcapacity] = useState('');

    
    
    

    const handleSubmit=async(e)=>{
      e.preventDefault();
      const data = {
        pname:pname,
        qty:qty,
        capacity:capacity,
        cost:cost
        

        
  
      }
      console.log(data);
      try {
        const response = await axios.post('http://localhost:3001/conversion', data);
        console.log(data);
        console.log(response);
       
      } catch (error) {
        console.log(error);
  
  
      }
    }
  
    const showAlert = () => {
      window.alert('Converted');
    };

  return (
    <div className="registration-container">
    <h1 style={{ color: '#000',textDecoration: 'none' }}>Conversion</h1>
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
        <label htmlFor="name">Cost per Unit:</label>
        <input type="number" id="qty" name='cost' value={cost} onChange={(e) => setcost(e.target.value)} required/>
      </div>
      

      <div className="form-group">
        <label htmlFor="city">Capacity:</label>
        <select id="city" name='capacity' value={capacity} onChange={(e) => setcapacity(e.target.value)} required>
          <option value="">Select Packet Capacity</option>
          <option value="1">1 Kg</option>
          <option value="2">2 Kg</option>
          
        </select>
      </div>
    
      
      <button type="submit" className="register-button" onClick={showAlert}>Add</button>
    
    </form>
  </div>
  )
}

export default Conversion