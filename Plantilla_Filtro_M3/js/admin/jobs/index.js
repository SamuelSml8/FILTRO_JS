import { URL_JOBS } from "../../api/URLS.js";
import { get } from "../../api/httpMethods.js";
import { showJobs } from "./functionsDOM.js";

// Selectors
export const cardJob = document.getElementById("cardJob");

document.addEventListener("DOMContentLoaded", () => {
  getJobs();
});

async function getJobs() {
  const data = await get(URL_JOBS);
  console.log(data);

  showJobs(data);
}
