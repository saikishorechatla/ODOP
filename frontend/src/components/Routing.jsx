import React from 'react';
import {Route, Routes} from 'react-router-dom';
import LoginPage from './Auth/Login';
import RegistrationPage from './Auth/Registration';
import HomePage from './home/Home';

export default function Routing() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/register' element={<RegistrationPage />} />
    </Routes>
  );
}
