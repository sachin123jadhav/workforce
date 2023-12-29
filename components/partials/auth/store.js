import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import { toast } from "react-toastify";
import axios from "axios";
import { API_HOST, defaultHeaders } from "@/configs/https";
import Link from "next/link";
import { revertAll } from "@/store/actions";

const initialUsers = () => {
  if (typeof window !== "undefined") {
    const item = window?.localStorage.getItem("users");
    return item
      ? JSON.parse(item)
      : [
          {
            id: uuidv4(),
            name: "dashcode",
            email: "dashcode@gmail.com",
            password: "dashcode",
          },
        ];
  }
  return [
    {
      id: uuidv4(),
      name: "dashcode",
      email: "dashcode@gmail.com",
      password: "dashcode",
    },
  ];
};
// save users in local storage

const initialIsAuth = {
  isLoggedIn: false,
  token: null,
  id: null,
  userRole: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    users: initialUsers(),
    isAuth: initialIsAuth,
  },
  reducers: {
    handleRegister: (state, action) => {
      const { name, email, password } = action.payload;
      const user = state.users.find((user) => user.email === email);
      if (user) {
        toast.error("User already exists", {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else {
        state.users.push({
          id: uuidv4(),
          name,
          email,
          password,
        });
        if (typeof window !== "undefined") {
          window?.localStorage.setItem("users", JSON.stringify(state.users));
        }
        toast.success("User registered successfully", {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    },

    handleLogin: (state, action) => {
      state.isAuth.isLoggedIn = true;
      state.isAuth.token = action.payload.token;
      state.isAuth.id = action.payload.user_id;
      state.isAuth.userRole = action.payload.user_role;
      // save isAuth in local storage

      // window?.localStorage.setItem("isAuth", JSON.stringify(state.isAuth));

      toast.success("User logged in successfully", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    },
    handleLogout: (state, action) => {
      state.isAuth = initialIsAuth;
      // remove isAuth from local storage
      toast.success("User logged out successfully", {
        position: "top-right",
      });
    },
  },
});

export const LoginAction = (data) => async (dispatch) => {
  console.log("LoginAction", data);
  try {
    const res = await axios({
      method: "POST",
      url: API_HOST + "/users/api/v1/login_app/",
      data: data,
      headers: defaultHeaders,
    });
    // console.log("Login", res.data);
    dispatch(handleLogin(res.data));
  } catch (error) {
    console.log(error);
    toast.error("Invalid credentials", {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }
};

export const Logout = () => (dispatch) => {
  dispatch(handleLogout());
  dispatch(revertAll());
};

export const { handleRegister, handleLogin, handleLogout } = authSlice.actions;
export default authSlice.reducer;
