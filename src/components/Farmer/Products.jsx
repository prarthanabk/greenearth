import React, { useState,useEffect } from 'react'
//import axios from 'axios';
import '../../App.css';

function Products() {
    const [products, setProducts] = useState([]);
    const headingStyles = {
      fontSize: '2.7rem',
      color: 'green',
      fontFamily: 'Helvetica, Arial, sans-serif',
      fontWeight: 'bold',
      textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
      letterSpacing: '2px',
      textAlign: 'center',
      marginTop: '20px',
    };
  useEffect(() => {
    fetch('http://localhost:3001/products')
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
        <div className="container">
        {/* <h1 style={headingStyles}>Products</h1> */}
        <table className="table">
          <thead>
            <tr>
            <th>Product ID</th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Cost/Unit</th>
              <th>Total Cost</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {products.map((person) => (
              <tr key={person.password}>
                <td>{person.pid}</td>
                <td>{person.pname}</td>
                <td>{person.qty}</td>
                <td>{person.ppu}</td>
                <td>{person.ttc}</td>
                <td>{person.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }


export default Products