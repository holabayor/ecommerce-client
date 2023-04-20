import { Link } from 'react-router-dom';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';

const Checkout = () => {
  return (
    <>
      <Meta title={'Checkout'} />
      <section className="checkout-wrapper py-5 home-wrapper">
        <div className="container-xxl">
          <div className="row">
            <div className="col-7">
              {' '}
              <h4 className="title">ibùsọ̀</h4>
              <nav
                style={{ '--bs-breadcrumb-divider': '>;' }}
                aria-label="breadcrumb"
              >
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="/cart">Cart</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    <a href="#">Information</a>
                  </li>
                  <li className="breadcrumb-item" aria-current="false">
                    Shipping
                  </li>
                  <li className="breadcrumb-item" aria-current="false">
                    Payment
                  </li>
                </ol>
              </nav>
              <div className="contact-info">
                <h4 className="title">Contact Information</h4>
                <p>Username (user email)</p>
                <Link to="/login" className="">
                  Log out
                </Link>
                <div className="form-check">
                  <input
                    type="checkbox"
                    value={''}
                    id="subscribe"
                    className="form-check-input"
                  />
                  <label htmlFor="subscribe" className="form-check-label">
                    Email me with news and offers
                  </label>
                </div>
              </div>
            </div>
            <div className="col-5"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Checkout;
