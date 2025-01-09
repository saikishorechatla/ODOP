import React, {useState} from 'react';

const Login = () => {
  const [formData, setFormData] = useState({
    emailOrPhone: '',
    password: '',
  });

  const handleChange = e => {
    const {name, value} = e.target;
    setFormData({...formData, [name]: value});
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Login successful!', formData);
  };

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100'>
      <div className='bg-white p-8 rounded-lg shadow-lg w-full max-w-md'>
        <h2 className='text-2xl font-bold text-center mb-6'>
          Login to Your Account
        </h2>
        <form onSubmit={handleSubmit} className='space-y-4'>
          <div>
            <label className='block font-medium mb-1'>
              Email or Phone Number
            </label>
            <input
              type='text'
              name='emailOrPhone'
              value={formData.emailOrPhone}
              onChange={handleChange}
              className='w-full border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200'
              required
            />
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
          </div>
          <button
            type='submit'
            className='w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600'>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
