import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import { toast } from "react-hot-toast";

const account = Cookies.get('account') ? JSON.parse(Cookies.get('account')) : null;
console.log("account", account);
const authSlice = createSlice({
  name: "auth",
  initialState: {
    accessToken: account?.accessToken,
    role: account?.role,
    subscription: account?.subcription,
    isVerified: account?.isVerify,
  },
  reducers: {
    logout: (state) => {
      Cookies.remove("account");
      Cookies.remove("emailTemp")
      state.accessToken = null;
      state.role = null;
      state.subscription = null;
      state.isVerified = false;
      toast.success("Đăng xuất thành công");
    },
    setAuth: (state, action) => {
      console.log("action", action);
      Cookies.set("account", JSON.stringify(action.payload.data), { expires: 1 / 48 });

      state.accessToken = action.payload.data.accessToken
      state.role = action.payload.data.role
      state.subscription = action.payload.data.subcription
      state.isVerified = action.payload.data.isVerify
    }
  },
  
});

export const { setAuth, logout } = authSlice.actions;
export default authSlice;
