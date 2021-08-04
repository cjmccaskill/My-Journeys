import BlogFeed from "../components/BlogFeed";
import Hero from "../components/Hero";
import Header from "../components/Header";

const Home = (props) => {
  return (
    <div className="container">
      <div className="header-home">
        <Header />
      </div>
      <Hero />
      <BlogFeed blogs={props.blogs} />
    </div>
  );
};

export default Home;
