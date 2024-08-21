import React, { useState,useEffect } from 'react'
import axios from 'axios';
import '../Farmer/RegistrationPage.css';
import '../../App.css';

function Borders() {
    const [products, setProducts] = useState([]);
    const [password, setpassword] = useState('');
    
    
      

  useEffect(() => {
    fetch('http://localhost:3001/borders')
      .then((response) => response.json())
      .then((data) => {
        console.log(data.inventoryid);
        setProducts(data);
       

      
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
    //   fetch('http://localhost:3001/inventory')
    //   .then((respon) => respon.json())
    //   .then((datao) => {
    //     console.log(datao.cost);
        
    //   })
    //   .catch((error) => {
    //     console.error('Error fetching data:', error);
    //   });
  }, []);
    

    return (
        <div>
             <div className="registration-container">
    {/* <h1><u>Order Product</u></h1>
    <form className="registration-form" onSubmit={handleSubmit}  method='post'>
      

      <div className="form-group">
        <label htmlFor="password">Password:_</label>
        <input type="password" id="password" name='password' value={password} onChange={(e) => setpassword(e.target.value)} required/>
      </div>
      
      <button type="submit" className="register-button" >Order</button>
      
    </form> */}
  </div>
            <div className="container">
        {/* <h1>Products</h1> */}
        <table className="table">
          <thead>
            <tr>
            <th>Product ID</th>
            <th>Order ID</th>
             
              <th>Quantity</th>
              
              <th>Pick Location</th>
              <th>Drop Location</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {products.map((person) => (
              <tr key={person.inventoryid}>
                 <td>{person.inventoryid}</td>
                 <td>{person.orderid}</td>
                <td>{person.qty}</td>
                
                <td>{person.picklocation}</td>
                <td>{person.droplocation}</td>
                <td>{person.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
        </div>
    );
  }


    


export default Borders