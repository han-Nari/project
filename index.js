"use strict";

const links = document.querySelectorAll("a");
const navBar = document.querySelector("ul");

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
}

function closeNav() {
  navBar.classList.remove("show");
}
