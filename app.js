const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

navToggle.addEventListener("click", () => {
  //   linksContainer.classList.toggle("show-links");
  const containerHeight = linksContainer.getBoundingClientRect().height;
  const linksHeight = links.getBoundingClientRect().height;
  if (containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = `0px`;
  }
  //   console.log(linksHeight);
});

// fixed navbar
const navbar = document.getElementById("nav");
const topBtn = document.querySelector(".top-link");

window.addEventListener("scroll", () => {
  const scrollHeight = window.pageYOffset;
  const navHeight = navbar.getBoundingClientRect().height;

  if (scrollHeight > navHeight) {
    navbar.classList.add("fixed-nav");
  } else {
    navbar.classList.remove("fixed-nav");
  }
  // top link

  if (scrollHeight > 500) {
    topBtn.classList.add("show-link");
  } else {
    topBtn.classList.remove("show-link");
  }
});
