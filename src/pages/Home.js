import { useState } from "react";
import BlogPostList from "../components/BlogPostList";
import BlogPost from "./BlogPost";
import Hero from "../components/Hero";

const Home = (props) => {
  const [selected, setSelected] = useState(null);
  const selectedPost = async (blog) => {
    const response = await fetch(blog.fields.title);
    const data = await response.json();
    setSelected({
      id: data.sys.id,
      title: data.fields.title,
      slug: data.fields.slug,
      heroImage: data.fields.heroImage.sys.id,
      desrciption: data.fields.desrciption,
      body: data.fields.body,
      author: data.fields.author,
      pubDate: data.fields.publishDate,
      tags: data.fields.tags,
    });
    console.log(selectedPost);
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
