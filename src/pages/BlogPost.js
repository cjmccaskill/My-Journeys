import { useEffect, useState } from "react";
import Header from "../components/Header";

const BlogPost = (props) => {
  const [blog, setBlog] = useState({});

  const getSelectedBlog = async () => {
    const response = await fetch(
      `https://cdn.contentful.com/spaces/etc9m00jwpir/environments/master/entries/${props.match.params.id}/?access_token=6g-qYJkhoa2WNr5MqK3ads4PLkPDy3DQltMuz6QuthU`
    );
    const data = await response.json();
    setBlog(data);
  };

  useEffect(() => {
    getSelectedBlog();
  }, []);

  const loaded = () => {
    return (
      <>
        <div className="header-blog-post">
          <Header label="Back" />
        </div>
        <div className="post-container">
          <div className="post-title">{blog.fields.title}</div>
          <img
            className="post-img"
            src={blog.fields.image.sys.id}
            alt={blog.fields.title}
          />
          <div className="post-content">
            <div className="post-date">{blog.fields.publishDate}</div>

            <div className="post-body">{blog.fields.body}</div>
            <div className="post-author">{blog.fields.author}</div>
          </div>
        </div>
      </>
    );
  };

  const loading = () => {
    return <h1 className="post-container">Loading content...</h1>;
  };
  return blog.fields ? loaded() : loading();
};

export default BlogPost;
