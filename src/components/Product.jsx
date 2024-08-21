import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import DATA from '../Data';
import { useHistory } from 'react-router-dom';

const Product = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };
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


  const filteredData = DATA.filter(
    (item) =>
      (selectedCategory === 'All' || item.categories === selectedCategory) &&
      (item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.categories.toLowerCase().includes(searchTerm.toLowerCase()))
  );



  // const cardItem = (item) => {
  //   if (selectedCategory === 'All' || item.categories === selectedCategory) {
  //     const handleAddToCart = () => {
  //       alert('Please login to add to cart');
  //     };
  
  //     return (
  //       <div className="card my-5 py-4" key={item.id} style={{ width: '18rem', margin: '0 10px 20px' }}>
  //         <img src={item.img} className="card-img-top" alt={item.title} />
  //         <div className="card-body text-center">
  //           <h5 className="card-title">{item.title}</h5>
  //           <p className="lead">₹{item.price}</p>
  //           <button className="btn btn-outline-primary" onClick={handleAddToCart}>
  //             Add to Cart
  //           </button>
  //         </div>
  //       </div>
  //     );
  //   }
  //   return null;
  // };
  const history = useHistory();
  const cardItem = (item) => {
    if (selectedCategory === 'All' || item.categories === selectedCategory) {
      const handleAddToCart = () => {
        alert('Please login to add to cart');
      };

      const handleProductClick = () => {
        history.push(`/products/${item.id}`);
      };

      return (
        <div className="card my-5 py-4" key={item.id} style={{ width: '18rem', margin: '0 10px 20px' }}>
          <img src={item.img} className="card-img-top" alt={item.title} onClick={handleProductClick} />
          <div className="card-body text-center">
            <h5 className="card-title">{item.title}</h5>
            <p className="lead">₹{item.price}</p>
            <button className="btn btn-outline-primary" onClick={handleAddToCart}>
              Add to Cart
            </button>
          </div>
        </div>
      );
    }
    return null;
  };

  const handleCategoryFilter = (category) => {
    setSelectedCategory(category);
  };

  const categories = ['Flowers', 'Plants', 'Planters', 'Gifts', 'Fruits', 'Seeds', 'Bulbs', 'Soil & Fertilizer', 'All'];

  return (
    <div>
      <div className="container py-5">
        <div className="row">
          <div className="col-12 text-center">
            <h1 style={headingStyles}>Popular Products</h1>
            <hr />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-center align-items-center">
          {/* Search bar */}
          <div className="col-8 col-md-6 mb-4">
            <div className="search-bar d-flex align-items-center">
              <input
                type="text"
                className="form-control"
                placeholder="Search by category or title"
                value={searchTerm}
                onChange={handleSearch}
                style={{
                  width: '120%',
                  height: '40px',
                  padding: '0 10px',
                  fontSize: '1rem',
                  borderRadius: '5px',
                  border: '1px solid #ccc',
                }}
              />
              <button
                className="search-icon ml-2"
                type="button"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '50px',
                  height: '40px',
                  backgroundColor: 'light blue',
                  borderRadius: '5px',
                  border: '1px solid #ccc',
                 
                }}
              >
                <FaSearch style={{ color: 'gray', fontSize: '1.2rem' }} />
              </button>


            </div>
          </div>
          {/* Filter buttons */}
          <div className="col-12 text-center mb-4">
            <div className="btn-group" role="group">
              {categories.map((category) => (
                <button
                  type="button"
                  className="btn"
                  style={{
                    marginRight: '5px',
                    backgroundColor: selectedCategory === category ? 'blue' : 'silver',
                    color: selectedCategory === category ? 'silver' : 'black',
                  }}
                  onClick={() => handleCategoryFilter(category)}
                  key={category}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          {filteredData.map(cardItem)}
        </div>
      </div>
    </div>
  );
};

export default Product;
