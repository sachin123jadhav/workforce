import { combineReducers } from "@reduxjs/toolkit";
import layout from "./layoutReducer";
import auth from "@/components/partials/auth/store";
import Attendance from "./Attendance";
import User from "./Profile";

const rootReducer = combineReducers({
  layout,
  auth,
  Attendance,
  User,
});
export default rootReducer;
