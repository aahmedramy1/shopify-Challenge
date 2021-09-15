import React from "react";
import "./Post.css";
import { Link } from "react-router-dom";
import { changeLike } from "../../Slices/rootSlice";
import { useDispatch, useSelector } from "react-redux";

const Post = ({ post }) => {
  const dispatch = useDispatch();
  const liked = useSelector((state) => {
    return state.posts.find((currentPost) => {
      return currentPost.id === post.id;
    }).liked;
  });
  return (
    <div class="container posts-content custContainer">
      <div class="row">
        <div class="col-lg-12">
          <div class="card mb-4">
            {/* <Link to={`/post/${post.id}`}> */}
            <div class="card-body">
              <div class="media mb-3">
                <div className="stats">
                  <div>
                    <div class="media-body">
                      {post.rover.name}
                      {" rover - "}
                      {post.camera.full_name}
                      <div class="text-muted small">
                        {post.rover.launch_date}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <img src={post.img_src} alt={post.rover.full_name} />
            </div>
            {/* </Link> */}
            <div class="card-footer flex justify-center items-center">
              {liked ? (
                <button
                  onClick={() => {
                    dispatch(changeLike(post.id));
                  }}
                  className="btn btn-light"
                >
                  Unlike
                </button>
              ) : (
                <button
                  onClick={() => {
                    dispatch(changeLike(post.id));
                  }}
                  className="btn btn-light"
                >
                  Like
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
