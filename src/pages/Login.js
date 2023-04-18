import React from 'react';
import { Link } from 'react-router-dom';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';

const Login = () => {
  return (
    <>
      <Meta title={'Login'} />
      <BreadCrumb title="Login" />
      <div className="login-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row mx-auto">
            <div className="col-12">
              <div className="auth-card">
                <h3 className="text-center mb-3">Login</h3>
                <form action="" className="d-flex flex-column gap-20">
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
                    <Link to={'/forgot-password'} className="mb-3">
                      Forgot Password?
                    </Link>
                    <div className="d-flex justify-content-center gap-15 align-items-ceonter">
                      <button className="button border-0" type="submit">
                        Login
                      </button>
                      <Link to={'/signup'} className="button signup">
                        Signup
                      </Link>
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

export default Login;
