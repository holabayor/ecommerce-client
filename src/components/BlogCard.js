import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = () => {
  return (
    <>
      <div className="blog-card">
        <div className="card-image">
          <img
            src="images/blog-1.jpg"
            className="img-fluid w-100"
            alt="blog-1"
          />
        </div>
        <div className="blog-content">
          <p className="date">1 Jan, 2023</p>
          <h5 className="title">A beautiful blog post</h5>
          <p className="desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at eros
            vestibulum, tristique risus non.
          </p>
          <Link to="/blog/:id" className="button">
            Read more
          </Link>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
