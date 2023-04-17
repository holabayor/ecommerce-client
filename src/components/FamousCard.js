import React from 'react';

const FamousCard = () => {
  return (
    <>
      <div className="col-3">
        <div className="famous-card position-relative">
          <img src="images/famous-01.jpg" className="img-fluid" alt="famous" />
          <div className="famous-content position-absolute">
            <h5>Big Screen</h5>
            <h6>Smart Watch Series</h6>
          </div>
          <p className=" position-absolute other-info">From $199.00</p>
        </div>
      </div>
      <div className="col-3">
        <div className="famous-card position-relative">
          <img src="images/famous-02.jpg" className="img-fluid" alt="famous" />
          <div className="famous-content position-absolute">
            <h5 className="text-dark">Studio Display</h5>
            <h6 className="text-dark">600 nits of brightness</h6>
          </div>
          <p className=" position-absolute text-dark other-info">
            27-inch 5K Retina display
          </p>
        </div>
      </div>
      <div className="col-3">
        <div className="famous-card position-relative">
          <img src="images/famous-03.jpg" className="img-fluid" alt="famous" />
          <div className="famous-content position-absolute">
            <h5 className="text-dark">Smartphones</h5>
            <h6 className="text-dark">Smartphone 13 Pro.</h6>
          </div>
          <p className=" position-absolute text-dark other-info">
            From $199.00
          </p>
        </div>
      </div>
      <div className="col-3">
        <div className="famous-card position-relative">
          <img src="images/famous-04.png" className="img-fluid" alt="famous" />
          <div className="famous-content position-absolute">
            <h5 className="text-dark">Home Speakers</h5>
            <h6 className="text-dark">Room-filling sound.</h6>
          </div>
          <p className=" position-absolute text-dark other-info">
            From $399.00
          </p>
        </div>
      </div>
    </>
  );
};

export default FamousCard;
