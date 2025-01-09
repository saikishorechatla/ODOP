import React from 'react';

const ErrorMessage = ({message}) => {
  return message ? (
    <span className='text-red-500 text-sm'>{message}</span>
  ) : null;
};

export default ErrorMessage;
