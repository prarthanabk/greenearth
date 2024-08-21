import React from 'react'
import { useState } from 'react'

import '../Farmer/Delete.css'
import axios from 'axios';

function Bmorders() {
    const [orderid, setorderid] = useState("");
    
    const [status, setstatus] = useState("");
    
    
  
    const handleSubmit=async(e)=>{
      e.preventDefault();
      const data = {
       
       orderid:orderid,
       status:status
     
        
  
      }
    //   console.log(data);
    //   try {
    //     const response = await axios.delete('http://localhost:3001/products/${pno}', data);
    //     console.log(data);
    //     console.log(response);
       
    //   } catch (error) {
    //     console.log(error);
  
  
    //   }
    fetch(`http://localhost:3001/manageorder/${orderid}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ status }),
      
       
      })
    }


    

  return (
    <div className='Hey'>
    <div className="login-page">
      <div className="form">
        <div className="login">
          <div className="login-header">
            <h3 style={{ color: '#000',textDecoration: 'none' }}>Order Manage</h3>

          </div>
        </div>
        <form className="login-form" onSubmit={handleSubmit}  method='put'>
        <input type="number" placeholder="Unique Order ID" name='orderid' value={orderid} onChange={(e) => setorderid(e.target.value)} required/>
        <label htmlFor="city">Status:</label>
        <select id="city" name='status' value={status} onChange={(e) => setstatus(e.target.value)} required>
          <option value="">Select </option>
          <option value="Cancelled">cancelled</option>
          <option value="Delivered">Delivered</option>
          
        </select>
          
          
          <button >Submit</button>
          

        </form>

      </div>
    </div>
  </div>
  )
}

export default Bmorders