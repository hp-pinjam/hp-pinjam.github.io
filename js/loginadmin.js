// loginadmin.js

// Mock data for admin credentials
const adminCredentials = {
  username: 'ludha',
  password: 'ludha1234'
};

// Function to handle the login process
function loginAdmin(username, password) {
  // Check if the provided credentials match the admin credentials
  if (username === adminCredentials.username && password === adminCredentials.password) {
    console.log('Login successful. Welcome, admin!');
    // Perform additional actions after successful login if needed
  } else {
    console.log('Login failed. Please check your username and password.');
  }
}

// Example usage
const usernameInput = 'ludha';
const passwordInput = 'ludha1234';

// Call the login function with the provided credentials
loginAdmin(usernameInput, passwordInput);
