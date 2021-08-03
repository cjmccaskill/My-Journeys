import React from "react";
import { Link } from "react-router-dom";

const BlogFeed = (props) => {
  return (
    <div className="blogs-container">
      {props.blogs.map((blog, index) => {
        return (
          <div className="blogs" key={index}>
            <article className="blog-post">
              <Link to={`./blogPost/${blog.id}`}>
                <div className="blog-img">
                  <img src={blog.image} alt="" />
                </div>
              </Link>
              <div className="blog-content">
                <div className="blog-date">{blog.postDate}</div>
                <Link to={`./blogPost/${blog.id}`}>
                  <h3 className="blog-title">{blog.title}</h3>
                </Link>
                <p>{blog.description}</p>
                <Link to={`./blogPost/${blog.id}`}>
                  <div className="read-more">Read More</div>
                </Link>
              </div>
            </article>
          </div>
        );
      })}
    </div>
  );
};

export default BlogFeed;
