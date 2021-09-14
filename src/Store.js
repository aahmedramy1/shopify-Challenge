import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./Slices/rootSlice";

const store = configureStore({ reducer: rootReducer });

export default store;
