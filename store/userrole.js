import { API_HOST } from "@/configs/https";
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  userRole: null,
};

export const userrole = createSlice({
  name: "userrole",
  initialState,
  reducers: {
    postSuccess: (state, action) => {
      state.userRole = action.payload;
    },
  },
});

export const getuserroleData = (token) => async (dispatch) => {
  const localHeader = {
    Authorization: `Token ${token}`,
  };
  try {
    // console.log("in axios function of userrole");
    const res = await axios({
      method: "GET",
      url: API_HOST + `/users/api/v1/userrole/`,
      headers: localHeader,
    });
    // console.log("In get userroleList ", res.data);
    dispatch(postSuccess(res.data));
  } catch (error) {
    console.log("In userroleList error", error);
  }
};

// export const updateuserroleData =
//   (token, id, userroleData) => async (dispatch) => {
//     const localHeader = {
//       Authorization: `Token ${token}`,
//     };
//     const bodyData = {
//       userrole_type: userroleData,
//     };
//     try {
//       // console.log("in update function of userrole");
//       const res = await axios({
//         method: "PATCH",
//         url: API_HOST + `/users/api/v1/employement/${id}/`,
//         headers: localHeader,
//         data: bodyData,
//       });
//       // console.log("In update userroleList ", res);
//       dispatch(postUpdate(res.data));
//     } catch (error) {
//       console.log("In userroleList error", error);
//     }
//   };

// export const adduserroleData = (token, userroleData) => async (dispatch) => {
//   const localHeader = {
//     Authorization: `Token ${token}`,
//   };
//   const bodyData = {
//     userrole_type: userroleData,
//   };
//   try {
//     // console.log("in update function of userrole");
//     const res = await axios({
//       method: "POST",
//       url: API_HOST + `/users/api/v1/employement/`,
//       headers: localHeader,
//       data: bodyData,
//     });
//     // console.log("In update userroleList ", res);
//     dispatch(postAdd(res.data));
//   } catch (error) {
//     console.log("In userroleList error", error);
//   }
// };

// export const removeEmployementData = (token, id) => async (dispatch) => {
//   const localHeader = {
//     Authorization: `Token ${token}`,
//   };
//   // const bodyData = {
//   //   designation: designationData,
//   // };
//   try {
//     console.log("in remove function of employement");
//     const res = await axios({
//       method: "DELETE",
//       url: API_HOST + `/users/api/v1/employement/${id}/`,
//       headers: localHeader,
//       // data: bodyData,
//     });
//     console.log("In remove employementList ", res);
//     // dispatch(postUpdate(res.data));
//   } catch (error) {
//     console.log("In employementList error", error);
//   }
// };

export const { postSuccess } = userrole.actions;
export default userrole.reducer;
