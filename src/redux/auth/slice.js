import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
  apiRegisterUser,
  apiLoginUser,
  apiRefreshUser,
  apiLogoutUser,
} from "./operations";
import { toast } from "react-hot-toast";

const INITIAL_STATE = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState: INITIAL_STATE,
  extraReducers: (builder) =>
    builder
      .addCase(apiRegisterUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        toast.success("You have registered✅");
      })

      .addCase(apiLoginUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        toast.success("You are logged in✅");
      })

      .addCase(apiRefreshUser.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(apiRefreshUser.fulfilled, (state, action) => {
        state.isRefreshing = false;
        state.user = action.payload;
        state.isLoggedIn = true;
      })
      .addCase(apiRefreshUser.rejected, (state) => {
        state.isRefreshing = false;
      })

      .addCase(apiLogoutUser.fulfilled, () => {
        return INITIAL_STATE;
      })

      .addMatcher(
        isAnyOf(
          apiRegisterUser.pending,
          apiLoginUser.pending,
          apiLogoutUser.pending
        )
      )
      .addMatcher(
        isAnyOf(
          apiRegisterUser.rejected,
          apiLoginUser.rejected,
          apiLogoutUser.rejected
        )
      ),
});

export const authReducer = authSlice.reducer;
