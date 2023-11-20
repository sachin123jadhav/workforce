// import { combineReducers } from "@reduxjs/toolkit";
// import layout from "./layoutReducer";
// import auth from "@/components/partials/auth/store";
// import Attendance from "./Attendance";
// import User from "./Profile";

// const rootReducer = combineReducers({
//   layout,
//   auth,
//   Attendance,
//   User,
// });
// export default rootReducer;


import { combineReducers } from "@reduxjs/toolkit";
import layout from "./layoutReducer";
import auth from "@/components/partials/auth/store";
import Attendance from "./Attendance";
import User from "./Profile";
import designation from "./designation";
import department from "./department";
import employment from "./employment";
// import companyprofile from "./companyprofile";
// import mapdata from "./mapdata";

const rootReducer = combineReducers({
  layout,
  auth,
  Attendance,
  User,
  designation,
  department,
  employment,
  // companyprofile,
  // mapdata,
});
export default rootReducer;
