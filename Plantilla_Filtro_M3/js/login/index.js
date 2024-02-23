import { URL_COMPANIES } from "../api/URLS.js";

// Selectors
const formLogin = document.getElementById("formLogin");
const email = document.getElementById("email");
const password = document.getElementById("password");

// Events
formLogin.addEventListener("submit", (e) => {
  e.preventDefault();

  login();
});

async function login() {
  const response = await fetch(`${URL_COMPANIES}/?email=${email.value}`);
  const data = await response.json();

  if (!data) {
    console.error("Email no registrado");
    alert("Email no registrado");
    return;
  }

  if (data[0].password !== password.value) {
    console.error("Contraseña invalida");
    alert("Contraseña invalida")
    return;
  }

  localStorage.setItem("company", JSON.stringify(data[0]));
  window.location.href = "/administrator.html";
}