// correct the years in "About me" section
document.addEventListener("DOMContentLoaded", function(event) {
  document.querySelector("span.years").textContent = (new Date().getFullYear() - 1976 - 1).toString();
});
