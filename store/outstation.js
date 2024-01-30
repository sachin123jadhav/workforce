import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_HOST, defaultHeaders } from "@/configs/https";
import { revertAll } from "./actions";
import { toast } from "react-toastify";

const initialState = {
  addOutStationDetail: null,
  getOutStationDetail: null,
  updateOutStationDetail: null,
  getOutStationAdminDetail: null,
  getOutStationAdminDynamicDetail: null,
};

export const outstation = createSlice({
  name: "outstation",
  initialState,
  reducers: {
    addOutstation: (state, action) => {
      state.addOutStationDetail = action.payload;
    },
    updateOutstation: (state, action) => {
      state.updateOutStationDetail = action.payload;
    },
    getOutstation: (state, action) => {
      state.getOutStationDetail = action.payload;
      state.addOutStationDetail = null;
    },
    getOutstationAdmin: (state, action) => {
      state.getOutStationAdminDetail = action.payload;
    },
    getOutstationAdminDynamic: (state, action) => {
      state.getOutStationAdminDynamicDetail = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(revertAll, () => initialState);
  },
});

export const addOutstationData = (token, details) => async (dispatch) => {
  const localHeader = {
    "Content-Type": "multipart/form-data",
    Authorization: `Token ${token}`,
  };
  try {
    const res = await axios({
      method: POST_API,
      url: API_HOST + `/outstation/api/v2/outstation/`,
      headers: localHeader,
      data: details,
    });
    if (res?.data) {
      dispatch(addOutstation(res));
    } else {
      console.error(error);
    }
  } catch (error) {
    console.error(error);
  }
};

export const getOutstationData = (token,setLoader) => async (dispatch) => {
    try {
      // Set loader state to true
      dispatch(setLoader(true));
  
      const localHeader = {
        ...defaultHeaders,
        Authorization: `Token ${token}`,
      };
  
      const res = await axios({
        method: 'GET', // Assuming GET_API is 'GET'
        url: `${API_HOST}/outstation/api/v2/outstationget/?self_data_status=True`,
        headers: localHeader,
      });
      console.log(res)
      // Check if response data exists
      if (res.data) {
        console.log(res.data)
        // Dispatch Redux action to update store
        dispatch(getOutstation(res.data));
      } else {
        console.error('No data received from the server',res.error);
      }
    } catch (error) {
      console.error('Error fetching outstation data:', error);
    } finally {
      // Set loader state back to false after API call completes
      dispatch(setLoader(false));
    }
  };
  
export const updateOutstationData =
  (token, id, details) => async (dispatch) => {
    const localHeader = {
      ...defaultHeaders,
      Authorization: `Token ${token}`,
    };
    try {
      const res = await axios({
        method: PATCH_API,
        url: API_HOST + `/outstation/api/v2/outstation/${id}/`,
        headers: localHeader,
        data: details,
      });
      if (res.data) {
        //show message ui here
        dispatch(updateOutstation(res.data));
      } else {
        console.error(error);
      }
    } catch (error) {
      console.error(error);
    }
  };

export const getOutstationAdminData =
  (token, getDetailAdmin) => async (dispatch) => {
    const localHeader = {
      ...defaultHeaders,
      Authorization: `Token ${token}`,
    };
    try {
      const res = await axios({
        method: GET_API,
        url: API_HOST + `/outstation/api/v2/outstationget/?all_data=True`,
        headers: localHeader,
      });
      if (res.data) {
        getDetailAdmin(res.data.data);
        dispatch(getOutstationAdmin(res.data));
      } else {
        console.error(error);
      }
    } catch (error) {
      console.error(error);
    }
  };

export const getOutstationDynamicAdminData =
  (token, setAdminDyanmic, endPoint, setIsLoader) => async (dispatch) => {
    setIsLoader(true);
    const localHeader = {
      ...defaultHeaders,
      Authorization: `Token ${token}`,
    };
    try {
      const res = await axios({
        method: GET_API,
        url: API_HOST + endPoint,
        headers: localHeader,
      });
      if (res.data) {
        setAdminDyanmic(res.data.data);
        dispatch(getOutstationAdminDynamic(res.data.data));
      } else {
        console.error(error);
      }
    } catch (error) {
      console.error(error);
    }
    setIsLoader(false);
  };

export const {
  addOutstation,
  updateOutstation,
  getOutstation,
  getOutstationAdmin,
  getOutstationAdminDynamic,
} = outstation.actions;

export const getoutstationSelector = (state) => state.outstation.getOutStationDetail;
export default outstation.reducer;
