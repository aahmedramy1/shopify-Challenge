import React, { useEffect } from "react";
import Post from "../Post/Post";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

const PostList = () => {
  const posts = useSelector((state) => state.posts);
  return (
    <div>
      {posts.map(() => {
        return <Post />;
      })}
    </div>
  );
};

export default PostList;
