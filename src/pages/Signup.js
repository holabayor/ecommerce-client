import React from 'react';
import { Link } from 'react-router-dom';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';

const Signup = () => {
  return (
    <>
      <Meta title={'Signup'} />
      <BreadCrumb title="Signup" />
      <div className="signup-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row mx-auto">
            <div className="col-12">
              <div className="auth-card">
                <h3 className="text-center mb-3">Login</h3>
                <form action="" className="d-flex flex-column gap-20">
                  <div>
                    <input
                      name="first-name"
                      type="text"
                      className="form-control"
                      placeholder="First name"
                    />
                  </div>
                  <div>
                    <input
                      name="last-name"
                      type="text"
                      className="form-control"
                      placeholder="Last name"
                    />
                  </div>
                  <div>
                    <input
                      name="email"
                      type="email"
                      className="form-control"
                      placeholder="Email"
                    />
                  </div>
                  <div>
                    <input
                      name="password"
                      type="password"
                      className="form-control"
                      placeholder="Password"
                    />
                  </div>
                  <div>
                    <p>
                      Already have an account?&nbsp;
                      <Link to={'/login'} className="mb-3">
                        Login
                      </Link>
                    </p>
                    <div className="d-flex justify-content-center gap-15 align-items-ceonter">
                      <button className="button border-0" type="submit">
                        Create
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

export default Signup;
