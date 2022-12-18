const mobileMenuBtn = document.querySelector("[data-toggle-mobile-menu]");
const copyrightDate = document.querySelector("[data-footer-copyright-date]");
const header = document.querySelector(".header");
const date = new Date();
const allLiks = document.querySelectorAll("a:link");
const heroSection = document.querySelector("#hero");

mobileMenuBtn.addEventListener("click", () => {
  header.classList.toggle("active-mobile-nav");
});

copyrightDate.textContent = date.getFullYear();

////////////////////////////////////////////////
// close mobile menu whene scrolling

window.addEventListener("scroll", () => {
  if (header.classList.contains("active-mobile-nav")) {
    header.classList.remove("active-mobile-nav");
  }

  if (window.scrollY >= heroSection.clientHeight - 100) {
    document.body.classList.add("sticky-header");
  } else {
    document.body.classList.remove("sticky-header");
  }
});

///////////////////////////////////////////////
// add scrolling animation

allLiks.forEach((ele) => {
  ele.addEventListener("click", (e) => {
    e.preventDefault();
    const href = ele.getAttribute("href");

    if (href == "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    if (href != "#" && href.startsWith("#")) {
      const Section = document.querySelector(href);
      Section.scrollIntoView({ behavior: "smooth" });
    }
  });
});
