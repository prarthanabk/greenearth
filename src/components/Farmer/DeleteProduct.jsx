import React from 'react'
import { useState } from 'react'

import './Delete.css'
import axios from 'axios';

function DeleteProduct() {
    const [pid, setpid] = useState("");
    const [password, setpassword] = useState("");

    
    
  
    const handleSubmit=async(e)=>{
      e.preventDefault();
      const data = {
       
       pid:pid,
       password:password
        
  
      }
    //   console.log(data);
    //   try {
    //     const response = await axios.delete('http://localhost:3001/products/${pno}', data);
    //     console.log(data);
    //     console.log(response);
       
    //   } catch (error) {
    //     console.log(error);
  
  
    //   }
    fetch(`http://localhost:3001/removeproduct/${pid}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ password }),
      })
    }


    const showAlert = () => {
        window.alert('Deleted Successfully');
      };

  return (
    <div className='Hey'>
    <div className="login-page">
      <div className="form">
        <div className="login">
          <div className="login-header">
            <h3 style={{ color: '#000',textDecoration: 'none' }}>Delete PRODUCT</h3>

          </div>
        </div>
        <form className="login-form" onSubmit={handleSubmit}  method='delete'>
        <input type="number" placeholder="Unique ID" name='pid' value={pid} onChange={(e) => setpid(e.target.value)} required/>
        <input type="password" placeholder="Your Password" name='password' value={password} onChange={(e) => setpassword(e.target.value)} required/>
 
          
          
          <button >Submit</button>
          

        </form>

      </div>
    </div>
  </div>
  )
}

export default DeleteProduct