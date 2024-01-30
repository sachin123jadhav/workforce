import { combineReducers } from "@reduxjs/toolkit";
import layout from "./layoutReducer";
import auth from "@/components/partials/auth/store";
import Attendance from "./Attendance";
import User from "./Profile";
import designation from "./designation";
import department from "./department";
import employment from "./employment";
import companyprofile from "./companyprofile";
import mapdata from "./mapdata";
import userList from "./userlist";
import staff from "./staff";
import allevent from "./allevent";
import userrole from "./userrole";
import allholiday from "./allholiday";
import allquicklinks from "./allquicklinks";
import outstation from "./outstation";


const rootReducer = combineReducers({
  layout,
  auth,
  Attendance,
  User,
  designation,
  department,
  employment,
  companyprofile,
  mapdata,
  userList,
  staff,
  allevent,
  userrole,
  allholiday,
  allquicklinks,
  outstation,
});
export default rootReducer;
