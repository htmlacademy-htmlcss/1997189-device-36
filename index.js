const modalOpen = document.querySelector('.modal-container-close');
const order = document.querySelector('.order-link');

order.addEventListener('click', () => {
  modalOpen.classList.remove('modal-container-close')
});

const modalClose = document.querySelector('.modal-button');

modalClose.addEventListener('click', (evt) => {
  evt.preventDefault();
  modalOpen.classList.add('modal-container-close');
});

const sliderItem = [...document.querySelectorAll('.slider-item')];
console.log(sliderItem);

const nextButton = document.querySelector('.slider-next');
console.log(nextButton);

const prevButton = document.querySelector('.slider-prev');

const bulletItem = [...document.querySelectorAll('.bullet-item')];


let index = 0;
nextButton.addEventListener('click', () => {
  sliderItem[index].classList.remove('slider-screen-active');
  bulletItem[index].classList.remove('bullet-active');
  if (index + 1 > sliderItem.length - 1) {
    index = 0;
    sliderItem[index].classList.add('slider-screen-active');
    bulletItem[index].classList.add('bullet-active');
    return;
  }
  index += 1;
  sliderItem[index].classList.add('slider-screen-active');
  bulletItem[index].classList.add('bullet-active');
});

prevButton.addEventListener('click', () => {

  sliderItem[index].classList.remove('slider-screen-active');
  bulletItem[index].classList.remove('bullet-active');

  if (index == 0) {
    index = sliderItem.length - 1;
    sliderItem[index].classList.add('slider-screen-active');
    bulletItem[index].classList.add('bullet-active');
    return;
  }
  index -= 1;
  sliderItem[index].classList.add('slider-screen-active');
  bulletItem[index].classList.add('bullet-active');
});

for (let i = 0; i < bulletItem.length; i++) {
  bulletItem[i].addEventListener('click', function () {

    for (let j = 0; j < bulletItem.length; j++) {
      bulletItem[j].classList.remove('bullet-active');
      sliderItem[j].classList.remove('slider-screen-active');
    }
    bulletItem[i].classList.toggle('bullet-active');
    if (bulletItem[i].classList.contains('bullet-active')) {
      sliderItem[i].classList.add('slider-screen-active');
    }
  });
}
