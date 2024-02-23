import { cleanHTML } from "../../utils/cleanHTML.js";

//Selectors
export const containerJobs = document.getElementById("containerJobs");

export function showJobs(getJobs) {
  cleanHTML(containerJobs);

  getJobs.forEach((job) => {
    containerJobs.innerHTML += `
    <div class="card-job" id="cardJob">
        <h2>${job.title}</h2>

        <p>
          ${job.description}
        </p>

        <div class="row">
          <div class="col-6">
            <div class="d-flex gap-2 align-items-center fs-5 text-muted">
              <i class="bx bx-current-location"></i>
              <span class="fw-semibold">${job.location}</span>
            </div>

            <div class="d-flex gap-2 align-items-center fs-5 text-muted">
              <i class="bx bx-time"></i>
              <span class="fw-semibold">${job.publicationDate}</span>
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
