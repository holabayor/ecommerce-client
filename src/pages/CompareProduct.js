import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import CompareProductCard from '../components/CompareProductCard';

const CompareProduct = () => {
  return (
    <>
      <Meta title={'Compare Products'} />
      <BreadCrumb title="Compare Products" />
      <div className="compare-product-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <CompareProductCard />
            <CompareProductCard />
            <CompareProductCard />
            <CompareProductCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default CompareProduct;
