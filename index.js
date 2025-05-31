"use strict";

const links = document.querySelectorAll("a");
const navBar = document.querySelector("ul");
const overlay = document.querySelector(".overlay");
const overlay2 = document.querySelector(".overlay2");
const details = document.querySelector(".card-details");
const imgDetail = document.querySelector("#imgDetail");

links.forEach((item) => {
  item.addEventListener("click", () => {
    links.forEach((item) => {
      item.classList.remove("active");
    });

    item.classList.add("active");
    closeNav();
  });
});

function openNav() {
  navBar.classList.add("show");
  overlay.classList.add("show");
}

function closeNav() {
  navBar.classList.remove("show");
  overlay.classList.remove("show");
}

function closeOverLay() {
  closeNav();
}

function showDetails(img) {
  imgDetail.src = img;
  details.classList.add("details");
  overlay2.classList.add("details");
}

function closeDetails() {
  details.classList.remove("details");
  overlay2.classList.remove("details");
}

function closeOverLay2() {
  closeDetails();
}

console.log(overlay2);
