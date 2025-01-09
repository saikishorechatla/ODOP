import {configureStore} from '@reduxjs/toolkit';
import Registration from './auth/regSlice';
import SignIn from './auth/signInSlice';
const store = configureStore({
  reducer: {
    Registration: Registration,
    SingIn: SignIn,
  },
});

export default store;
