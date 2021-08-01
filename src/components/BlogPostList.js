import React from "react";
import { Link } from "react-router-dom";

const BlogPostList = (props) => {
  return (
    <div className="wrapper">
      {props.blogs.map((blog, index) => {
        return (
          <div className="blog-list-container">
            <article className="blog-post" key={index}>
              <img src={blog.image} alt="" />
              <h3>{blog.title}</h3>
              <p>{blog.postDate}</p>
              <p>{blog.description}</p>
              <Link to="/blogPost">
                <button
                  className="read-more-btn"
                  onClick={() => props.selectedPost(blog)}
                >
                  Read More
                </button>
              </Link>
            </article>
          </div>
        );
      })}
    </div>
  );
};

export default BlogPostList;
