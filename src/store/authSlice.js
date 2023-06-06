import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import { toast } from "react-hot-toast";

const account = Cookies.get("account")
  ? JSON.parse(Cookies.get("account"))
  : null;
console.log("account", account);
const authSlice = createSlice({
  name: "auth",
  initialState: {
    isVerified: account?.isVerify,
    role: account?.role,
    accessToken: account?.accessToken,
    accountId: account?.id,
    name: account?.name,
    subscription: account?.subcription,
    hasPassword: account?.hasPassword,
  },
  reducers: {
    logout: (state) => {
      Cookies.remove("account");
      Cookies.remove("emailTemp");
      state.accessToken = null;
      state.role = null;
      state.subscription = null;
      state.isVerified = false;
      toast.success("Đăng xuất thành công");
    },
    setAuth: (state, action) => {
      console.log("action", action);
      Cookies.set("account", JSON.stringify(action.payload.data), {
        expires: 1 / 48,
      });

      state.isVerified = action.payload.data.isVerify;
      state.role = action.payload.data.role;
      state.accessToken = action.payload.data.accessToken;
      state.accountId = action.payload.data.accountId;
      state.name =
        action.payload.data.name != ""
          ? action.payload.data.name
          : action.payload.data.email;
      state.subscription = action.payload.data.subcription;
      state.hasPassword = action.payload.data.hasPassword;
    },
  },
});

export const { setAuth, logout } = authSlice.actions;
export default authSlice;
