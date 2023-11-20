// loginadmin.js

// Mock data for admin credentials
const adminCredentials = {
    username: 'admin',
    password: 'admin123'
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
  const usernameInput = 'admin';
  const passwordInput = 'admin123';
  
  // Call the login function with the provided credentials
  loginAdmin(usernameInput, passwordInput);
  