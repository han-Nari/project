"use strict";

const links = document.querySelectorAll("a");
const navBar = document.querySelector("ul");
const overlay = document.querySelector(".overlay");
const overlay2 = document.querySelector(".overlay2");
const details = document.querySelector(".card-details");
const imgDetail = document.querySelector("#imgDetail");

const challengeLinks = {
  challenge01: {
    name: "Front-end Challenge 02 | Fylo dark theme landing page",
    language: `
     <img class="lang" src="assets/html.svg" alt="html"/>  <img class="lang" src="assets/css.svg" alt="html"/>`,
    live: "https://han-nari.github.io/front-end-challenge02/",
    source: "https://github.com/han-nari/front-end-challenge02",
    link: "https://www.frontendmentor.io/challenges/fylo-dark-theme-landing-page-5ca5f2d21e82137ec91a50fd",
    details: `A visually appealing dark-themed landing page built using HTML and CSS. The project recreates Fylo’s design, focusing on clean layout, responsive design, and visual hierarchy. It includes smooth section transitions, well-structured content blocks, and attention to typography and spacing for an elegant and modern look.`,
  },
  challenge02: {
    name: "Front-end Challenge 01 | Browser extension manager UI",
    language: `
     <img class="lang" src="assets/html.svg" alt="html"/>  <img class="lang" src="assets/css.svg" alt="html"/> <img class="lang" src="assets/js.svg" alt="html"  />`,
    live: "https://han-nari.github.io/front-end-challenge/",
    source: "https://github.com/han-nari/front-end-challenge",
    link: "https://www.frontendmentor.io/challenges/browser-extension-manager-ui-yNZnOfsMAp",
    details: `A clean and modern browser extension manager UI built with HTML, CSS, and JavaScript. This project replicates a typical extension management interface where users can view installed extensions, toggle them on or off, and remove them. It focuses on layout design, interactive UI elements, and responsive styling to deliver a smooth experience across devices.`,
  },
  challenge03: {
    name: "Front-end Challenge 03 | Product list with cart",
    live: "https://han-nari.github.io/front-end-challenge03/#/",
    language: `
     <img class="lang" src="assets/html.svg" alt="html"/>  <img class="lang" src="assets/css.svg" alt="html"/> <img class="lang" src="assets/reactjs.svg" alt="html"  />`,
    source: "https://github.com/han-Nari/front-end-challenge03",
    link: "https://www.frontendmentor.io/challenges/product-list-with-cart-5MmqLVAp_d",
    details: `A responsive product list page built with React, featuring a fully functional shopping cart. Users can browse products, add or remove items from the cart, and view the total cost dynamically. The project emphasizes clean UI, modular component structure, and state management using React hooks. Styled with CSS for a smooth user experience across devices.`,
  },
  capstone: {
    name: "Financial Management",
    language: `
     <img class="lang" src="assets/html.svg" alt="html"/>  <img class="lang" src="assets/css.svg" alt="html"/> <img class="lang" src="assets/js.svg" alt="html"  /> <img class="lang" src="assets/php.svg" alt="php"/>`,
    live: "",
    source: "https://github.com/han-Nari/Capstone",
    link: "",
    details: `Our 2024 Capstone Project was in collaboration with the LGU. Each group developed a different system and consisted of 5 members, each assigned specific roles. Our group's system was the Financial Management System, which served as the central hub. Our main task was to integrate the other groups’ systems and collect their data into our own database for centralized financial tracking and management.`,
  },
};

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

function showDetails(img, linkKey) {
  imgDetail.src = img;
  details.classList.add("details");
  overlay2.classList.add("details");

  const links = challengeLinks[linkKey];

  document.querySelector(".view").href = links.live;
  document.querySelector(".language").innerHTML = links.language;
  document.querySelector(".source").href = links.source;
  document.querySelector(".project-name").innerHTML = links.name;
  document.querySelector(".ch1").href = links.link;
  document.querySelector(".myinfo").innerHTML = links.details;
}

function closeDetails() {
  details.classList.remove("details");
  overlay2.classList.remove("details");
}

function closeOverLay2() {
  closeDetails();
}

links.forEach((item) => {
  item.addEventListener("click", () => {
    links.forEach((item) => {
      item.classList.remove("active");
    });

    item.classList.add("active");
    closeNav();
  });
});
