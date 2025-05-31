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
    live: "https://han-nari.github.io/front-end-challenge02/",
    source: "https://github.com/han-nari/front-end-challenge02",
    link: "https://www.frontendmentor.io/challenges/fylo-dark-theme-landing-page-5ca5f2d21e82137ec91a50fd",
    details: `While exploring i saw this project and decided to build it. I decided to build this as my second project.`,
  },
  challenge02: {
    name: "Front-end Challenge 01 | Browser extension manager UI",
    live: "https://han-nari.github.io/front-end-challenge/",
    source: "https://github.com/han-nari/front-end-challenge",
    link: "https://www.frontendmentor.io/challenges/browser-extension-manager-ui-yNZnOfsMAp",
    details: `While I was looking an opportunity to improve my web developments skills, I came across a website called Frontend Mentor.
    As I explored the site, I saw this project and I decided to build it using my current knowledge I currently have.
    
    As far as I know it took me around 2hours to complete it. The result was wasn't perfect but still was still a good run to practice. My skills
    improve a little bit, especially in learning layout structures. `,
  },
};

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

function showDetails(img, linkKey) {
  imgDetail.src = img;
  details.classList.add("details");
  overlay2.classList.add("details");

  const links = challengeLinks[linkKey];

  document.querySelector(".view").href = links.live;
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

console.log(overlay2);
