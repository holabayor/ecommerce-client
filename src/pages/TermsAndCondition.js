import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';

const TermsAndCondition = () => {
  return (
    <>
      <Meta title={'Terms and Condition'} />
      <BreadCrumb title="Terms and Condition" />
      <div className="tc-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TermsAndCondition;
