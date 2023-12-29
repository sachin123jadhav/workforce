import { API_HOST } from "@/configs/https";
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  companyprofileData: null,
  updateText: null,
};

export const companyprofile = createSlice({
  name: "companyprofile",
  initialState,
  reducers: {
    postSuccess: (state, action) => {
      state.companyprofileData = action.payload;
    },
    postUpdate: (state, action) => {
      state.updateText = action.payload;
    },
  },
});

export const getcompanyprofileData = (token) => async (dispatch) => {
  const localHeader = {
    // ...defaultHeaders,
    Authorization: `Token ${token}`,
  };
  try {
    // console.log("in axios function of companyprofile");
    const res = await axios({
      method: "GET",
      url: API_HOST + `/company/api/v1/branch/`,
      headers: localHeader,
    });
    // console.log("In get companyprofileList ", res.data);
    dispatch(postSuccess(res.data));
  } catch (error) {
    console.log("In companyprofileList error", error);
  }
};

export const updatecompanyprofileData =
  (token, id, companyprofileData) => async (dispatch) => {
    const localHeader = {
      Authorization: `Token ${token}`,
    };
    const bodyData = {
      companyprofile_type: companyprofileData,
    };
    try {
      // console.log("in update function of companyprofile");
      const res = await axios({
        method: "PATCH",
        url: API_HOST + `/company/api/v1/branch/${id}/`,
        headers: localHeader,
        data: bodyData,
      });
      // console.log("In update companyprofileList ", res);
      dispatch(postUpdate(res.data));
    } catch (error) {
      console.log("In companyprofileList error", error);
    }
  };

export const { postSuccess, postUpdate } = companyprofile.actions;
export default companyprofile.reducer;
