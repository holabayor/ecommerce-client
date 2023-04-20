import React, { useState } from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import { AiFillDelete } from 'react-icons/ai';
import { Link } from 'react-router-dom';
// import watch from '../images/watch.jpg';

const Cart = () => {
  const price = 100;
  const [total, setTotal] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const handleChange = (e) => {
    setQuantity(e.target.value);
    setTotal(quantity * price);
  };

  const img =
    'https://i.pinimg.com/736x/ba/05/d8/ba05d87f44efa9a4fb21c7186fbe57fc.jpg';
  return (
    <>
      <Meta title={'Cart'} />
      <BreadCrumb title="Cart" />
      <section className="cart-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="cart-header py-3 d-flex justify-content-between align-items-center">
                <h4 className="cart-col-1">Product</h4>
                <h4 className="cart-col-2">Price</h4>
                <h4 className="cart-col-3">Quantity</h4>
                <h4 className="cart-col-4">Total</h4>
              </div>
              <div className="cart-data py-3 d-flex justify-content-between align-items-center">
                <div className="cart-col-1 gap-15 d-flex align-content-center">
                  <div className="w-25 p-2">
                    <img src={img} className="img-fluid" alt="product" />
                  </div>
                  <div className="w-75">
                    <p>Product name</p>
                    <p>
                      Size : <span>S</span>
                    </p>
                    <p>
                      Color : <span>#ABFEDA</span>
                    </p>
                    <p className="size"></p>
                  </div>
                </div>
                <div className="cart-col-2">$ {price}</div>
                <div className="cart-col-3 d-flex align-items-center gap-15">
                  <div className="w-35">
                    <input
                      className="form-control"
                      type="number"
                      min={1}
                      max={50}
                      value={quantity}
                      onChange={handleChange}
                      name="quantity"
                      id="quantity"
                    />
                  </div>
                  <div>
                    <AiFillDelete size={30} className="delete" />
                  </div>
                </div>
                <div className="cart-col-4">$ {total}</div>
              </div>
            </div>
            <div className="col-12 py-2 ">
              <div className="d-flex justify-content-between">
                <div>
                  <div className="py-3 mb-3">
                    <Link to="/product" className="button">
                      Continue to Shopping
                    </Link>
                  </div>
                  <div>
                    <p>Order special instructions</p>
                    <textarea
                      name="instruction"
                      id="instruction"
                      className="w-100 form-control"
                      cols="40"
                      rows="3"
                    ></textarea>
                  </div>
                  <div></div>
                </div>
                <div className="d-flex flex-column align-items-end mt-auto">
                  <h5>
                    Subtotal:&nbsp;&nbsp;<span>$100.00</span>
                  </h5>
                  <p>Taxes and shipping calculated at checkout</p>
                  <Link to="/checkout" className="button">
                    Checkout
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
