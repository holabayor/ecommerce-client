import React from 'react';

const WishlistCard = () => {
  return (
    <>
      <div className="col-3">
        <div className="wishlist-card position-relative">
          <img
            src="images/cross.svg"
            alt="cross"
            className="position-absolute cross img-fluid"
          />
          <div className="wishlist-card-image">
            <img
              src="images/samsung.jpg"
              className="img-fluid w-100"
              alt="watch"
            />
          </div>
        </div>
        <div className="py-3 px-3">
          <h5 className="title">Samsung Galaxy S22 Ultra 5G</h5>
          <h6 className="price mb-3 mt-3">$430.00</h6>
        </div>
      </div>
    </>
  );
};

export default WishlistCard;
