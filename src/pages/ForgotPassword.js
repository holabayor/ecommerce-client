import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
  return (
    <>
      <Meta title={'Forgot Password'} />
      <BreadCrumb title="Forgot Password" />
      <div className="forgot-password-wrapper py-5 home-wrapper-2">
        <div className="row mx-auto">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Reset Your Password</h3>
              <form action="" className="d-flex flex-column gap-20">
                <p className="text-center">
                  We will send you an email to reset your password
                </p>
                <div>
                  <input
                    name="email"
                    type="email"
                    className="form-control"
                    placeholder="Email"
                  />
                </div>
                <div>
                  <div className="d-flex justify-content-center gap-15 align-items-ceonter">
                    <button className="button border-0">Submit</button>
                  </div>
                  <Link to={'/login'} className="button">
                    Signup
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
