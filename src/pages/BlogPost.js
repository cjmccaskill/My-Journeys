// import React, { useEffect, useState } from "react";

const BlogPost = (props) => {
  console.log("DATA FROM Blogfeed -", props);
  const loaded = () => {
    return (
      <div className="post-container">
        <div>{props.blog.title}</div>
        <div>{props.blog.postDate}</div>
        <img src={props.blog.image} alt={props.blog.title} />
        <div>{props.blog.content}</div>
        <div>{props.blog.author}</div>
      </div>
    );
  };

  const loading = () => {
    return <h1>Loading content...</h1>;
  };
  return props.blog ? loaded() : loading();
};

export default BlogPost;
