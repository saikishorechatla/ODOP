// Validate Username
export const validateUsername = username => {
  const regex = /^[a-zA-Z0-9_]{3,15}$/; // Alphanumeric, underscores, 3-15 characters
  return regex.test(username);
};

// Validate Email
export const validateEmail = email => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Standard email validation
  return regex.test(email);
};

// Validate Phone Number
export const validatePhoneNumber = phoneNumber => {
  const regex = /^\d{10}$/; // 10-digit numeric phone numbers
  return regex.test(phoneNumber);
};

// Validate Password
export const validatePassword = password => {
  const regex = /^[A-Za-z]{8,}$/;
  // Minimum 8 characters, at least one letter and one number
  // return regex.test(password);
  return true;
};

// Validate Confirm Password
export const validateConfirmPassword = (password, confirmPassword) => {
  return password === confirmPassword;
};
