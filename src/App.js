import './App.css';
import Header from './components/Header';
import Footer from './components/Footer'
import Home from './components/Home'
import About from './components/About'
import Product from './components/Product'
import Product1 from './components/Product1'

import Contact from './components/Contact'
import { Redirect, Route, Switch } from 'react-router-dom';
import ProductDetail from './components/ProductDetail';
import ProductDetail1 from './components/ProductDetail1';

// import Cart from './components/Cart';

import  CartContextProvider  from './components/CartContext';

import Checkout from './components/Checkout'
import Checkout1 from './components/Checkout1';
import FarmerLogin from './components/Farmer/FarmerLogin';


import { Provider } from "react-redux"; // Import the Provider component
import store from "./redux1/store"; // Import the store


import DeliveryLogin from './components/Delivery/DeliveryLogin';
import DeliverySignup from './components/Delivery/DeliverySignup';
import DeliveryDashboard from './components/Delivery/DeliveryDashboard';

import FarmerSignup from './components/Farmer/FarmerSignup';

import BusinessLogin from './components/Business/BusinessLogin';
import BusinessmanDashboard from './components/Business/BusinessmanDashboard';
import Purchase from './components/Business/Purchase';
import Conversion from './components/Business/Conversion';
import Inventory from './components/Business/Inventory';
import CustomerInventory from './components/Business/CustomerInventory';
import CustomerOrders from './components/Business/CustomerOrders';
import Borders from './components/Business/Borders';
import Bmorders from './components/Business/Bmorders';
import Bhorders from './components/Business/OrderHistory';


import FarmerDashboard from './components/Farmer/FarmerDashboard';
import AddProduct from './components/Farmer/AddProduct';
import Products from './components/Farmer/Products';
import DeleteProduct from './components/Farmer/DeleteProduct';

import CartPage from './components/CartPage';

function App() {
  return (
    <CartContextProvider>
   
    <Provider store={store}> {/* Wrap your App component with the Provider component and pass the store */}
    <>
      <Header/>
      <Switch>
        <Route exact path="/" component={Home} />

        <Route exact path="/products1" component={Product1} />
        <Route exact path="/products1/:id" component={ProductDetail1} />

        <Route exact path="/products" component={Product} />
        <Route exact path="/products/:id" component={ProductDetail} />

       
        <Route exact path="/cart" component={CartPage} />

        {/* <Route exact path="/cart" component={Cart} /> */}
        <Route exact path="/checkout" component={Checkout} />
        <Route exact path="/checkout1" component={Checkout1} />

        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/farmerlogin" component={FarmerLogin} />
        <Route exact path="/farmersignup" component={FarmerSignup} />

        <Route exact path="/deliverylogin" component={DeliveryLogin} />
        <Route exact path="/delsignup" component={DeliverySignup} />
        <Route exact path="/ddashboard" component={DeliveryDashboard} />

        <Route exact path="/businesslogin" component={BusinessLogin} />
        <Route exact path="/bdashboard" component={BusinessmanDashboard} />
        <Route exact path="/purchaseproducts" component={Purchase} />
        <Route exact path="/convertions" component={Conversion} />
        <Route exact path="/inventory" component={Inventory} />
        <Route exact path="/ci" component={CustomerInventory} />
        <Route exact path="/orders" component={CustomerOrders} />
        <Route exact path="/borders" component={Borders} />
        <Route exact path="/bhorders" component={Bhorders} />
        <Route exact path="/bmorders" component={Bmorders} />
        <Route exact path="/iamadmin" component={Bhorders} />

        <Route exact path="/fdashboard" component={FarmerDashboard} />
 
        <Route exact path="/addproduct" component={AddProduct} />
        <Route exact path="/listproducts" component={Products} />
        <Route exact path="/removeproduct" component={DeleteProduct} />

        
        <Redirect to="/" />
      </Switch>
      <Footer/>
    </>
     </Provider>
     </CartContextProvider>
  );
}

export default App;


