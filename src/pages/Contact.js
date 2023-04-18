import React from 'react';
import {
  AiFillHome,
  AiFillInfoCircle,
  AiFillMail,
  AiFillPhone,
} from 'react-icons/ai';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';

const Contact = () => {
  return (
    <>
      <Meta title="Contact Us" />
      <BreadCrumb title="Contact Us" />
      <div className="contact-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126497.66962420488!2d4.480299996595452!3d7.784293138294478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103787e4c949b8fd%3A0x33c62c1600f59277!2sOsogbo%2C%20Osun!5e0!3m2!1sen!2sng!4v1681825762817!5m2!1sen!2sng"
                width="600"
                height="450"
                className="border-0 w-100"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                title="map"
              />
            </div>
            <div className="col-12 mt-5">
              <div className="contact-inner-wrapper d-flex justify-content-between">
                <div className="">
                  <h3 className="contact-title mb-4">Contact</h3>
                  <form action="" className="d-flex flex-column gap-15">
                    <div>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Name"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Email"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Mobile Number"
                      />
                    </div>
                    <div>
                      <textarea
                        name=""
                        id=""
                        className="w-100 form-control"
                        cols="30"
                        rows="10"
                        placeholder="Commments"
                      ></textarea>
                    </div>
                    <div>
                      <button className=" button border-0">Submit</button>
                    </div>
                  </form>
                </div>
                <div className="">
                  <h3 className="contact-title mb-4">Get in touch with us</h3>
                  <div>
                    <ul className="ps-0">
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <AiFillHome className="fs-5 contact-icon" />
                        <address className="mb-0">
                          Somewhere, Everywhere, Worldwide
                        </address>
                      </li>
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <AiFillPhone className="fs-5 contact-icon" />
                        <a className="" href="tel:2348140555831">
                          +234 814 055 5831
                        </a>
                      </li>
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <AiFillMail className="fs-5 contact-icon" />
                        <a className="" href="mailto:liasu.olabayo@gmail.com">
                          liasu.olabayo@gmail.com
                        </a>
                      </li>
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <AiFillInfoCircle className="fs-5 contact-icon" />
                        <p>Monday - Friday 10AM - 8 PM</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
