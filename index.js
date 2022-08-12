const navbar = document.getElementById("navbar");
const toggle = document.querySelector(".toggle");
toggle.addEventListener("click", () => {
  toggle.classList.toggle("show");
  navbar.classList.toggle("show");
});
