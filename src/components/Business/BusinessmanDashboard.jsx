import React from 'react'
import './BusinessmanDashboard.css';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';


function BusinessmanDashboard() {
  return (
    <div>
    <Helmet>
    <title>Businessman Dashboard</title>
  </Helmet>
  <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <div class="container">
  <div class="card" onclick="showMessage()">
    <img src="https://th.bing.com/th/id/OIP.fxw-yjm-erjj7Bo2O18RYAAAAA?pid=ImgDet&w=300&h=300&rs=1" alt="Purchase Product"/>
    <center><h2><Link to='/purchaseproducts' style={{ color: '#000',textDecoration: 'none' }}>Purchase Products</Link></h2></center>
    {/* <p>$10.00</p> */}
    <br/>
  </div>
  <div class="card" onclick="showMessage()">
    <img src="https://tse4.mm.bing.net/th?id=OIP.-ENfDJtBbGh15PbBAXS_TQHaHa&pid=Api&P=0" alt="Purchased Products" />
    <center><Link to='/listproducts'><h2>Products</h2></Link></center>
    
    <br/>
  </div>
  <div class="card" onclick="showMessage()">
    <img src="https://tse3.mm.bing.net/th?id=OIP.n23jEKO2wJOTpylRM8EOmgHaHa&pid=Api&P=0" alt="Convertions" />
    <center><Link to='/convertions'><h2>Convertions</h2></Link></center>
    
    <br/>
    
  </div>
  <div class="card" onclick="showMessage()">
    <img src="https://tse3.mm.bing.net/th?id=OIP.c-U9STnZ0Cd7FL2A0qPKkQHaHC&pid=Api&P=0" alt="Inventory" />
    <center><Link to='/inventory'><h2>Inventory</h2></Link></center>
    
    <br/>
    
  </div>
  
</div>

  

  
  
  </div>

  )
}

export default BusinessmanDashboard