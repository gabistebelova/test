const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const auto = false;
const intervalTime = 5000;
let slideInterval;

const nextSlide = () => {
  const current = document.querySelector('.current');
  // odstraním třídu current
  current.classList.remove('current');
  // najdu další slide
  if (current.nextElementSibling) {
    // přidám třídu current
    current.nextElementSibling.classList.add('current');
  } else {
    // přidám current nazačátek
    slides[0].classList.add('current');
  }
  setTimeout(() => current.classList.remove('current'));
}

const prevSlide = () => {
  const current = document.querySelector('.current');
  // odstraní třídu current
  current.classList.remove('current');
  // najde další slide
  if (current.previousElementSibling) {
    // přidám třídu current
    current.previousElementSibling.classList.add('current');
  } else {
    // přidám current poslednímu
    slides[slides.length - 1].classList.add('current');
  }
  setTimeout(() => current.classList.remove('current'));
};

//button events
next.addEventListener('click', e => {
  nextSlide();
});

prev.addEventListener('click', e => {
  prevSlide();
});
