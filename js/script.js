const Burger = document.querySelector(".section-header-inner-nav-burger");
const navBlock = document.querySelector(".section-header-inner-nav-list");
Burger.addEventListener("click", (e) => {
  navBlock.classList.toggle("nav-active");
  Burger.classList.toggle("toggle");
});

const item = document.querySelectorAll(".section-services-content-item");
item.forEach((el) => {
  el.addEventListener("click", (e) => {
    if (e.target.classList.contains("button-revs")) {
      el.children[0].classList.toggle("container-none");
      el.children[1].classList.toggle("container-none");
    }
  });
});
const windows = document.querySelectorAll(".section-team-content-item-window");
const changeModal = (e) => {
  const modal = e.target.parentElement.children[1];
  let bounds = e.target.getBoundingClientRect();
  let x = e.clientX - bounds.left;
  let y = e.clientY - bounds.top;
  modal.style.top = `${y + 20}px`;
  modal.style.left = `${x - 27}px`;
  modal.style.display = `block`;
};
function relativeCoords(e) {
  if (Array.from(windows).some((el) => el.style.display === "block")) {
    windows.forEach((el) => {
      el.style.display = `none`;
    });
    changeModal(e);
  } else {
    changeModal(e);
  }
}
const teamItem = document.querySelectorAll(".section-team-content-item");
teamItem.forEach((el) => {
  el.addEventListener("click", relativeCoords);
});

const sectionTeam = document.querySelector(".section-team");
sectionTeam.addEventListener("click", (e) => {
  if (!e.target.classList.contains("section-team__img")) {
    windows.forEach((el) => {
      el.style.display = `none`;
    });
  }
});
////SLIDER
let slideIndex = 1;
function slide(n, slideItem, slides2 = null) {
  if (n > slideItem.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slideItem.length;
  }
  if (slides2) {
    slides2.forEach((el) => el.classList.add("display-none"));
    slides2[slideIndex - 1].classList.remove("display-none");
  }
  slideItem.forEach((el) => el.classList.add("display-none"));
  slideItem[slideIndex - 1].classList.remove("display-none");
}

const slides = document.querySelectorAll(
  ".section-about-content-block1-slider-item"
);
const slides2One = document.querySelectorAll(
  ".section-says-content-block1-slider-item"
);
const slides2Two = document.querySelectorAll(
  ".section-says-content-block2-slider-item"
);
/////
slide(1, slides);
slide(1, slides2One, slides2Two);
////BUTTONS
const dots1 = document.querySelectorAll(".slider-dots1");
const dots2 = document.querySelectorAll(".slider-dots2");
let dotNumber = 0;
const buttonsSlider = document.querySelectorAll(
  ".section-says-content-block2-button__item"
);
buttonsSlider.forEach((el, index) => {
  el.addEventListener("click", () => {
    let test = index === 1 ? +1 : -1;
    slide((slideIndex += test), slides2One, slides2Two);
  });
});
// DOTS

function currentSlide(m, id, slides1, slides2 = null) {
  slide((slideIndex = id), slides1, slides2);
}
function clickDots(dots, slides1, slides2 = null) {
  dots.forEach((el) => {
    el.addEventListener("click", (e) => {
      currentSlide(1, e.target.id, slides1, slides2);
      dots.forEach((el) => el.classList.remove("dots-active"));
      el.classList.add("dots-active");
    });
  });
}
clickDots(dots1, slides);
clickDots(dots2, slides2One, slides2Two);
