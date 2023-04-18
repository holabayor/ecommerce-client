import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';

const ResetPassword = () => {
  return (
    <>
      <Meta title={'Forgot Password'} />
      <BreadCrumb title="Forgot Password" />
      <div className="forgot-password-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row mx-auto">
            <div className="col-12">
              <div className="auth-card">
                <h3 className="text-center mb-3">Reset Your Password</h3>
                <form action="" className="d-flex flex-column gap-20">
                  <p className="text-center">Enter your new password</p>
                  <div>
                    <input
                      name="password"
                      type="password"
                      className="form-control"
                      placeholder="New password"
                    />
                  </div>
                  <div>
                    <input
                      name="password-again"
                      type="password"
                      className="form-control"
                      placeholder="New password again"
                    />
                  </div>
                  <div>
                    <div className="mt-3 d-flex flex-column justify-content-center gap-15 align-items-center">
                      <button className="button border-0 mb-1" type="submit">
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
