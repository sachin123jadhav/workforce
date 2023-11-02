import { API_HOST } from "@/configs/https";
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  employmentData: null,
  updateText: null,
};

export const employment = createSlice({
  name: "employment",
  initialState,
  reducers: {
    postSuccess: (state, action) => {
      state.employmentData = action.payload;
    },
    postUpdate: (state, action) => {
      state.updateText = action.payload;
    },
  },
});

export const getemploymentData = (token) => async (dispatch) => {
  const localHeader = {
    // ...defaultHeaders,
    Authorization: `Token ${token}`,
  };
  try {
    // console.log("in axios function of employment");
    const res = await axios({
      method: "GET",
      url: API_HOST + `/users/api/v1/employement/`,
      headers: localHeader,
    });
    // console.log("In get employmentList ", res.data);
    dispatch(postSuccess(res.data));
  } catch (error) {
    console.log("In employmentList error", error);
  }
};

export const updateemploymentData =
  (token, id, employmentData) => async (dispatch) => {
    const localHeader = {
      Authorization: `Token ${token}`,
    };
    const bodyData = {
      employment_type: employmentData,
    };
    try {
      // console.log("in update function of employment");
      const res = await axios({
        method: "PATCH",
        url: API_HOST + `/users/api/v1/employement/${id}/`,
        headers: localHeader,
        data: bodyData,
      });
      // console.log("In update employmentList ", res);
      dispatch(postUpdate(res.data));
    } catch (error) {
      console.log("In employmentList error", error);
    }
  };

export const { postSuccess, postUpdate } = employment.actions;
export default employment.reducer;
