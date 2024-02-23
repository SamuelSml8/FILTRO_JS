// Imports
import { URL_JOBS } from "../../api/URLS.js";
import { deleteMethod, get, post, put } from "../../api/httpMethods.js";
import { showVacancy } from "./functionsDOM.js";

// Selectors
export const formVacancy = document.getElementById("formVacancy");
export const titleJob = document.getElementById("title-job");
export const experience = document.getElementById("experience");
export const salary = document.getElementById("salary");
export const location = document.getElementById("Location");
export const modality = document.getElementById("modality");
export const description = document.getElementById("description");
export const idVacancyUpdate = document.getElementById("idVacancyUpdate");
const logout = document.getElementById("logout");

// Events
document.addEventListener("DOMContentLoaded", () => {
  getVacancy();
});

formVacancy.addEventListener("submit", (event) => {
  event.preventDefault();

  if (idVacancyUpdate.value) {
    updateVacancy(idVacancyUpdate.value);
  } else {
    createVacancy();
  }
});

logout.addEventListener("click", () => {
  localStorage.removeItem("company");
});

async function createVacancy() {
  const company = JSON.parse(localStorage.getItem("company"));

  const newVacancy = {
    title: titleJob.value,
    experience: experience.value,
    salary: salary.value,
    location: location.value,
    modality: modality.value,
    description: description.value,
    publicationDate: new Date().toISOString().split("T")[0],
    companyId: company.id,
  };

  await post(URL_JOBS, newVacancy);
}

async function getVacancy() {
  const vacancy = await get(`${URL_JOBS}?_embed=company`);
  console.log(vacancy);

  showVacancy(vacancy);
}

export async function deleteVacancy(id) {
  await deleteMethod(`${URL_JOBS}/${id}`);
}

async function updateVacancy(id) {
  const company = JSON.parse(localStorage.getItem("company"));

  const newVacancy = {
    title: titleJob.value,
    description: description.value,
    publicationDate: new Date().toISOString().split("T")[0],
    location: location.value,
    experience: experience.value,
    modality: modality.value,
    salary: salary.value,
    companyId: company.id,
  };

  await put(`${URL_JOBS}/${idVacancyUpdate.value}`, newVacancy);
}
