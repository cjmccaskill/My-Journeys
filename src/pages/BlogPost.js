import React from "react";

const BlogPost = (props) => {
  return (
    <article className="blog-post">
      <div className="blog-img">
        <img src={props.image} alt="" />
      </div>
      <div className="blog-content">
        <div className="blog-date">{props.postDate}</div>
        <h3 className="blog-title">{props.title}</h3>
        <p>{props.description}</p>
        <div className="read-more">Read More</div>
      </div>
    </article>
  );
};

export default BlogPost;
