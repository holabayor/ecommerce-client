import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';

const Signup = () => {
  return (
    <>
      <Meta title={'Signup'} />
      <BreadCrumb title="Signup" />
      <div className="signup-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row"></div>
        </div>
      </div>
    </>
  );
};

export default Signup;
