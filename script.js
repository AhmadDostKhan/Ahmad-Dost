//LINE IN THE PROFILE PHOTO
let photoDiv = document.querySelector(".photo");
let line = document.querySelector(".line");
photoDiv.addEventListener("mouseenter", function () {
  line.style.width = "100%";
  photoDiv.addEventListener("mouseleave", function () {
    line.style.width = "0%";
  });
});

//LINE IN THE SKILLS CARDS
const projectCards = document.querySelectorAll(".skills .card");
projectCards.forEach((card) => {
  const projectLine = card.querySelector(".project-line");
  card.addEventListener("mouseenter", () => {
    projectLine.style.width = "100%";
  });
  card.addEventListener("mouseleave", () => {
    projectLine.style.width = "0%";
  });
});

//UNDERLINE TITLE IN PROJECTS
let skillCards = document.querySelectorAll(".skills .card");
skillCards.forEach((card) => {
  const cardTitle = card.querySelector(".card-title");
  card.addEventListener("mouseenter", function () {
    cardTitle.style.textDecoration = "underline";
  });
  card.addEventListener("mouseleave", function () {
    cardTitle.style.textDecoration = "none";
  });
});

//FORM VALIDATION

(() => {
  "use strict";

  const forms = document.querySelectorAll(".needs-validation");

  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();

//BACK TO TOP BUTTON CODE
const backToTopButton = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
});

backToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

//HAMBURGER SHOWING CODE
const hamburger = document.querySelector(".hamburger");
const navbarLinks = document.querySelector(".navbar-links");

hamburger.addEventListener("click", () => {
  navbarLinks.classList.toggle("show");

  hamburger.classList.toggle("open");
});
