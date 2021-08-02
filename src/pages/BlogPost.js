import React from "react";

const BlogPost = (props) => {
  console.log("Props from the Router -", props);
  return <div>I am from the blog feed: {props.id}</div>;
};

export default BlogPost;
