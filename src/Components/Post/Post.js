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
    <div className="container posts-content lg:w-2/5 md:w-1/2 sm: w-3/4">
      <div className="row">
        <div className="col-lg-12">
          <div className="card mb-4">
            {/* <Link to={`/post/${post.id}`}> */}
            <div className="card-body">
              <div className="media mb-3">
                <div className="stats">
                  <div>
                    <div className="media-body">
                      {post.rover.name}
                      {" rover - "}
                      {post.camera.full_name}
                      <div className="text-muted small">
                        {post.rover.launch_date}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <img src={post.img_src} alt={post.rover.full_name} />
            </div>
            {/* </Link> */}
            <div className="card-footer flex justify-center items-center">
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
