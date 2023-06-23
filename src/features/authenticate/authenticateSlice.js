import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { authenticateRepository } from "../../repository/authenticateRepository";
import { loadState } from "../../app/loadState";
import { saveState } from "../../app/saveState";

export const login = createAsyncThunk("authenticate/login", async (data) => {
  return await authenticateRepository.login(data);
});

export const logout = createAsyncThunk(
  "authenticate/logout",
  async (args, { getState }) => {
    const state = getState();
    return await authenticateRepository.logout(
      state?.authenticate?.userInfo?.tokens?.refresh?.token
    );
  }
);

const initialState = loadState("authenticate");

export const authenticateSlice = createSlice({
  name: "authenticate",
  initialState: initialState ?? {},
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      state.userInfo = action.payload.data;
      saveState(state, "authenticate");

    });
    builder.addCase(logout.fulfilled, (state, action) => {
      state.userInfo = {};
      saveState(state, "authenticate");
    });
  },
});

export default authenticateSlice.reducer;
