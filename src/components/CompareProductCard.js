import React from 'react';
import Colours from '../components/Colours';

const CompareProductCard = () => {
  return (
    <>
      <div className="col-3">
        <div className="compare-product-card position-relative">
          <img
            src="images/cross.svg"
            alt="cross"
            className="position-absolute cross img-fluid"
          />
          <div className="product-card-image">
            <img
              src="images/watch.jpg"
              className="img-fluid w-100"
              alt="watch"
            />
          </div>
          <div className="compare-product-details">
            <h5 className="title">Samsung S22+ Ultra</h5>
            <h6 className="price mb-3 mt-3">$430.00</h6>

            <div>
              <div className="product-details">
                <h5>Brand:</h5>
                <p>Samsung</p>
              </div>
              <div className="product-details">
                <h5>Type:</h5>
                <p>Phone</p>
              </div>
              <div className="product-details">
                <h5>Availability:</h5>
                <p>In Stock</p>
              </div>
              <div className="product-details">
                <h5>Color:</h5>
                <Colours />
              </div>
              <div className="product-details">
                <h5>Size:</h5>
                <div className="d-flex gap-10">
                  <p>S</p>
                  <p>M</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompareProductCard;
