import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_HOST, defaultHeaders } from "@/configs/https";
import { revertAll } from "./actions";
import { toast } from "react-toastify";


const initialState = {
  assignholidayData: null,
  allholidaysData: null,
  addallholidaylist: null,
  updateallholidaylist: null,
  deleteallholidaylist: null,
};

export const allholiday = createSlice({
  name: "allholiday",
  initialState,
  reducers: {
    postAssign: (state, action) => {
      state.assignholidayData = action.payload;
    },
    postSuccess: (state, action) => {
      state.allholidaysData = action.payload;
      state.addallholidaylist = null;
      state.updateallholidaylist = null;
      state.deleteallholidaylist = null;
    },
    postallholidayData: (state, action) => {
      state.addallholidaylist = action.payload;
    },
    postUpdate: (state, action) => {
      state.updateallholidaylist = action.payload;
    },
    postdelete: (state, action) => {
      state.deleteallholidaylist = action.payload;
    },
  },
});

// get assign event data
export const getAssignHolidayData = (token,setLoader) => async (dispatch) => {
  const localHeader = {
    Authorization: `Token ${token}`,
  };
  try {
    setLoader(true)
    const res = await axios({
      method: "GET",
      url: API_HOST + `/holiday/api/v2/holidayassign/`,
      headers: localHeader,
    });
    dispatch(postAssign(res.data));
    setLoader(false)
  } catch (error) {
    console.log("In Assign holiday error", error);
  }
};

//get all holiday data
export const getAllholidayData = (token) => async (dispatch) => {
  const localHeader = {
    Authorization: `Token ${token}`,
  };
  try {
    const res = await axios({
      method: "GET",
      url: API_HOST + `/holiday/api/v2/holidayallaccess/`,
      headers: localHeader,
    });
    dispatch(postSuccess(res.data));
  } catch (error) {
    console.log("In get all holiday error", error);
  }
};

// update all allholiday
export const updateAllHolidaysData =
  (token, id, userData) => async (dispatch) => {
    const localHeader = {
      Authorization: `Token ${token}`,
      "Content-Type": "multipart/form-data",
    };
    const bodyData = userData;
    try {
      const res = await axios({
        method: "PATCH",
        url: API_HOST + `/holiday/api/v2/holidayallaccess/${id}/`,
        headers: localHeader,
        data: bodyData,
      });
      dispatch(postUpdate(res.data));
    } catch (error) {
      console.log("In update allholiday", error);
    }
  };

// add all event data
export const addAllHolidayDataAction =
  (token, holly_data) => async (dispatch) => {
    const localHeader = {
      Authorization: `Token ${token}`,
      "Content-Type": "multipart/form-data",
    };
    const bodyData = holly_data;
    try {
      const res = await axios({
        method: "POST",
        url: API_HOST + `/holiday/api/v2/holidayallaccess/`,
        headers: localHeader,
        data: bodyData,
      });
      dispatch(postallholidayData(res.data));
    } catch (error) {
      console.log("In add allholiday error", error);
    }
  };

// delete all allholiday
export const deleteAllHolidaysData = (token, id) => async (dispatch) => {
  const localHeader = {
    Authorization: `Token ${token}`,
  };
  try {
    const res = await axios({
      method: "DELETE",
      url: API_HOST + `/holiday/api/v2/holidayallaccess/${id}/`,
      headers: localHeader,
    });
    dispatch(postdelete(res.status));
  } catch (error) {
    console.log("In delete all holiday error", error);
  }
};

export const {
  postAssign,
  postSuccess,
  postallholidayData,
  postUpdate,
  postdelete,
} = allholiday.actions;

export const assingholidaySelector = (state) => state.allholiday.assignholidayData
export default allholiday.reducer;
