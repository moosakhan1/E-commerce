// // script.js
// document.addEventListener('DOMContentLoaded', function() {
//   checkAuth();

//   document.getElementById('signIn').addEventListener('click', function() {
//       toggleForms('signInForm');
//   });

//   document.getElementById('signUp').addEventListener('click', function() {
//       toggleForms('signUpForm');
//   });

//   document.getElementById('logout').addEventListener('click', function() {
//       logout();
//   });
// });

// function toggleForms(formId) {
//   document.getElementById('signInForm').style.display = 'none';
//   document.getElementById('signUpForm').style.display = 'none';
//   document.getElementById(formId).style.display = 'block';
// }

// function signIn() {
//   const email = document.getElementById('signInEmail').value;
//   const password = document.getElementById('signInPassword').value;
//   const storedUser = JSON.parse(localStorage.getItem(email));

//   if (storedUser && storedUser.password === password) {
//       localStorage.setItem('currentUser', email);
//       alert('Sign In Successful');
//       checkAuth();
//   } else {
//       alert('Invalid email or password');
//   }
// }

// function signUp() {
//   const email = document.getElementById('signUpEmail').value;
//   const password = document.getElementById('signUpPassword').value;
//   const user = { email, password };

//   localStorage.setItem(email, JSON.stringify(user));
//   localStorage.setItem('currentUser', email);
//   alert('Sign Up Successful');
//   checkAuth();
// }

// function logout() {
//   localStorage.removeItem('currentUser');
//   alert('Logged Out');
//   checkAuth();
// }

// function checkAuth() {
//   const currentUser = localStorage.getItem('currentUser');

//   if (currentUser) {
//       document.getElementById('signIn').style.display = 'none';
//       document.getElementById('signUp').style.display = 'none';
//       document.getElementById('logout').style.display = 'block';
//   } else {
//       document.getElementById('signIn').style.display = 'block';
//       document.getElementById('signUp').style.display = 'block';
//       document.getElementById('logout').style.display = 'none';
//   }

//   document.getElementById('signInForm').style.display = 'none';
//   document.getElementById('signUpForm').style.display = 'none';
// }
