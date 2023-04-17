import React from 'react';
import ReactStars from 'react-rating-stars-component';
import { Link } from 'react-router-dom';

const ProductCard = () => {
  return (
    <>
      <Link className="col-2">
        <div className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <Link>
              <img src="images/wish.svg" alt="add to wishlist" />
            </Link>
          </div>
          <div className="product-image">
            <img src="images/watch.jpg" className="img-fluid" alt="watch" />
            <img src="images/watch.jpg" className="img-fluid" alt="watch" />
          </div>
          <div className="product-details">
            <h6 className="brand">Havels</h6>
            <h5 className="product-title">Kids Headphones bulk pack 10</h5>
            <ReactStars
              count={5}
              value={4}
              edit={false}
              size={24}
              activeColor="#ffd700"
            />
            <p className="price">$120.00</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column  gap-15">
              <Link>
                <img src="images/prodcompare.svg" alt="prod " />
              </Link>
              <Link>
                <img src="images/view.svg" alt="view cart" />
              </Link>

              <Link>
                <img src="images/add-cart.svg" alt="add to cart" />
              </Link>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default ProductCard;
