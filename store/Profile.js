import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_HOST, defaultHeaders } from "@/configs/https";
import { revertAll } from "./actions";

const initialState = {
  userDetails: null,
  profile: null,
};

export const User = createSlice({
  name: "User",
  initialState,
  reducers: {
    user: (state, action) => {
      state.userDetails = action.payload;
    },
    profile: (state, action) => {
      state.profile = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(revertAll, () => initialState);
  },
});

export const getUserDetailsAction = (token) => async (dispatch) => {
  const localHeader = {
    ...defaultHeaders,
    Authorization: `Token ${token}`,
  };
  try {
    const res = await axios({
      method: "GET",
      url: API_HOST + `/usersettings/api/v1/getcurrentusersettings/`,
      headers: localHeader,
    });
    // console.log("In getUserDetailsAction ", res.data);
    dispatch(user(res.data?.data));
  } catch (error) {
    console.log("In  getUserDetailsAction error", error);
  } finally {
  }
};

export const getUserProfileAction = (token) => async (dispatch) => {
  const localHeader = {
    ...defaultHeaders,
    Authorization: `Token ${token}`,
  };
  try {
    const res = await axios({
      method: "GET",
      url: API_HOST + `/users/api/v1/getcurrentuser/`,
      headers: localHeader,
    });
    // console.log('In getUserProfileAction ', res.data);
    dispatch(profile(res?.data[0]));
  } catch (error) {
    console.log("In  getUserProfileAction error", error.response.data);
  }
};

export const getUserDetailsSelector = (state) => state.User.userDetails;
export const getUserProfileSelector = (state) => state.User.profile;

export const { user, profile } = User.actions;
export default User.reducer;
