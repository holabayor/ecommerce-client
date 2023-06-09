import React, { useState } from 'react';
import ReactStars from 'react-rating-stars-component';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import ProductCard from '../components/ProductCard';
import ReactImageZoom from 'react-image-zoom';
import ImageHoverZoom from '../components/ImageHoverZoom';
import Colours from '../components/Colours';
import { Link } from 'react-router-dom';
import { AiOutlineHeart } from 'react-icons/ai';
import { BiExtension, BiRuler, BiShareAlt, BiShuffle } from 'react-icons/bi';
import { BsTruck } from 'react-icons/bs';

const SingleProduct = () => {
  // eslint-disable-next-line no-unused-vars
  const [orderedProduct, setOrderedProduct] = useState(9);

  const miniprops = {
    width: 270,
    zoomWidth: 270,
    zoomPosition: 'original',
    img: 'https://i.pinimg.com/736x/ba/05/d8/ba05d87f44efa9a4fb21c7186fbe57fc.jpg',
  };
  return (
    <>
      <Meta title={'Product'} />
      <BreadCrumb title="Product" />
      <div className="main-product-wrapper py-5 home-wrapper-2">
        <div className="container-xxl p-3">
          <div className="row">
            <div className="col-6 bg-white">
              <div className="main-product-image">
                <div>
                  <ImageHoverZoom
                    imagePath={
                      'https://i.pinimg.com/736x/ba/05/d8/ba05d87f44efa9a4fb21c7186fbe57fc.jpg'
                    }
                  />
                  {/* <ReactImageZoom {...mainprops} /> */}
                </div>
              </div>
              <div className="other-product-images d-flex flex-wrap justify-content-around gap-10">
                <div>
                  <ReactImageZoom {...miniprops} />
                </div>
                <div>
                  <ReactImageZoom {...miniprops} />
                </div>
                <div>
                  <ReactImageZoom {...miniprops} />
                </div>
                <div>
                  <ReactImageZoom {...miniprops} />
                </div>
              </div>
            </div>
            <div className="col-6 bg-white">
              <div className="main-product-details">
                <div className="border-bottom">
                  <h3 className="title">
                    Headphones Bluetooth Noise Reduction Microphone Beats By Dr.
                    Dre Studio 3 Wireless
                  </h3>
                </div>
                <p className="price mt-3">$129.00</p>
                <div>
                  <div className="d-flex align-items-center gap-10">
                    <ReactStars
                      count={5}
                      value={4}
                      edit={false}
                      size={24}
                      activeColor="#ffd700"
                    />
                    <p className="mb-0">( 2 Reviews )</p>
                  </div>
                  <div className="border-bottom py-3">
                    <a href="#review" className="t-review">
                      Write a Review
                    </a>
                  </div>
                  <div>
                    <div className="d-flex align-items-center gap-10 py-2">
                      <h4 className="product-heading">Type:</h4>
                      <p className="product-data">Headphone</p>
                    </div>
                    <div className="d-flex align-items-center gap-10 py-2">
                      <h4 className="product-heading">Brand:</h4>
                      <p className="product-data">Beats</p>
                    </div>
                    <div className="d-flex align-items-center gap-10 py-2">
                      <h4 className="product-heading">Category:</h4>
                      <p className="product-data">
                        Headphones, On-Ear-Headphones
                      </p>
                    </div>
                    <div className="d-flex align-items-center gap-10 py-2">
                      <h4 className="product-heading">Tags:</h4>
                      <p className="product-data">
                        beats, collection, headphones, on-ear, wireless, blue
                      </p>
                    </div>
                    <div className="d-flex align-items-center gap-10 py-2">
                      <h4 className="product-heading">Availability:</h4>
                      <p className="product-data">In Stock</p>
                    </div>
                    <div className="d-flex align-items-center gap-10 py-2">
                      <h4 className="product-heading">Size:</h4>
                      <div className="d-flex flex-wrap gap-15">
                        <span className="badge border border-secondary text-dark">
                          S
                        </span>
                        <span className="badge border border-secondary text-dark">
                          M
                        </span>
                        <span className="badge border border-secondary text-dark">
                          XL
                        </span>
                        <span className="badge border border-secondary text-dark">
                          XXL
                        </span>
                      </div>
                    </div>
                    <div className="d-flex align-items-center gap-10 py-2">
                      <h4 className="product-heading">Color</h4>
                      <Colours />
                    </div>
                    <div className="d-flex align-items-center gap-10 py-2">
                      <h4 className="product-heading">Quantity</h4>
                      <input
                        type="number"
                        name="quantity"
                        id="quantity"
                        value={1}
                        className="form-control"
                        min={1}
                        max={10}
                        style={{ width: '50px' }}
                      />
                      <div className="d-flex justify-content-center gap-30 align-items-ceonter ms-5">
                        <button className="button border-0" type="submit">
                          ADD TO CART
                        </button>
                        <Link to={'/cart'} className="button buy-now">
                          Buy It Now
                        </Link>
                      </div>
                    </div>
                    <div className="d-flex align-items-center gap-10 py-2">
                      <div className="product-links">
                        <a href="/wishlist">
                          <AiOutlineHeart className="fs-5 me-2" />
                          Add to Wishlist
                        </a>
                      </div>
                      <div className="product-links">
                        <a href="/compare-product">
                          <BiShuffle className="fs-5 me-2" />
                          Add to Compare
                        </a>
                      </div>
                    </div>
                    <div className="accordion-wrapper py-5">
                      <div class="accordion" id="accordion">
                        <div class="accordion-item">
                          <h2 class="accordion-header">
                            <button
                              class="accordion-button collapsed bg-white"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseOne"
                              aria-expanded="false"
                              aria-controls="collapseOne"
                            >
                              <BsTruck className="fs-5 me-2" />
                              Shipping & Returns
                            </button>
                          </h2>
                          <div
                            id="collapseOne"
                            class="accordion-collapse collapse"
                          >
                            <div class="accordion-body">
                              <p data-bs-parent="#accordion" className="mb-0">
                                Free shipping and returns available on all
                                orders! <br />
                                We ship all domestic orders within
                                <strong>&nbsp;5-10 business days.</strong>
                              </p>
                            </div>
                          </div>
                        </div>
                        <div class="accordion-item">
                          <h2 class="accordion-header">
                            <button
                              class="accordion-button collapsed bg-white"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseTwo"
                              aria-expanded="false"
                              aria-controls="collapseTwo"
                            >
                              <BiExtension className="fs-5 me-2" />
                              Materials
                            </button>
                          </h2>
                          <div
                            id="collapseTwo"
                            class="accordion-collapse collapse"
                          >
                            <div class="accordion-body">
                              <p data-bs-parent="#accordion" className="mb-0">
                                Running Shoes cushions your stride with soft
                                foam to keep you running in comfort. Lightweight
                                knit material wraps your foot in breathable
                                support, while a minimalist design fits in just
                                about anythere your day takes you.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div class="accordion-item">
                          <h2 class="accordion-header">
                            <button
                              class="accordion-button collapsed bg-white"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseThree"
                              aria-expanded="false"
                              aria-controls="collapseThree"
                            >
                              <BiRuler className="fs-5 me-2" />
                              Dimensions
                            </button>
                          </h2>
                          <div
                            id="collapseThree"
                            class="accordion-collapse collapse"
                          >
                            <div class="accordion-body">
                              <p data-bs-parent="#accordion" className="mb-0">
                                Dimension body goes here
                              </p>
                            </div>
                          </div>
                        </div>
                        <div class="accordion-item">
                          <h2 class="accordion-header">
                            <button
                              class="accordion-button collapsed bg-white"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseFour"
                              aria-expanded="false"
                              aria-controls="collapseFour"
                            >
                              <AiOutlineHeart className="fs-5 me-2" />
                              Care Instructions
                            </button>
                          </h2>
                          <div
                            id="collapseFour"
                            class="accordion-collapse collapse"
                          >
                            <div class="accordion-body">
                              <p data-bs-parent="#accordion" className="mb-0">
                                Use a soft damp cloth and a drop of mild soap to
                                remove any haze. Air dry.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <BiShareAlt className="fs-5 me-2" />
                    Share
                    <div className="payment-methods p-5">
                      <h3>Payment methods</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="description-wrapper py-3 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h4 className="mb-3">Decription Here</h4>
              <div className="bg-white p-3">
                <p>Lorem</p>
              </div>
            </div>
          </div>
          <div className="row"></div>
        </div>
      </section>
      <section className="reviews-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h4 id="review" className="mb-3">
                Reviews
              </h4>
              <div className="review-inner-wrapper">
                <div className="review-head d-flex justify-content-between align-items-end">
                  <div>
                    <h4 className="mb-2">Customer Reviews</h4>
                    <div className="d-flex align-items-center gap-10">
                      <ReactStars
                        count={5}
                        value={4}
                        edit={false}
                        size={24}
                        activeColor="#ffd700"
                      />
                      <p className="mb-0">Based on 2 Reviews</p>
                    </div>
                  </div>
                  {orderedProduct && (
                    <div>
                      <a
                        className="text-dark text-decoration-underline"
                        href="/errror"
                      >
                        Write a review
                      </a>
                    </div>
                  )}
                </div>
                <div className="review-form py-4">
                  <h4>Write a Review</h4>
                  <form action="" className="d-flex flex-column gap-15">
                    <ReactStars
                      count={5}
                      value={4}
                      edit={true}
                      size={24}
                      activeColor="#ffd700"
                    />
                    <div>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter your name"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="johndoe@example.com"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Give tour review a title"
                      />
                    </div>
                    <div>
                      <textarea
                        name=""
                        id=""
                        className="w-100 form-control"
                        cols="30"
                        rows="10"
                        placeholder="Write your commments here"
                      ></textarea>
                    </div>
                    <div className="d-flex justify-content-end">
                      <button className="button border-0">Submit Review</button>
                    </div>
                  </form>
                </div>
                <div className="reviews mt-4">
                  <div className="review">
                    <div className="d-flex align-items-center gap-10">
                      <h6 className="mb-0">Josh</h6>
                      <ReactStars
                        count={5}
                        value={5}
                        edit={false}
                        size={24}
                        activeColor="#ffd700"
                      />
                    </div>
                    <p className="mt-3">Lorem</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="popular-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Our Popular Products</h3>
            </div>
          </div>
          <div className="row">
            <ProductCard />
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleProduct;
