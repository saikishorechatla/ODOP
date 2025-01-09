import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import config from '../../config';

// Async Thunk for Sign In API
export const signInUser = createAsyncThunk(
  'auth/signInUser',
  async (credentials, {rejectWithValue}) => {
    try {
      const response = await axios.post(`${config.utl}/login`, credentials);
      return response.data; // Data from the API
    } catch (error) {
      return rejectWithValue(
        error.response?.data || 'Login failed. Please try again.',
      );
    }
  },
);

const authSlice = createSlice({
  name: 'SignIn',
  initialState: {
    user: null, // Stores logged-in user details
    isLoading: false,
    error: null,
  },
  reducers: {
    logoutUser: state => {
      state.user = null; // Clear user state on logout
    },
  },
  extraReducers: builder => {
    builder
      .addCase(signInUser.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(signInUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload; // Save user data from API response
      })
      .addCase(signInUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const {logoutUser} = authSlice.actions;

export default authSlice.reducer;
