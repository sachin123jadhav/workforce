import { combineReducers } from "@reduxjs/toolkit";
import layout from "./layoutReducer";
import auth from "@/components/partials/auth/store";
const rootReducer = combineReducers({
  layout,
  auth,
});
export default rootReducer;
