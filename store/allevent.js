import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_HOST, defaultHeaders } from "@/configs/https";
import { revertAll } from "./actions";
import { toast } from "react-toastify";

const initialState = {
  assigneventData: null,
  alleventsData: null,
  addAlleventlist: null,
  updateAlleventlist: null,
  deleteAlleventlist: null,
};

export const allevent = createSlice({
  name: "allevent",
  initialState,
  reducers: {
    postAssign: (state, action) => {
      state.assigneventData = action.payload;
    },
    postSuccess: (state, action) => {
      state.alleventsData = action.payload;
      state.addAlleventlist = null;
      state.updateAlleventlist = null;
      state.deleteAlleventlist = null;
    },
    postAllEventData: (state, action) => {
      state.addAlleventlist = action.payload;
    },
    postUpdate: (state, action) => {
      state.updateAlleventlist = action.payload;
    },
    postdelete: (state, action) => {
      state.deleteAlleventlist = action.payload;
    },
  },
});

// get assign event data
export const getAssignEventsData = (token) => async (dispatch) => {
  const localHeader = {
    Authorization: `Token ${token}`,
  };
  try {
    const res = await axios({
      method: "GET",
      url: API_HOST + `/event/api/v2/eventassign/`,
      headers: localHeader,
    });
    dispatch(postAssign(res?.data));
  } catch (error) {
    console.log("In get assign eventsList error", error);
  }
};

// get all event data
export const getallEventsData = (token) => async (dispatch) => {
  const localHeader = {
    Authorization: `Token ${token}`,
  };
  try {
    const res = await axios({
      method: "GET",
      url: API_HOST + `/event/api/v2/eventallaccess/`,
      headers: localHeader,
    });
    dispatch(postSuccess(res?.data));
  } catch (error) {
    console.log("In get eventallaccess error", error);
  }
};

// update all allevent
export const updateAllEventsData =
  (token, id, userData) => async (dispatch) => {
    const localHeader = {
      Authorization: `Token ${token}`,
      "Content-Type": "multipart/form-data",
    };
    const bodyData = userData;
    try {
      const res = await axios({
        method: "PATCH",
        url: API_HOST + `/event/api/v2/eventallaccess/${id}/`,
        headers: localHeader,
        data: bodyData,
      });
      dispatch(postUpdate(res.data));
    } catch (error) {
      console.log("In all events", error);
    }
  };

// add all event data
export const addAllEventDataAction =
  (token, events_Data) => async (dispatch) => {
    const localHeader = {
      Authorization: `Token ${token}`,
      "Content-Type": "multipart/form-data",
    };
    const bodyData = events_Data;
    try {
      const res = await axios({
        method: "POST",
        url: API_HOST + `/event/api/v2/eventallaccess/`,
        headers: localHeader,
        data: bodyData,
      });
      dispatch(postAllEventData(res.data));
    } catch (error) {
      console.log("In eventallaccess error", error);
    }
  };

// delete all allevent
export const deleteAlleventsData = (token, id) => async (dispatch) => {
  const localHeader = {
    Authorization: `Token ${token}`,
  };
  try {
    const res = await axios({
      method: "DELETE",
      url: API_HOST + `/event/api/v2/eventallaccess/${id}/`,
      headers: localHeader,
    });
    dispatch(postdelete(res.status));
  } catch (error) {
    console.log("In eventallaccess error", error);
  }
};

export const {
  postAssign,
  postSuccess,
  postAllEventData,
  postUpdate,
  postdelete,
} = allevent.actions;



export const eventAssignSelector = (state) => state.allevent.assigneventData;

export default allevent.reducer;
