import { API_HOST } from "@/configs/https";
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  departmentData: null,
  updateText: null,
  newData: null,
};

export const department = createSlice({
  name: "department",
  initialState,
  reducers: {
    postSuccess: (state, action) => {
      state.departmentData = action.payload;
    },
    postUpdate: (state, action) => {
      state.updateText = action.payload;
    },
    postAdd: (state, action) => {
      state.newData = action.payload;
    },
  },
});

export const getdepartmentData = (token) => async (dispatch) => {
  const localHeader = {
    // ...defaultHeaders,
    Authorization: `Token ${token}`,
  };
  try {
    // console.log("in axios function of department");
    const res = await axios({
      method: "GET",
      url: API_HOST + `/users/api/v1/department/`,
      headers: localHeader,
    });
    // console.log("In get departmentList ", res.data);
    dispatch(postSuccess(res.data));
  } catch (error) {
    console.log("In departmentList error", error);
  }
};

export const updatedepartmentData =
  (token, id, departmentData) => async (dispatch) => {
    const localHeader = {
      Authorization: `Token ${token}`,
    };
    const bodyData = {
      department: departmentData,
    };
    try {
      //   console.log("in update function of department");
      const res = await axios({
        method: "PATCH",
        url: API_HOST + `/users/api/v1/department/${id}/`,
        headers: localHeader,
        data: bodyData,
      });
      //   console.log("In update departmentList ", res);
      dispatch(postUpdate(res.data));
    } catch (error) {
      console.log("In departmentList error", error);
    }
  };

export const addDepartmentData =
  (token, departmentData) => async (dispatch) => {
    const localHeader = {
      Authorization: `Token ${token}`,
    };
    const bodyData = {
      department: departmentData,
    };
    try {
      console.log("in add function of department");
      const res = await axios({
        method: "POST",
        url: API_HOST + `/users/api/v1/department/`,
        headers: localHeader,
        data: bodyData,
      });
      console.log("In add departmentList ", res);
      dispatch(postAdd(res.data));
    } catch (error) {
      console.log("In departmentList error", error);
    }
  };

export const removeDepartmentData = (token, id) => async (dispatch) => {
  const localHeader = {
    Authorization: `Token ${token}`,
  };
  // const bodyData = {
  //   designation: designationData,
  // };
  try {
    console.log("in remove function of department");
    const res = await axios({
      method: "DELETE",
      url: API_HOST + `/users/api/v1/department/${id}/`,
      headers: localHeader,
      // data: bodyData,
    });
    console.log("In remove departmentList ", res);
    // dispatch(postUpdate(res.data));
  } catch (error) {
    console.log("In departmentList error", error);
  }
};

export const { postSuccess, postUpdate, postAdd } = department.actions;
export default department.reducer;
