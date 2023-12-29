import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_HOST, defaultHeaders } from "@/configs/https";
import { revertAll } from "./actions";
import { toast } from "react-toastify";


const initialState = {
    staffData: null,
    updateText: null,
    newData: null,
    singleData: null,
    getSelfUser_data: null,
  };
  
  export const staff = createSlice({
    name: "staff",
    initialState,
    reducers: {
      postGet: (state, action) => {
        state.staffData = action.payload;
      },
      getSingleUser: (state, action) => {
        state.singleData = action.payload;
      },
      postUpdate: (state, action) => {
        state.updateText = action.payload;
      },
      postAdd: (state, action) => {
        state.newData = action.payload;
      },
      getSelfUserData: (state, action) => {
        state.getSelfUser_data = action.payload;
      },
    },
  });
  
  export const getAllstaffData = (token) => async (dispatch) => {
    const localHeader = {
      // ...defaultHeaders,
      Authorization: `Token ${token}`,
    };
    try {
      const res = await axios({
        method: "GET",
        url: API_HOST + `/users/api/v2/getallstaff/`,
        headers: localHeader,
      });
      dispatch(postGet(res.data));
    } catch (error) {
      console.log("In get staffList error", error);
    }
  };
  
  export const getstaffData = (token, id) => async (dispatch) => {
    const localHeader = {
      // ...defaultHeaders,
      Authorization: `Token ${token}`,
    };
    try {
      const res = await axios({
        method: "GET",
        url: API_HOST + `/users/api/v2/getallstaff/${id}/`,
        headers: localHeader,
      });
      dispatch(getSingleUser(res.data));
    } catch (error) {
      console.log("In get staffList error", error);
    }
  };
  
  export const updatestaffData = (token, id, staffData) => async (dispatch) => {
    const localHeader = {
      Authorization: `Token ${token}`,
    };
    const bodyData = staffData;
    try {
      const res = await axios({
        method: "PATCH",
        url: API_HOST + `/users/api/v1/staff/${id}/`,
        headers: localHeader,
        data: bodyData,
      });
      dispatch(postUpdate(res.data));
    } catch (error) {
      console.log("In staffList error", error);
    }
  };
  
  export const addstaffData = (token, staffData) => async (dispatch) => {
    const localHeader = {
      Authorization: `Token ${token}`,
    };
    const bodyData = staffData;
    try {
      const res = await axios({
        method: "POST",
        url: API_HOST + `/users/api/v1/staff/`,
        headers: localHeader,
        data: bodyData,
      });
      dispatch(postAdd(res.data));
    } catch (error) {
      console.log("In staffList error", error);
    }
  };
  
  export const removestaffData = (token, id) => async (dispatch) => {
    const localHeader = {
      Authorization: `Token ${token}`,
    };
  
    try {
      const res = await axios({
        method: "DELETE",
        url: API_HOST + `/users/api/v1/staff/${id}/`,
        headers: localHeader,
        // data: bodyData,
      });
      // dispatch(postUpdate(res.data));
    } catch (error) {
      console.log("In staffList error", error);
    }
  };
  
  export const getSelfData = (token) => async (dispatch) => {
    const localHeader = {
      // ...defaultHeaders,
      Authorization: `Token ${token}`,
    };
    try {
      const res = await axios({
        method: "GET",
        url: API_HOST + `/users/api/v2/getcurrentuser/`,
        headers: localHeader,
      });
      dispatch(getSelfUserData(res.data));
    } catch (error) {
      console.log("In get user data error", error);
    }
  };
  
  export const { postGet, postUpdate, postAdd, getSingleUser, getSelfUserData } =
    staff.actions;

  export const staffdataSelector = (state) => state.staff.staffData
  export default staff.reducer;
  