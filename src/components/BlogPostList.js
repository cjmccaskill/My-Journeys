import React from "react";

const BlogPostList = (props) => {
  return (
    <div className="wrapper">
      {props.blogs.map((blog, index) => {
        return (
          <div className="blog-list-container">
            <article className="blog-post">
              <img src={blog.image} alt="" />
              <h3>{blog.title}</h3>
              <p>{blog.description}</p>
              <button
                className="select-blog-post"
                onClick={() => props.selectedPost(blog)}
              >
                Read More
              </button>
            </article>
          </div>
        );
      })}
    </div>
  );
};

export default BlogPostList;
