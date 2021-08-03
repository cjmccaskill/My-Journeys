import { useEffect, useState } from "react";

const BlogPost = (props) => {
  console.log("DATA FROM Blogfeed -", props);
  const [blog, setBlog] = useState({});

  const getSelectedBlog = async () => {
    const response = await fetch(
      `https://cdn.contentful.com/spaces/etc9m00jwpir/environments/master/entries/${props.match.params.id}?access_token=6g-qYJkhoa2WNr5MqK3ads4PLkPDy3DQltMuz6QuthU`
    );
    const data = await response.json();
    setBlog(data);
  };

  useEffect(() => {
    getSelectedBlog();
  }, []);

  const loaded = () => {
    return (
      <div className="post-container">
        <div>
          <div>{blog.fields.title}</div>
          <div>{blog.fields.postDate}</div>
          <img src={blog.fields.image} alt={blog.fields.title} />
          <div>{blog.fields.content}</div>
          <div>{blog.fields.author}</div>
        </div>
      </div>
    );
  };

  const loading = () => {
    return <h1 className="post-container">Loading content...</h1>;
  };
  return blog.fields ? loaded() : loading();
};

export default BlogPost;
