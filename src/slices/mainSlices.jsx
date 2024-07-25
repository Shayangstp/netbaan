import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  cloud: {},
  domain: {},
  ip: {},
  assets: [],
  typeFilter: "",
};

const mainSlices = createSlice({
  name: "main",
  initialState,
  reducers: {
    RsetCloud: (state, action) => {
      state.cloud = action.payload;
    },
    RsetDomain: (state, action) => {
      state.domain = action.payload;
    },
    RsetIp: (state, action) => {
      state.ip = action.payload;
    },
    RsetAssets: (state, action) => {
      state.assets = action.payload;
    },
    RsetTypeFilter: (state, action) => {
      state.typeFilter = action.payload;
    },
  },
});

export const { RsetCloud, RsetDomain, RsetIp, RsetAssets, RsetTypeFilter } = mainSlices.actions;

export const selectAssets = (state) => state.main.assets;
export const selectCloud = (state) => state.main.cloud;
export const selectIp = (state) => state.main.ip;
export const selectDomain = (state) => state.main.domain;
export const selectTypeFilter = (state) => state.main.typeFilter;

export default mainSlices.reducer;
