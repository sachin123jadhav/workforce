
import { API_HOST } from "@/configs/https";
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  designationData: null,
  newData: null,
  text: null,
};

export const designation = createSlice({
  name: "designation",
  initialState,
  reducers: {
    postSuccess: (state, action) => {
      state.designationData = action.payload;
    },
    postUpdate: (state, action) => {
      state.text = action.payload;
    },
    postAdd: (state, action) => {
      state.newData = action.payload;
    },
  },
});

export const getDesignationData = (token) => async (dispatch) => {
  const localHeader = {
    // ...defaultHeaders,
    Authorization: `Token ${token}`,
  };
  try {
    // console.log("in axios function of designation");
    const res = await axios({
      method: "GET",
      url: API_HOST + `/users/api/v1/designation/`,
      headers: localHeader,
    });
    console.log("In get designationList ", res.data);
    dispatch(postSuccess(res.data));
  } catch (error) {
    console.log("In designationList error", error);
  }
};

export const updateDesignationData =
  (token, id, designationData) => async (dispatch) => {
    const localHeader = {
      Authorization: `Token ${token}`,
    };
    const bodyData = {
      designation: designationData,
    };
    try {
      console.log("in update function of designation");
      const res = await axios({
        method: "PATCH",
        url: API_HOST + `/users/api/v1/designation/${id}/`,
        headers: localHeader,
        data: bodyData,
      });
      console.log("In update designationList ", res);
      dispatch(postUpdate(res.data));
    } catch (error) {
      console.log("In designationList error", error);
    }
  };

export const addDesignationData =
  (token, designationData) => async (dispatch) => {
    const localHeader = {
      Authorization: `Token ${token}`,
    };
    const bodyData = {
      designation: designationData,
    };
    try {
      console.log("in add function of designation");
      const res = await axios({
        method: "POST",
        url: API_HOST + `/users/api/v1/designation/`,
        headers: localHeader,
        data: bodyData,
      });
      console.log("In add designationList ", res);
      dispatch(postAdd(res.data));
    } catch (error) {
      console.log("In designationList error", error);
    }
  };

export const removeDesignationData = (token, id) => async (dispatch) => {
  const localHeader = {
    Authorization: `Token ${token}`,
  };
  // const bodyData = {
  //   designation: designationData,
  // };
  try {
    console.log("in remove function of designation");
    const res = await axios({
      method: "DELETE",
      url: API_HOST + `/users/api/v1/designation/${id}/`,
      headers: localHeader,
      // data: bodyData,
    });
    console.log("In remove designationList ", res);
    // dispatch(postUpdate(res.data));
  } catch (error) {
    console.log("In designationList error", error);
  }
};

export const { postSuccess, postUpdate, postAdd } = designation.actions;
export default designation.reducer;
