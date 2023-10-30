import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_HOST, defaultHeaders } from "@/configs/https";
import { revertAll } from "./actions";
import { toast } from "react-toastify";

const initialState = {
  attendance: null,
  reportWeek: null,
  reportMonth: null,
};

export const Attendance = createSlice({
  name: "Attendance",
  initialState,
  reducers: {
    attendance: (state, action) => {
      state.attendance = action.payload;
    },
    reportWeek: (state, action) => {
      state.reportWeek = action.payload;
    },
    reportMonth: (state, action) => {
      state.reportMonth = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(revertAll, () => initialState);
  },
});

export const attendanceAction =
  (data, token, setLoader) => async (dispatch) => {
    const localHeader = {
      "Content-Type": "multipart/form-data",
      Authorization: `Token ${token}`,
    };
    // console.log('In attendanceAction ', data);
    // console.log('In token ', token);
    try {
      const res = await axios({
        method: "POST",
        url: API_HOST + `/attendance/api/v1/markattendance/`,
        data: data,
        headers: localHeader,
      });
      // console.log('In attendanceAction ', res.data);
      setLoader(false);
      toast.success(res?.data?.message || "Attendance Marked", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      dispatch(getAttendanceAction(token));
    } catch (error) {
      console.log("In  attendanceAction error", error.response.data);

      toast.error(
        error?.response?.data?.message ||
          error?.response?.data?.error ||
          "Something went wrong",
        {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        }
      );
      setLoader(false);
    } finally {
      setLoader(false);
    }
  };

export const getAttendanceAction = (token) => async (dispatch) => {
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
    dispatch(attendance(res.data));
  } catch (error) {
    console.log("In  getAttendanceAction error", error.response.data);
  }
};

export const getAttendanceReportsWeeklyAction =
  (token, data) => async (dispatch) => {
    const localHeader = {
      ...defaultHeaders,
      Authorization: `Token ${token}`,
    };
    try {
      const res = await axios({
        method: "GET",
        url: API_HOST + `/attendance/api/v1/attendanceFilter/`,
        headers: localHeader,
        params: data,
      });
      // console.log('In getAttendanceReportsWeeklyAction ', res.data);
      dispatch(reportWeek(res.data.weekly_result));
    } catch (error) {
      console.log(
        "In  getAttendanceReportsWeeklyAction error",
        error.response.data
      );
    }
  };

export const getAttendanceReportsMonthlyAction =
  (token, data, setMonthyLoader) => async (dispatch) => {
    const localHeader = {
      ...defaultHeaders,
      Authorization: `Token ${token}`,
    };
    try {
      const res = await axios({
        method: "GET",
        url: API_HOST + `/attendance/api/v1/attendanceFilter/`,
        headers: localHeader,
        params: data,
      });
      // console.log('In getAttendanceReportsMonthlyAction ', res.data);
      dispatch(reportMonth(res.data.data));
      setMonthyLoader(false);
    } catch (error) {
      // console.log(
      //   'In  getAttendanceReportsMonthlyAction error',
      //   error.response.data,
      // );
      setMonthyLoader(false);
    } finally {
      setMonthyLoader(false);
    }
  };

export const attendanceTimeSelector = (state) => state.Attendance.attendance;
export const reportWeekSelector = (state) => state.Attendance.reportWeek;
export const reportMonthSelector = (state) => state.Attendance.reportMonth;

export const { attendance, reportWeek, reportMonth } = Attendance.actions;
export default Attendance.reducer;
