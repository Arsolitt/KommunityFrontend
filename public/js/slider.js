const sliderTeam = new Swiper(".slider__team", {
  pagination: {
    el: ".slider__pagination",
    type: "fraction",
    renderFraction: function (currentClass, totalClass) {
      return (
        '<span class="' +
        currentClass +
        '" style="vertical-align: sub; font-weight: 600; font-size: 16px"></span>' +
        `\\` +
        '<span class="' +
        totalClass +
        '" style="vertical-align: super; font-weight: 400; font-size: 14px"></span>'
      );
    },
  },
  navigation: {
    nextEl: ".slider__button__next",
    prevEl: ".slider__button__prev",
  },
  spaceBetween: 26,
  slidesPerView: 2,
  watchOverflow: true,
  slidesPerGroup: 1,
  loop: true,
  speed: 600,
});

const sliderReviews = new Swiper(".slider__reviews", {
  pagination: {
    el: ".slider__pagination",
    type: "fraction",
    renderFraction: function (currentClass, totalClass) {
      return (
        '<span class="' +
        currentClass +
        '" style="vertical-align: sub; font-weight: 600; font-size: 16px"></span>' +
        `\\` +
        '<span class="' +
        totalClass +
        '" style="vertical-align: super; font-weight: 400; font-size: 14px"></span>'
      );
    },
  },
  navigation: {
    nextEl: ".slider__button__next",
    prevEl: ".slider__button__prev",
  },
  spaceBetween: 32,
  slidesPerView: 2,
  watchOverflow: true,
  slidesPerGroup: 1,
  loop: true,
  speed: 600,
});
