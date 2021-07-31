import "./App.scss";
import { useState, useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import BlogPost from "./pages/BlogPost";
import Footer from "./components/Footer";

function App() {
  const [blogs, setBlogs] = useState();

  const getAllBlogs = async () => {
    const response = await fetch(
      "https://cdn.contentful.com/spaces/etc9m00jwpir/environments/master/entries?access_token=6g-qYJkhoa2WNr5MqK3ads4PLkPDy3DQltMuz6QuthU&content_types/blogPost"
    );
    const data = await response.json();
    setBlogs(data.results);
  };

  useEffect(() => {
    getAllBlogs();
  }, []);

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route path="/home">
          <Home blogs={blogs} />
        </Route>
        <Route path="/blogPost">
          <BlogPost />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
