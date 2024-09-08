var swiper = new Swiper(".unggulan", {
  spaceBetween: 30,
  centeredSlides: false,
  loop: true,
  autoplay: {
    delay: 10000,
    disableOnInteraction: false,
  },
  grabCursor: true,
  centeredSlides: true,
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  keyboard: {
    enabled: true,
  },
  autoHeight: true,
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  }
});

let navbar = document.querySelector('.navbar')
let search = document.querySelector('.search')
let cart = document.querySelector('.cart')
let header = document.querySelector('header')

window.addEventListener('scroll', () => {
  header.classList.toggle('shadow',window.scrollY > 0)
  navbar.classList.remove('active')
  search.classList.remove('active')
})

document.querySelector('#menu').onclick = () => {
  navbar.classList.toggle('active')
  search.classList.remove('active')
}
document.querySelector('#cari').onclick = () => {
  search.classList.toggle('active')
  navbar.classList.remove('active')
}


// swiper

