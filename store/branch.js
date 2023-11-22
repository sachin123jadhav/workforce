import { API_HOST } from "@/configs/https";
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  branchData: null,
  updateText: null,
};

export const branch = createSlice({
  name: "branch",
  initialState,
  reducers: {
    postSuccess: (state, action) => {
      state.branchData = action.payload;
    },
    postUpdate: (state, action) => {
      state.updateText = action.payload;
    },
  },
});

export const getbranchData = (token) => async (dispatch) => {
  const localHeader = {
    // ...defaultHeaders,
    Authorization: `Token ${token}`,
  };
  try {
    // console.log("in axios function of branch");
    const res = await axios({
      method: "GET",
      url: API_HOST + `/company/api/v1/branch/`,
      headers: localHeader,
    });
    // console.log("In get branchList ", res.data);
    dispatch(postSuccess(res.data));
  } catch (error) {
    console.log("In branchList error", error);
  }
};

export const updatebranchData = (token, id, branchData) => async (dispatch) => {
  const localHeader = {
    Authorization: `Token ${token}`,
  };
  const bodyData = {
    branch_type: branchData,
  };
  try {
    // console.log("in update function of branch");
    const res = await axios({
      method: "PATCH",
      url: API_HOST + `/company/api/v1/branch/${id}/`,
      headers: localHeader,
      data: bodyData,
    });
    // console.log("In update branchList ", res);
    dispatch(postUpdate(res.data));
  } catch (error) {
    console.log("In branchList error", error);
  }
};

export const { postSuccess, postUpdate } = branch.actions;
export default branch.reducer;
