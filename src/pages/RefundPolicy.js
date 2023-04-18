import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';

const RefundPolicy = () => {
  return (
    <>
      <Meta title={'Refund Policy'} />
      <BreadCrumb title="Refund Policy" />
      <div className="refund-policy-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RefundPolicy;
