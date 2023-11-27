import { combineReducers } from "@reduxjs/toolkit";
import layout from "./layoutReducer";
import auth from "@/components/partials/auth/store";
import Attendance from "./Attendance";
import User from "./Profile";
import designation from "./designation";
import department from "./department";
import employment from "./employment";
import userrole from "./userrole";
import branch from "./branch";
// import mapdata from "./mapdata";

const rootReducer = combineReducers({
  layout,
  auth,
  Attendance,
  User,
  designation,
  department,
  employment,
  userrole,
  branch,
  // companyprofile,
  // mapdata,
});
export default rootReducer;
