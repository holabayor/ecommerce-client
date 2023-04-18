import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';

const ShoppingPolicy = () => {
  return (
    <>
      <Meta title={'Shopping Policy'} />
      <BreadCrumb title="Shopping Policy" />
      <div className="shopping-policy-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShoppingPolicy;
