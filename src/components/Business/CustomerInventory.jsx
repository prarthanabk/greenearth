import React, { useState, useEffect } from 'react'
import axios from 'axios';
import '../Farmer/RegistrationPage.css';
import '../../App.css';

function CustomerInventory() {
  const [products, setProducts] = useState([]);



  const [id, setid] = useState('');

  const [password, setpassword] = useState('');
  const [qty, setqty] = useState('');
  const [address, setaddress] = useState('');
  const [phone, setphone] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      id: id,
      phone: phone,
      address: address,
      qty: qty,
      password: password




    }
    console.log(data);
    try {
      const response = await axios.post('http://localhost:3001/order', data);
      console.log(data);
      console.log(response);

    } catch (error) {
      console.log(error);


    }
  }

  const showAlert = () => {
    window.alert('Product Added');
  };

  useEffect(() => {
    fetch('http://localhost:3001/inventory')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);


  return (
    <div>
      <div className="registration-container">
        <h1><u>Order Product</u></h1>
        <form className="registration-form" onSubmit={handleSubmit} method='post'>
          <div className="form-group">
            <label htmlFor="name">Product ID:</label>
            <input type="text" id="name" name='id' value={id} onChange={(e) => setid(e.target.value)} required />
          </div>
          <div className="form-group">
            <label htmlFor="name">Quantity:</label>
            <input type="number" id="qty" name='qty' value={qty} onChange={(e) => setqty(e.target.value)} required />
          </div>


          <div className="form-group">
            <label htmlFor="email">Phone No:</label>
            <input type="number" id="num" name='phone' value={phone} onChange={(e) => setphone(e.target.value)} required />
          </div>


          <div className="form-group">
            <label htmlFor="address">Address:</label>
            <input type="text" id="address" name='address' value={address} onChange={(e) => setaddress(e.target.value)} required />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password:_</label>
            <input type="password" id="password" name='password' value={password} onChange={(e) => setpassword(e.target.value)} required />
          </div>

          <button type="submit" className="register-button" >Order</button>

        </form>
      </div>
      <div className="container">
        {/* <h1>Products</h1> */}
        <table className="table">
          <thead>
            <tr>
              <th>Product ID</th>
              <th>Name</th>


              <th>Capacity[Kg]</th>
              <th>No of Packets</th>
              <th>Cost/Unit</th>
              <th>Present Location</th>
            </tr>
          </thead>
          <tbody>
            {products.map((person) => (
              <tr key={person.inventoryid}>
                <td>{person.inventoryid}</td>
                <td>{person.pname}</td>

                <td>{person.capacity}</td>
                <td>{person.Noofpackets}</td>
                <td>{person.cost}</td>
                <td>{person.presentlocation}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}





export default CustomerInventory