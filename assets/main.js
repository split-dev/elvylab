var swiper = Swiper;
var init = false;

function swiperLogo() {
  if (window.innerWidth <= 1200) {
    if (!init) {
      init = true;
      swiper = new Swiper(".js-discount__icons-swiper", {
        slidesPerView: 3,
        spaceBetween: 15,
        pagination: {
          el: '.swiper-pagination',
          type: 'progressbar'
        },
        breakpoints: {
          767: {
            slidesPerView: 5
          }
        }
      });
    }
  } else if (init) {
    swiper.destroy();
    init = false;
  }
}
swiperLogo();
window.addEventListener("resize", swiperLogo);

var swiperBrand = Swiper;
var initBrands = false;

function swiperBrands() {
  if (window.innerWidth <= 1200) {
    if (!initBrands) {
      initBrands = true;
      swiperBrand = new Swiper(".js-brands__info-swiper", {
        slidesPerView: 1.8,
        spaceBetween: 15,
        breakpoints: {
          767: {
            slidesPerView: 6
          }
        }
      });
    }
  } else if (initBrands) {
    swiperBrand.destroy();
    initBrands = false;
  }
}
swiperBrands();
window.addEventListener("resize", swiperBrands);


var swiperFeatured = Swiper;
var initFeatured = false;

function swiperFeaturedProduct() {
  if (window.innerWidth <= 1200) {
    if (!initFeatured) {
      initFeatured = true;
      swiperFeatured = new Swiper(".js-discount__featured-swiper", {
        slidesPerView: 1.3,
        spaceBetween: 15,
        breakpoints: {
          767: {
            slidesPerView: 6
          }
        }
      });
    }
  } else if (initFeatured) {
    swiperFeatured.destroy();
    initFeatured = false;
  }
}
swiperFeaturedProduct();
window.addEventListener("resize", swiperFeaturedProduct);
