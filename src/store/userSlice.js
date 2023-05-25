import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import userAPI from "../config/api/userAPI";
import toast from "react-hot-toast";

const { loginAPI } = userAPI;
const userSlice = createSlice({
  name: "user",
  initialState: {
    users: "",
    userToken: "",
    refreshToken: "",
    loading: false,
  },
  reducers: {
    logout: (state) => {
      console.log("cookie remove");
      Cookies.remove("userToken");
      Cookies.remove("refreshToken");
      state.userToken = null;
    },
  },
  extraReducers: (builder) => {
    builder
        .addCase(login.pending, (state) => {
            state.loading = true;
        })
        .addCase(login.fulfilled, (state, action) => {
            console.log("action", action.payload)
            Cookies.set('account', JSON.stringify({email: action.payload.email, accountType: "premium", isLogin: true}), { expires: 1/48, path: '' })
            // Cookies.set('accountType', "premium", { expires: 1/48, path: '' })
            // Cookies.set('refreshToken', action.payload.data.data.tokenResponse.refreshToken, { expires: 1/24, path: '' })
            state.loading = false
        })
        .addCase(login.rejected, (state) => {
            // state.users = {}
            state.loading = false
        })
  },
});

export const login = createAsyncThunk(
  "user/login",
  async (data, { rejectWithValue }) => {
    try {
    //   const res = await loginAPI(data);
    //   console.log("res", res);
    //   if (res.status === 200) {
    //     toast.success(res.data.message);
    //     return res;
    //   } else {
    //     toast.error(res.data.message);
    //     return rejectWithValue(res);
    //   }
    toast.success("win!")
    return data;
    } catch (err) {
      toast.error("Login failed! Check your info again.");
      return rejectWithValue();
    }
  }
);

export const { logout } = userSlice.actions;
export default userSlice;