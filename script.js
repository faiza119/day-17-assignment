// Register User
function registerUser(event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const user = { name, email, password };
  localStorage.setItem(email, JSON.stringify(user));
  alert("Registration successful! Please login.");
  window.location.href = "login.html";
}

// Login User
function loginUser(event) {
  event.preventDefault();
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  const storedUser = localStorage.getItem(email);
  if (!storedUser) {
    document.getElementById("loginError").textContent = "User not found!";
    return;
  }

  const user = JSON.parse(storedUser);
  if (user.password !== password) {
    document.getElementById("loginError").textContent = "Incorrect password!";
    return;
  }

  // Save session (you can use sessionStorage too)
  sessionStorage.setItem("currentUser", JSON.stringify(user));
  window.location.href = "welcome.html";
}

// Check if user is logged in before showing welcome page
function checkSession() {
  const currentUser = sessionStorage.getItem("currentUser");
  if (!currentUser) {
    alert("Please login first.");
    window.location.href = "login.html";
    return;
  }
  const user = JSON.parse(currentUser);
  document.getElementById("welcomeMessage").textContent = `Welcome, ${user.name}!`;
}

// Logout
function logout() {
  sessionStorage.removeItem("currentUser");
  alert("Logged out successfully.");
  window.location.href = "login.html";
}
