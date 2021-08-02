import BlogFeed from "../components/BlogFeed";
import Hero from "../components/Hero";

const Home = (props) => {
  console.log("props passed from app.js -", props);

  return (
    <div className="container">
      <Hero />
      <BlogFeed blogs={props.blogs} />
    </div>
  );
};

export default Home;
