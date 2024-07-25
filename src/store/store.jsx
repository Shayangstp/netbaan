import { configureStore } from "@reduxjs/toolkit";
import mainReducer from "../slices/mainSlices";

const store = configureStore({
  reducer: {
    main: mainReducer,
  },
});

export default store;
