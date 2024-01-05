import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_HOST, defaultHeaders } from "@/configs/https";
import { revertAll } from "./actions";
import { toast } from "react-toastify";

const initialState = {
    assignquicklinksData: null,
    allquicklinkssData: null,
    addallquicklinkslist: null,
    updateallquicklinkslist: null,
    delit_data: null,
  };
  
  export const allquicklinks = createSlice({
    name: "allquicklinks",
    initialState,
    reducers: {
      postAssign: (state, action) => {
        state.assignquicklinksData = action.payload;
      },
      postSuccess: (state, action) => {
        state.allquicklinkssData = action.payload;
        state.addallquicklinkslist = null;
        state.updateallquicklinkslist = null;
        state.delit_data = null;
      },
      postallquicklinksData: (state, action) => {
        state.addallquicklinkslist = action.payload;
      },
      postUpdate: (state, action) => {
        state.updateallquicklinkslist = action.payload;
      },
      postdelete: (state, action) => {
        state.delit_data = action.payload;
      },
    },
  });
  
  // get assign quicklinks data
  export const getAssignquicklinksData = (token) => async (dispatch) => {
    const localHeader = {
      Authorization: `Token ${token}`,
    };
    try {
      const res = await axios({
        method: "GET",
        url: API_HOST + `/quicklink/api/v2/quicklinkassign/`,
        headers: localHeader,
      });
      dispatch(postAssign(res.data));
    } catch (error) {
      console.log("In Assign quicklinks error", error);
    }
  };
  
  //get all quicklinks data
  export const getAllquicklinksData = (token) => async (dispatch) => {
    const localHeader = {
      Authorization: `Token ${token}`,
    };
    try {
      const res = await axios({
        method: "GET",
        url: API_HOST + `/quicklink/api/v2/quicklinkallaccess/`,
        headers: localHeader,
      });
      dispatch(postSuccess(res.data));
    } catch (error) {
      console.log("In get all quicklinks error", error);
    }
  };
  
  // update all allquicklinks
  export const updateAllquicklinksData =
    (token, id, userData) => async (dispatch) => {
      const localHeader = {
        Authorization: `Token ${token}`,
        // "Content-Type": "multipart/form-data",
      };
      const bodyData = userData;
      try {
        const res = await axios({
          method: "PATCH",
          url: API_HOST + `/quicklink/api/v2/quicklinkallaccess/${id}/`,
          headers: localHeader,
          data: bodyData,
        });
        dispatch(postUpdate(res.data));
      } catch (error) {
        console.log("In update allquicklinks", error);
      }
    };
  
  // add all allquicklinks data
  export const addAllquicklinksData = (token, holly_data) => async (dispatch) => {
    const localHeader = {
      Authorization: `Token ${token}`,
      // "Content-Type": "multipart/form-data",
    };
    const bodyData = holly_data;
    try {
      const res = await axios({
        method: "POST",
        url: API_HOST + `/quicklink/api/v2/quicklinkallaccess/`,
        headers: localHeader,
        data: bodyData,
      });
      dispatch(postallquicklinksData(res.data));
    } catch (error) {
      console.log("In add allquicklinks error", error);
    }
  };
  
  // delete all allquicklinks
  export const deleteAllquicklinksData = (token, id) => async (dispatch) => {
    const localHeader = {
      Authorization: `Token ${token}`,
    };
    try {
      const res = await axios({
        method: "DELETE",
        url: API_HOST + `/quicklink/api/v2/quicklinkallaccess/${id}/`,
        headers: localHeader,
      });
      dispatch(postdelete(res.status));
    } catch (error) {
      console.log("In delete all quicklinks error", error);
    }
  };
  
  export const {
    postAssign,
    postSuccess,
    postallquicklinksData,
    postUpdate,
    postdelete,
  } = allquicklinks.actions;

  export const assinquickListSelector = (state) => state.allquicklinks.assignquicklinksData
  export default allquicklinks.reducer;
  