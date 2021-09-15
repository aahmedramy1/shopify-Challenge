import React, { useEffect } from "react";
import Post from "../Post/Post";
import axios from "axios";
import { getPosts } from "../../Slices/rootSlice";
import { useDispatch, useSelector } from "react-redux";

const PostList = () => {
  const posts = useSelector((state) => state.posts);
  const search = useSelector((state) => state.searchValue);

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
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getData();
  }, [dispatch]);
  return (
    <div>
      {posts
        .filter((photo) => {
          return `${photo.rover.name} rover - ${photo.camera.full_name}`
            .toLowerCase()
            .includes(search);
        })
        .map((photo) => {
          return <Post key={photo.id} post={photo} />;
        })}
    </div>
  );
};

export default PostList;
