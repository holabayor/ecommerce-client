import React from 'react';
import { BsGithub, BsLinkedin, BsTwitter, BsYoutube } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <img src="images/newsletter.png" alt="newsletter" />
                <h3 className="mb-0 text-white"> Sign up for Newsletter</h3>
              </div>
            </div>

            <div className="col-7">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-1"
                  placeholder="Your email address"
                  aria-label="Your email address"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-2" id="basic-addon2">
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className="text-white mb-4">Contact Us</h4>
              <div>
                <address className="text-white fs-6">
                  Somewhere
                  <br /> Everywhere <br />
                  Worldwide
                </address>
                <a
                  className="mt-3 mb-1 d-block text-white"
                  href="tel:2348140555831"
                >
                  +234 814 055 5831
                </a>
                <a
                  className="mt-2 mb-0 d-block text-white"
                  href="mailto:liasu.olabayo@gmail.com"
                >
                  liasu.olabayo@gmail.com
                </a>
                <div className="social_icons d-flex align-items-center gap-30 mt-4">
                  <a className="text-white" href="https://linkedin.com/in/laoj">
                    <BsLinkedin className="fs-4" />
                  </a>
                  <a
                    className="text-white"
                    href="https://twitter.com/holabayor"
                  >
                    <BsTwitter className="fs-4" />
                  </a>
                  <a className="text-white" href="https://github.com/holabayor">
                    <BsGithub className="fs-4" />
                  </a>
                  <a className="text-white" href="https://youtube.com">
                    <BsYoutube className="fs-4" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Information</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1" to="/privacy-policy">
                  Privacy Policy
                </Link>
                <Link className="text-white py-2 mb-1" to="/refund-policy">
                  Refund Policy
                </Link>
                <Link className="text-white py-2 mb-1" to="/shopping-policy">
                  Shopping Policy
                </Link>
                <Link className="text-white py-2 mb-1" to="/termsandcondition">
                  Terms of Service
                </Link>
                <Link className="text-white py-2 mb-1" to="/blogs">
                  Blogs
                </Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Account</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1" to={'#search'}>
                  Search
                </Link>
                <Link className="text-white py-2 mb-1" to="/about">
                  About Us
                </Link>
                <Link className="text-white py-2 mb-1" to="/">
                  Faq
                </Link>
                <Link className="text-white py-2 mb-1" to="/contact">
                  Contact
                </Link>
                <Link className="text-white py-2 mb-1" to="/">
                  Size Chart
                </Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className="text-white mb-4">Quick Links</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1" to="/">
                  Accessories
                </Link>
                <Link className="text-white py-2 mb-1" to="/">
                  Laptops
                </Link>
                <Link className="text-white py-2 mb-1" to="/">
                  Headphones
                </Link>
                <Link className="text-white py-2 mb-1" to="/">
                  Smart Watches
                </Link>
                <Link className="text-white py-2 mb-1" to="/">
                  Tablets
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white">
                &copy; {new Date().getFullYear()}; Powered by Josh
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
