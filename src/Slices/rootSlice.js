import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
  numOfPosts: 6,
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
  },
});

export const { getPosts, changeLike, changeSearchValue } = rootSlice.actions;
export default rootSlice.reducer;
