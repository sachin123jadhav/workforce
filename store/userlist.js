import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_HOST, defaultHeaders } from "@/configs/https";
import { revertAll } from "./actions";
import { toast } from "react-toastify";

const initialState = {
  userData: null,
  updateText: null,
};

export const userList = createSlice({
  name: "userList",
  initialState,
  reducers: {
    postSuccess: (state, action) => {
      state.userData = action.payload;
    },
    postUpdate: (state, action) => {
      state.updateText = action.payload;
    },
  },
});

export const getuserData = (token) => async (dispatch) => {
  const localHeader = {
    // ...defaultHeaders,
    Authorization: `Token ${token}`,
  };
  try {
    // console.log("in axios function of userList");
    const res = await axios({
      method: "GET",
      url: API_HOST + `/users/api/v2/getalluserlist/`,
      headers: localHeader,
    });
    // console.log("In get userList sdsdsdsdsd", res.data);
    dispatch(postSuccess(res.data));
  } catch (error) {
    console.log("In userList error", error);
  }
};



export const { postSuccess, postUpdate } = userList.actions;
export const userListSelector = (state) => state.userList.userData
export default userList.reducer;
