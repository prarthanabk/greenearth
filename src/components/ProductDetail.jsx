import React from 'react';
import { useParams } from 'react-router';
import { useState } from 'react';
import DATA from '../Data';

const ProductDetail = () => {
  const [checkoutBtn, setCheckoutBtn] = useState('Checkout');
  const proid = useParams();
  const proDetail = DATA.filter((x) => x.id == proid.id);
  const product = proDetail[0];
  console.log(product);

  const handleCheckout = () => {
    alert('Please login');
  };

  return (
    <>
      <div className="container my-5 py-3">
        <div className="row">
          <div className="col-md-6 d-flex justify-content-center mx-auto product">
            <img style={{ width: 500, height: 500 }} src={product.img} alt={product.title} />
          </div>
          <div className="col-md-6 d-flex flex-column justify-content-center">
            <h1 className="display-5 fw-bold">{product.title}</h1>
            <hr />
            <h2 className="my-4">₹{product.price}</h2>
            <p className="lead">{product.desc}</p>
            <button onClick={handleCheckout} className="btn btn-outline-primary my-5">
              {checkoutBtn}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
