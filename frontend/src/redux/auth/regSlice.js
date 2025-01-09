import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import config from '../../config';

// Async Thunk for Registration API
export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async (formData, {rejectWithValue}) => {
    try {
      const response = await axios.post(`${config.utl}/registration`, formData);
      return response.data; // The data returned from the API
    } catch (error) {
      // Return the error response
      return rejectWithValue(error.response?.data || 'Something went wrong');
    }
  },
);

const authSlice = createSlice({
  name: 'Registration',
  initialState: {
    response: null,
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(registerUser.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.response = action.payload; // Update the user state with response data
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload; // Set the error message
      });
  },
});

export default authSlice.reducer;
