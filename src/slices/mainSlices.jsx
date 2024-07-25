import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  cloud: {},
  domain: {},
  ip: {},
  assets: [],
  typeFilter: "",
  loading: false,
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
    RsetLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { RsetCloud, RsetDomain, RsetIp, RsetAssets, RsetTypeFilter, RsetLoading } =
  mainSlices.actions;

export const selectAssets = (state) => state.main.assets;
export const selectCloud = (state) => state.main.cloud;
export const selectIp = (state) => state.main.ip;
export const selectDomain = (state) => state.main.domain;
export const selectTypeFilter = (state) => state.main.typeFilter;
export const selectLoading = (state) => state.main.loading;

export default mainSlices.reducer;
