import React from 'react'
import { useState } from 'react'

import '../Farmer/Delete.css'
import axios from 'axios';

function Purchase() {
    const [pid, setpid] = useState("");
    
    const [status, setstatus] = useState("SOLD");
    
    
  
    const handleSubmit=async(e)=>{
      e.preventDefault();
      const data = {
       
       pid:pid,
       status:'Sold'
     
        
  
      }
    //   console.log(data);
    //   try {
    //     const response = await axios.delete('http://localhost:3001/products/${pno}', data);
    //     console.log(data);
    //     console.log(response);
       
    //   } catch (error) {
    //     console.log(error);
  
  
    //   }
    fetch(`http://localhost:3001/purchase/${pid}`, {
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
            <h3 style={{ color: '#000',textDecoration: 'none' }}>Purchase Product</h3>

          </div>
        </div>
        <form className="login-form" onSubmit={handleSubmit}  method='put'>
        <input type="number" placeholder="Unique ID" name='pid' value={pid} onChange={(e) => setpid(e.target.value)} required/>
 
          
          
          <button >Submit</button>
          

        </form>

      </div>
    </div>
  </div>
  )
}

export default Purchase
