import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {
  validateUsername,
  validateEmail,
  validatePhoneNumber,
  validatePassword,
  validateConfirmPassword,
} from './validation';
import ErrorMessage from '../Errors/ErrorMessage';
import registerUser from './../../redux/auth/regSlice'
import { useDispatch } from 'react-redux';

const Registration = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({
    username: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = e => {
    const {name, value} = e.target;
    setFormData({...formData, [name]: value});
    validateField(name, value);

  };

  const validateField = (name, value) => {
    let errorMessage = '';

    switch (name) {
      case 'username':
        errorMessage = validateUsername(value)
          ? ''
          : 'Username must be 3-20 characters and alphanumeric.';
        break;
      case 'email':
        errorMessage = validateEmail(value)
          ? ''
          : 'Please enter a valid email address.';
        break;
      case 'phoneNumber':
        errorMessage = validatePhoneNumber(value)
          ? ''
          : 'Phone number must be 10 digits.';
        break;
      case 'password':
        errorMessage = validatePassword(value)
          ? ''
          : 'Password must be at least 8 characters, including one letter and one number.';
        break;
      case 'confirmPassword':
        errorMessage = validateConfirmPassword(formData.password, value)
          ? ''
          : 'Passwords do not match.';
        break;
      default:
        break;
    }

    setErrors({...errors, [name]: errorMessage});
  };

  const handleSubmit = e => {
    e.preventDefault();

    // Perform all validations
    let valid = true;
    Object.keys(formData).forEach(key => {
      validateField(key, formData[key]);
      if (errors[key]) valid = false;
    });

    dispatch(registerUser({...formData}))
    .unwrap()
    .then((response) => {
      console.log("Registration successful!", response);
    })
    .catch((error) => {
      console.error("Registration failed:", error);
    });
  };

  return (
    <div className='bg-white p-8 rounded-lg shadow-lg w-full max-w-md'>
      <h2 className='text-2xl font-bold text-center mb-6'>Create an Account</h2>
      <form onSubmit={handleSubmit} className='space-y-4'>
        <div>
          <label className='block font-medium mb-1'>Username</label>
          <input
            type='text'
            name='username'
            value={formData.username}
            onChange={handleChange}
            className='w-full border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200'
            required
          />
          <ErrorMessage message={errors.username} />
        </div>

        <div>
          <label className='block font-medium mb-1'>Email</label>
          <input
            type='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            className='w-full border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200'
            required
          />
          <ErrorMessage message={errors.email} />
        </div>

        <div>
          <label className='block font-medium mb-1'>Phone Number</label>
          <input
            type='text'
            name='phoneNumber'
            value={formData.phoneNumber}
            onChange={handleChange}
            className='w-full border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200'
            required
          />
          <ErrorMessage message={errors.phoneNumber} />
        </div>

        <div>
          <label className='block font-medium mb-1'>Password</label>
          <input
            type='password'
            name='password'
            value={formData.password}
            onChange={handleChange}
            className='w-full border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200'
            required
          />
          <ErrorMessage message={errors.password} />
        </div>

        <div>
          <label className='block font-medium mb-1'>Confirm Password</label>
          <input
            type='password'
            name='confirmPassword'
            value={formData.confirmPassword}
            onChange={handleChange}
            className='w-full border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200'
            required
          />
          <ErrorMessage message={errors.confirmPassword} />
        </div>

        <button
          type='submit'
          className='w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600'>
          Register
        </button>
      </form>

      <p className='mt-4 text-center'>
        Already have an account?{' '}
        <Link to='/login' className='text-blue-600 hover:underline'>
          Login here
        </Link>
      </p>
    </div>
  );
};

export default Registration;
