import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lat: null,
  // long: null,
};

export const mapdata = createSlice({
  name: "mapdata",
  initialState,
  reducers: {
    postSuccess: (state, action) => {
      state.lat = action.payload;
      // state.long = action.payload.longitude;
    },
  },
});

export const setLocation = (data) => async (dispatch) => {
  // console.log("In setlocation function of store")
  if (data) {
    console.log("object", data);
    dispatch(postSuccess(data));
  }
};

export const { postSuccess } = mapdata.actions;
export default mapdata.reducer;
