import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
  numOfPosts: 10,
  searchValue: "",
};

const rootSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    getPosts: (state, action) => {
      state.posts = action.payload;
    },
    changeLike: (state, action) => {
      const photo = state.posts.find((element) => {
        return element.id === action.payload;
      });
      photo.liked = !photo.liked;
    },
    changeSearchValue: (state, action) => {
      state.searchValue = action.payload;
    },
    morePosts: (state) => {
      state.numOfPosts += 10;
    },
  },
});

export const { getPosts, changeLike, changeSearchValue, morePosts } =
  rootSlice.actions;
export default rootSlice.reducer;
