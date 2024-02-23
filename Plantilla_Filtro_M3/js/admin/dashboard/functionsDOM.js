// IMPORTS 
import { cleanHTML } from "../../utils/cleanHTML.js";
import {
  description,
  experience,
  idVacancyUpdate,
  modality,
  salary,
  titleJob,
  location,
  deleteVacancy
} from "./index.js";

// SELECTORS
const vacancyTbody = document.getElementById("vacancy-tbody");
const btnOpenModalVacancy = document.getElementById("btnOpenModalVacancy");

// SHOW VACANCYS ON THE DASHBOARD
export function showVacancy(vacancys) {
  // CLEAN THE CONTENT OF vacancyTbody
  cleanHTML(vacancyTbody);
  // ITERATOR OF VACANCYS
  vacancys.forEach((vacancy) => {
    // CREATING ELEMENTS FOR THE TABLE 
    const tr = document.createElement("tr");
    const tdImage = document.createElement("td");
    const tdCompany = document.createElement("td");
    const tdDescription = document.createElement("td");
    const tdLocation = document.createElement("td");
    const tdRequiredExperience = document.createElement("td");
    const tdModality = document.createElement("td");
    const tdSalary = document.createElement("td");
    const tdActions = document.createElement("td");

    const image = document.createElement("img");
    image.src = "/assets/img/logo.webp";
    image.width = "140";
    image.height = "80";
    image.classList.add("rounded-circle");
    
    const btnEDit = document.createElement("Button");
    const btnDelete = document.createElement("button");
    btnEDit.classList.add("btn", "btn-warning");
    btnDelete.classList.add("btn", "btn-danger");
    btnEDit.innerHTML = `<i class="bx bx-edit"></i>`;
    btnDelete.innerHTML = `<i class="bx bx-trash"></i>`;

    // EVENT FOR TO EDIT A VACANCY
    btnEDit.addEventListener("click", () => {
      loadInfoVacancy(vacancy);
    });

    // EVENT FOR TO DELETE A VACANCY
    btnDelete.addEventListener("click", () => {
      deleteVacancy(vacancy.id)
    });

    // ADDING CONTENT FOR TD
    tdCompany.textContent = vacancy.company.nameCompany;
    tdDescription.textContent = vacancy.description;
    tdLocation.textContent = vacancy.location;
    tdRequiredExperience.textContent = vacancy.experience;
    tdModality.textContent = vacancy.modality;
    tdSalary.textContent = vacancy.salary;

    tdImage.appendChild(image);
    tdActions.appendChild(btnEDit);
    tdActions.appendChild(btnDelete);

    // SEARCHING A FATHER FOR MY TR XD
    tr.appendChild(image);
    tr.appendChild(tdCompany);
    tr.appendChild(tdDescription);
    tr.appendChild(tdLocation);
    tr.appendChild(tdRequiredExperience);
    tr.appendChild(tdModality);
    tr.appendChild(tdSalary);
    tr.appendChild(tdActions);

    vacancyTbody.appendChild(tr);
  });
}

// LOAD INFO FOR EDIT MODAL
async function loadInfoVacancy(vacancy) {
  btnOpenModalVacancy.click();
  titleJob.value = vacancy.title;
  experience.value = vacancy.experience;
  salary.value = vacancy.salary;
  location.value = vacancy.location;
  modality.value = vacancy.modality;
  description.value = vacancy.description;
  idVacancyUpdate.value = vacancy.id;
}
