const menuButton = document.getElementById("menu-button");
const menu = document.querySelector(".menu");
const joinBtn = document.getElementById("join-btn");
const nameInput = document.querySelector(".name-input");
const emailInput = document.querySelector(".email-input");
const emailErr = document.querySelector(".error-email");
const nameErr = document.querySelector(".error-name");

menuButton.addEventListener("click", (e) => {
  menu.classList.toggle("menu-active");
});

joinBtn.addEventListener("click", (e) => {
  if (emailInput.value == "") {
    emailErr.style.display = "block";
  } else {
    emailErr.style.display = "none";
  }

  if (nameInput.value == "") {
    nameErr.style.display = "block";
  } else {
    nameErr.style.display = "none";
  }
});

