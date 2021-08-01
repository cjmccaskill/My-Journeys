import "./App.scss";
import { useState, useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import BlogPost from "./pages/BlogPost";
import Footer from "./components/Footer";

function App() {
  const [blogs, setBlogs] = useState([]);

  const getAllBlogs = async () => {
    const response = await fetch(
      "https://cdn.contentful.com/spaces/etc9m00jwpir/environments/master/entries?access_token=6g-qYJkhoa2WNr5MqK3ads4PLkPDy3DQltMuz6QuthU&content_types/blogPost&include=6"
    );
    const data = await response.json();
    console.log("api data call -", data);

    const postDataArr = data.items.map((item, index) => {
      return {
        title: item.fields.title,
        image:
          "https://images.ctfassets.net/etc9m00jwpir/7orLdboQQowIUs22KAW4U/9736a36f864b6f1171584b44bf63d285/matt-palmer-254999.jpg",
        description: item.fields.description,
        content: item.fields.body,
        author: item.fields.author,
        postDate: item.fields.publishDate,
      };
    });
    console.log("postDataArr = ", postDataArr);

    setBlogs(postDataArr);
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
