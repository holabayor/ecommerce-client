import React from 'react';
import { Link } from 'react-router-dom';

const BreadCrumb = ({ title }) => {
  return (
    <>
      <div className="breadcrumb py-4 bg-white">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0">
                <Link to="/" className="text-dark">
                  Home &nbsp;
                </Link>
                / {title}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BreadCrumb;
