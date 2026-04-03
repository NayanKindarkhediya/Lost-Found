// ================= TYPE EFFECT =================
const words = ["Reconnect Lost Items With Their Owners"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentWord = words[wordIndex];
  const textEl = document.getElementById("text");

  if (!textEl) return; // Agar element exist na kare

  if (!isDeleting) {
    textEl.textContent = currentWord.substring(0, charIndex + 1);
    charIndex++;
    if (charIndex === currentWord.length) {
      setTimeout(() => (isDeleting = true), 1000);
    }
  } else {
    textEl.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;
    if (charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
    }
  }
  setTimeout(typeEffect, isDeleting ? 80 : 120);
}
typeEffect();

// ================= SHOW FULL STORY =================
function showfullstory() {
  const fullstory = `
At Lost Found, our mission is to help communities recover lost items through a safe, simple, and trustworthy platform. 
We believe that when people work together, every recovery becomes possible. 
Lost Found was created to bridge the gap between those who lose valuable items and those who find them. 
Losing something important can be stressful and overwhelming, while many honest finders simply don’t know how to return what they’ve found. 
Our platform connects both sides in a secure and easy way. 
By combining honesty with technology, we’ve built a system focused on trust, transparency, and simplicity. 
Users can quickly report lost items, share details, and connect safely to complete successful recoveries. 
Lost Found is more than just a service — it’s a community-driven movement that restores trust, hope, and meaningful connections through every item returned.
`;
  const storyBox = document.getElementById("storyBox");
  if (storyBox) storyBox.innerHTML = fullstory;
}

// ================= SIGN-UP VALIDATION =================
const signupBtn = document.getElementById("signupBtn");
if (signupBtn) {
  signupBtn.addEventListener("click", function () {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("passwordError").textContent = "";
    document.getElementById("confirmError").textContent = "";

    let valid = true;

    if (!name) {
      document.getElementById("nameError").textContent =
        "Full Name is required!";
      valid = false;
    }
    if (!email.includes("@") || !email.includes(".")) {
      document.getElementById("emailError").textContent =
        "Enter a valid email!";
      valid = false;
    }
    if (password.length < 6) {
      document.getElementById("passwordError").textContent =
        "Password must be at least 6 characters!";
      valid = false;
    }
    if (password !== confirmPassword) {
      document.getElementById("confirmError").textContent =
        "Passwords do not match!";
      valid = false;
    }

    if (valid) alert("Signup Successful!");
  });
}

// ================= PAGE NAVIGATION =================
function goToLostPage(itemId) {
  window.location.href = `lost.html?item=${encodeURIComponent(itemId)}`;
}

function goToFoundPage(itemId) {
  window.location.href = `found.html?item=${encodeURIComponent(itemId)}`;
}

// ================= TAB SWITCH =================
function switchTab(tab) {
  document
    .querySelectorAll(".tab")
    .forEach((btn) => btn.classList.remove("active"));
  document
    .querySelectorAll(".tabContent")
    .forEach((c) => c.classList.remove("active"));

  const btn = document.querySelector(`[onclick="switchTab('${tab}')"]`);
  const content = document.getElementById(tab);
  if (btn) btn.classList.add("active");
  if (content) content.classList.add("active");
}

// Login & Sign Up Remove

if (localStorage.getItem("loggedIn") === "true") {
  document.getElementById("loginBtn").style.display = "none";
  document.getElementById("signupBtn").style.display = "none";
}

// login hone par
function loginUser() {
  localStorage.setItem("loggedIn", "true");
}

function checkLoginStatus() {
  const loggedIn = localStorage.getItem("loggedIn");

  if (loggedIn === "true") {
    document.getElementById("loginBtn").style.display = "none";
    document.getElementById("signupBtn").style.display = "none";
    document.getElementById("logoutBtn").style.display = "inline-block";
  } else {
    document.getElementById("loginBtn").style.display = "inline-block";
    document.getElementById("signupBtn").style.display = "inline-block";
    document.getElementById("logoutBtn").style.display = "none";
  }
}

function loginUser() {
  localStorage.setItem("loggedIn", "true");
  checkLoginStatus();
}

function logoutUser() {
  localStorage.setItem("loggedIn", "false");
  checkLoginStatus();
}

window.onload = checkLoginStatus;

function logoutUser() {
  localStorage.clear();
  window.location.href = "Home.html";
}