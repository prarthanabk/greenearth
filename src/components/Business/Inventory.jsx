import React, { useState,useEffect } from 'react'
import axios from 'axios';
import '../../App.css';

function Inventory() {
    const [products, setProducts] = useState([]);

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
    );
  }


    


export default Inventory