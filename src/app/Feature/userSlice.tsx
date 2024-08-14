import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk("user/fetchUsers", async () => {
  const response = await fetch("https://randomuser.me/api/?results=15");
  const data = await response.json();
  return data;
});

const userSlice = createSlice({
  name: "user",
  initialState: {
    users: [],
    status: "idle",
    error: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = "success";
        state.users = action.payload.results;
      })
      .addCase(fetchUsers.rejected, (state) => {
        state.status = "failed";
        state.error = "Failed to fetch users";
      });
  },
});

export default userSlice.reducer;
