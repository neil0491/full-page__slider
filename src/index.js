const slideShow = document.getElementById("slide-show");
const nextSlideBtn = document.getElementById("next-slide");
const prevSlideBtn = document.getElementById("prev-slide");
const nav = document.getElementById("navbar");
const slidesImg = document.querySelectorAll(".banner__image img");
const slideShowText = document.querySelectorAll(".banner__text div");
const menuIcon = document.querySelector('.menu-icon');

let index = 0;

const removeClass = (slidesImg, slidesText) => {
  slidesImg.forEach((element) => {
    element.classList.remove("active");
  });
  slidesText.forEach((element) => {
    element.classList.remove("active");
  });
};

const nextSlide = (slidesImg, slidesText) => {
  removeClass(slidesImg, slidesText);
  index = (index + 1) % slidesImg.length;
  slidesImg[index].classList.add("active");
  slidesText[index].classList.add("active");
};

const prevSlide = (slidesImg, slidesText) => {
  removeClass(slidesImg, slidesText);
  index = (index - 1 + slidesText.length) % slidesText.length;
  slidesImg[index].classList.add("active");
  slidesText[index].classList.add("active");
};

const menuToggle = (btn) => {
  btn.classList.toggle("active");
};

nextSlideBtn.addEventListener("click", () =>
  nextSlide(slidesImg, slideShowText, index)
);
prevSlideBtn.addEventListener("click", () =>
  prevSlide(slidesImg, slideShowText, index)
);

menuIcon.addEventListener("click", () => menuToggle(nav));


