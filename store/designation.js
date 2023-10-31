import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  designationData: null,
};

export const designation = createSlice({
  name: "designation",
  initialState,
  reducers: {
    designationList: (state, action) => {
      state.designationData = action.payload;
    },
    // profile: (state, action) => {
    //   state.profile = action.payload;
    // },
  },
});

export const getDesignationData = (token) => async (dispatch) => {
  const localHeader = {
    ...defaultHeaders,
    Authorization: `Token ${token}`,
  };
  try {
    const res = await axios({
      method: "GET",
      url: API_HOST + `/attendance/api/v1/checksigninorout/`,
      headers: localHeader,
    });
    // console.log('In getAttendanceAction ', res.data);
    dispatch(designationList(res.data));
  } catch (error) {
    console.log("In  getAttendanceAction error", error.response.data);
  }
};

export const { designationList } = designation.actions;
export default designation.reducer;
