import { URL_COMPANIES } from "../api/URLS.js";
import { post } from "../api/httpMethods.js";

// Selectors
const formRegister = document.getElementById("formRegister");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordConfirmation = document.getElementById("password-confirmation");
const nameCompany = document.getElementById("company");
const imgCompany = document.getElementById("img-company");

formRegister.addEventListener("submit", (event) => {
  event.preventDefault();
  registerCompany();
});

async function registerCompany() {
  try {
    const response = await fetch(`${URL_COMPANIES}/?email=${email.value}`);
    const data = await response.json();

    const newCompany = {
      email: email.value,
      nameCompany: nameCompany.value,
      imageCompany: imgCompany.value,
      nit: 0,
      password: password.value,
    };

    if (password.value !== passwordConfirmation.value) {
      console.error("Las contraseñas no coinciden");
      alert("Las contraseñas no coinciden");
      return;
    }

    if (password.value.length < 6) {
      console.error("La contraseña debe tener mínimo 6 caracteres");
      alert("La contraseña debe tener mínimo 6 caracteres");
      return;
    }

    if (data) {
      console.error("Email ya registrado");
      alert("Email ya registrado");
    } else {
      await post(URL_COMPANIES, newCompany);
      console.log("Company created");
    }
  } catch (error) {
    console.log(error);
  }
}
