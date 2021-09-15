import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "./Slices/rootSlice";
import "./App.css";
import Header from "./Components/Header/Header";
import PostList from "./Components/PostList/PostList";
import PostDetail from "./Components/PostDetail/PostDetail";
import { Route, Switch } from "react-router-dom";
import Loading from "./Components/Loading/Loading";

function App() {
  const [done, setDone] = useState(false);
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    const getData = () => {
      axios
        .get(
          "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=ED28G4bCY3BRd6Rrog1Ce7YIcQAwXTWvwCwW3vQ2"
        )
        .then((res) => {
          let data = [];
          for (let i = 0; i < res.data.photos.length; i++) {
            data.push({ liked: false, ...res.data.photos[i] });
          }
          dispatch(getPosts(data));
          setDone(true);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getData();
  }, [dispatch]);

  return (
    <div className="App">
      <Header />
      {posts.length === 0 ? <Loading /> : null}
      <Switch>
        <Route exact path="/" component={PostList} />
        <Route
          path="/post/:id"
          render={({ match }) => {
            if (done) {
              return <PostDetail postId={match.params.id} />;
            }
          }}
        />
      </Switch>
    </div>
  );
}

export default App;
