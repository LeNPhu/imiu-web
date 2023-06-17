import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import { toast } from "react-hot-toast";

const account = Cookies.get("account")
  ? JSON.parse(Cookies.get("account"))
  : null;
const authSlice = createSlice({
  name: "auth",
  initialState: {
    isVerified: account?.isVerify,
    role: account?.role,
    accessToken: account?.accessToken,
    accountId: account?.accountId,
    email: account?.email,
    subscription: Cookies.get("subscription")
      ? Cookies.get("subscription")
      : null,
    hasPassword: account?.hasPassword,
  },
  reducers: {
    logout: (state) => {
      Cookies.remove("account");
      Cookies.remove("emailTemp");
      Cookies.remove("subscription");
      state.isVerified = false;
      state.role = null;
      state.accessToken = null;
      state.accountId = null;
      state.email = null;
      state.subscription = null;
      state.hasPassword = null;
      toast.success("Đăng xuất thành công");
    },
    setAuth: (state, action) => {
      Cookies.set("account", JSON.stringify(action.payload.data), {
        expires: 1 / 48,
      });
      if (action.payload.data.subcription !== null) {
        Cookies.set("subscription", action.payload.data.subcription.name, {
          expires: 1 / 48,
        });
        state.subscription = action.payload.data.subcription.name;
      } else {
        Cookies.set("subscription", null, {
          expires: 1 / 48,
        });
      }

      state.isVerified = action.payload.data.isVerify;
      state.role = action.payload.data.role;
      state.accessToken = action.payload.data.accessToken;
      state.accountId = action.payload.data.accountId;
      state.email = action.payload.data.email;
      state.hasPassword = action.payload.data.hasPassword;
    },
    setSubscription: (state, action) => {
      Cookies.set("subscription", action.payload.subscription, {
        expires: 1 / 48,
      });
      state.subscription = action.payload.subscription;
    },
  },
});

export const { setAuth, logout, setSubscription } = authSlice.actions;
export const selectToken = (state) => state.auth.accessToken;
export default authSlice;
