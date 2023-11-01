import { combineReducers } from "@reduxjs/toolkit";
import layout from "./layoutReducer";
import auth from "@/components/partials/auth/store";
import Attendance from "./Attendance";
import User from "./Profile";
import designation from "./designation";

const rootReducer = combineReducers({
  layout,
  auth,
  Attendance,
  User,
  designation,
});
export default rootReducer;
