import React from 'react'
import '../Business/BusinessmanDashboard.css';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

function DeliveryDashboard() {
  return (
    <div>
    <Helmet>
    <title>DeliveryMan Dashboard</title>
  </Helmet>
  <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <div class="container">
  <div class="card" onclick="showMessage()">
    <img src="https://tse3.mm.bing.net/th?id=OIP.llkcvAulBp_qTfYnqOWE6AHaHW&pid=Api&P=0" alt="Purchase Product"/>
    <center><h2><Link to='/borders'>Orders</Link></h2></center>
    {/* <p>$10.00</p> */}
    <br/>
  </div>
  <div class="card" onclick="showMessage()">
    <img src="https://tse4.mm.bing.net/th?id=OIP.-ENfDJtBbGh15PbBAXS_TQHaHa&pid=Api&P=0" alt="Purchased Products" />
    <center><Link to='/bmorders'><h2>Manage Orders</h2></Link></center>
    
    <br/>
  </div>
  <div class="card" onclick="showMessage()">
    <img src="https://tse3.mm.bing.net/th?id=OIP.bEcBVg6PfUSuWunquP91CQHaHa&pid=Api&P=0" alt="Convertions" />
    <center><Link to='/bhorders'><h2>Orders History</h2></Link></center>
    
    <br/>
    
  </div>
 
  
</div>

  

  
  
  </div>
  )
}

export default DeliveryDashboard;