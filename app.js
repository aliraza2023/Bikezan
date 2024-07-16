// Login Open & Close
let loginContainer = document.querySelector(".login-container");
let loginBtn = document.querySelector(".login-btn");
let closeBtn = document.querySelector(".close-login");

loginBtn.onclick = () => {
  loginContainer.classList.add("open-login");
  // Assuming navbar is defined
  navbar.classList.remove("open-menu");
};

closeBtn.onclick = () => {
  loginContainer.classList.remove("open-login");
};

// Open menu
let menu = document.querySelector("#menu-icon");
let navlinks = document.querySelector(".nav-links");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navlinks.classList.toggle("open-menu");
};