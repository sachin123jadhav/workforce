import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_HOST, defaultHeaders } from "@/configs/https";
import { revertAll } from "./actions";
import { toast } from "react-toastify";

const initialState = {
  userRole: null,
  change_pass: null,
};

export const userrole = createSlice({
  name: "userrole",
  initialState,
  reducers: {
    postSuccess: (state, action) => {
      state.userRole = action.payload;
    },
    userOut: (state) => {
      state.userRole = null;
    },
    postChange: (state, action) => {
      state.change_pass = action.payload;
    },
    postEmptyChange: (state) => {
      state.change_pass = null;
    },
  },
});

const showUnSuccessAlert = () => {
  alert("Old password is incorrect!");
};

export const getuserroleData = (token) => async (dispatch) => {
  const localHeader = {
    Authorization: `Token ${token}`,
  };
  try {
    const res = await axios({
      method: "GET",
      url: API_HOST + `/users/api/v2/getcurrentuserrole/`,
      headers: localHeader,
    });
    dispatch(postSuccess(res.data));
  } catch (error) {
    console.log("In userroleList error", error);
  }
};

export const userLogOut = () => async (dispatch) => {
  dispatch(userOut());
};

// change password function
export const changePassFunction = (token, pass_Data) => async (dispatch) => {
  const localHeader = {
    Authorization: `Token ${token}`,
  };
  const bodyData = pass_Data;
  try {
    const res = await axios({
      method: "PATCH",
      url: API_HOST + `/users/api/v2/changepassword/`,
      headers: localHeader,
      data: bodyData,
    });
    dispatch(postChange(res.data));
  } catch (error) {
    showUnSuccessAlert();
    console.log("In Change password error", error);
  }
};

// change password function empty state
export const changePassEmpty = () => async (dispatch) => {
  dispatch(postEmptyChange());
};

export const { postSuccess, userOut, postChange, postEmptyChange } =
  userrole.actions;

export const userRolesSelector = (state) => state.userrole.userRole;
export default userrole.reducer;
