import { useState } from "react";
import BlogPostList from "../components/BlogPostList";
import BlogPost from "./BlogPost";
import Hero from "../components/Hero";

const Home = (props) => {
  console.log("props passed from app.js -", props);
  const [selected, setSelected] = useState(null);
  console.log(selected);
  const selectedPost = async (blog) => {
    const response = await fetch(blog);
    const data = await response.json();
    setSelected({
      title: data.fields.title,
      image: data.fields.image,
      slug: data.fields.slug,
      description: data.fields.description,
      content: data.fields.body,
      author: data.fields.author,
      postDate: data.fields.publishDate,
      tags: data.fields.tags,
    });
  };

  return (
    <div className="container">
      <Hero />
      <BlogPostList blogs={props.blogs} selectedPost={selectedPost} />
      <BlogPost selected={selected} />
    </div>
  );
};

export default Home;

// const selectedData = data.items.map((item, index) => {
//   return {
//     title: item.fields.title,
//     hero: item.fields.heroImage,
//     slug: item.fields.slug,
//     content: { type: "text", content: item.fields.body },
//     author: item.fields.author,
//     postDate: item.fields.publishDdata
//     tags: item.fields.tags,
//   };
// });
