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

    const postDataArr = data.items.map((item, index) => {
      return {
        id: item.sys.id,
        title: item.fields.title,
        image: data.includes.Asset[index].fields.file.url,
        description: item.fields.description,
        content: item.fields.body,
        author: item.fields.author,
        postDate: item.fields.publishDate,
      };
    });
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
        <Route
          path="/blogPost/:blogId"
          render={(routerProps) => {
            return <BlogPost {...routerProps} />;
          }}
        ></Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;

