import React from "react";
import Post from "../Post/Post";
import { morePosts } from "../../Slices/rootSlice";
import { useDispatch, useSelector } from "react-redux";

const PostList = () => {
  const posts = useSelector((state) => state.posts);
  const search = useSelector((state) => state.searchValue);
  const numOfPosts = useSelector((state) => state.numOfPosts);

  const dispatch = useDispatch();

  return (
    <div>
      {posts
        .filter((photo) => {
          return `${photo.rover.name} rover - ${photo.camera.full_name}`
            .toLowerCase()
            .includes(search);
        })
        .map((photo, index) => {
          if (index < numOfPosts) {
            return <Post key={photo.id} post={photo} />;
          } else {
            return null;
          }
        })}
      <div className="flex justify-center items-center">
        <button
          onClick={() => {
            dispatch(morePosts());
          }}
          type="button"
          className="btn btn-secondary"
        >
          See More
        </button>
      </div>
    </div>
  );
};

export default PostList;
