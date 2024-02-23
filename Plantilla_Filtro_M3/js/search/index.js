import { containerJobs } from "../admin/jobs/functionsDOM.js";
import { URL_JOBS } from "../api/URLS.js";
import { cleanHTML } from "../utils/cleanHTML.js";

// Selectors
const searchByTitle = document.getElementById("searchByTitle");
const modalityFilter = document.getElementById("modality-filter");
const formSearch = document.getElementById("formSearch");

formSearch.addEventListener("submit", (event) => {
  event.preventDefault();
  searchVacancy();
});

async function searchVacancy() {
  const response = await fetch(
    `${URL_JOBS}?title=${searchByTitle.value}&modality=${modalityFilter.value}`
  );
  const data = await response.json();

  if (searchByTitle.value.length == 0 && modalityFilter.value.length == 0) {
    console.error("Campos obligatorio para buscar");
    alert("Campos obligatorio para buscar");
    return;
  }

  if (data.length == 0) {
    console.log(data);
    cleanHTML(containerJobs);
    containerJobs.innerHTML += `<img alt="404 photo" src="/assets/img/404.png"/>`;
    return;
  } else {
    cleanHTML(containerJobs);
    data.forEach((found) => {
      const { title, description, location, publicationDate } = found;
      containerJobs.innerHTML += `
    <div class="card-job" id="cardJob">
        <h2>${title}</h2>

        <p>
          ${description}
        </p>

        <div class="row">
          <div class="col-6">
            <div class="d-flex gap-2 align-items-center fs-5 text-muted">
              <i class="bx bx-current-location"></i>
              <span class="fw-semibold">${location}</span>
            </div>

            <div class="d-flex gap-2 align-items-center fs-5 text-muted">
              <i class="bx bx-time"></i>
              <span class="fw-semibold">${publicationDate}</span>
            </div>
          </div>

          <div class="col-6 d-flex justify-content-end">
            <img
              src="assets/img/logo.webp"
              alt="logo"
              height="80"
              width="80"
              class="object-fit-contain rounded-circle img-company"
            />
          </div>
        </div>
      </div>
    `;
    });
  }
}
