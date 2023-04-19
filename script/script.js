const modalOpen = document.querySelector('.modal-container-close');
const order = document.querySelector('.order-link');

const previous = document.querySelector('.slider-prev');
const next = document.querySelector('.slider-next');
const sliderDots = document.querySelector('.slider-bullets');
const sliderList = document.querySelector('.slider-list');

const sliderDotTemplate = document.querySelector('.bullet-item ');
const sliderItems = document.querySelectorAll('.slider-item');

const servicesLinksList = document.querySelector('.service-list');
const servicesLinks = document.querySelectorAll('.service-list-item');
const servicesScreens = document.querySelectorAll('.service-description-item');


order.addEventListener('click', () => {
  modalOpen.classList.remove('modal-container-close')
});

const modalClose = document.querySelector('.modal-button');

modalClose.addEventListener('click', (evt) => {
  evt.preventDefault();
  modalOpen.classList.add('modal-container-close');
});



/*if (specialOrderLink) {
  specialOrderLink.addEventListener('click', function (importantEvent) {
    importantEvent.preventDefault();
    modal.classList.add('modal-container-open');
  });
  modalCloseButton.addEventListener('click', function (importantEvent) {
    modal.classList.remove('modal-container-open');
  });
}*/

if (sliderList) {
  const model = [];
  const initModel = () => {
    const fragment = document.createDocumentFragment();
    sliderItems.forEach(() => {

      model.push(false);
      const dotElement = sliderDotTemplate.cloneNode(true);
      fragment.append(dotElement);
    });
    model[0] = true;
    sliderDots.innerHTML = '';
    sliderDots.append(fragment);
    document.querySelectorAll('.bullet-button').forEach((item) => {
      item.classList.remove('bullet-active');
    });
    document.querySelector('.bullet-button').classList.add('bullet-active');
  };

  initModel();

  //              0     1       2
  const setActiveElement = (index) => {
    model.forEach((item, i) => {
      model[i] = i === index ? true : false;
    });
  };

  const renderActiveScreen = () => {
    const index = model.findIndex((item) => item);
    sliderList.style.transform = `translateX(${-1160 * index}px)`;
  };

  const renderActiveDot = () => {
    document.querySelector('.bullet-active').classList.remove('bullet-active');
    const index = model.findIndex((item) => item);
    const sliderDotsItems = document.querySelectorAll('.bullet-item');
    Array.from(sliderDotsItems)[index].querySelector('button').classList.add('bullet-active');
  }

  const setTabIndex = () => {
    const index = model.findIndex((item) => item);
    sliderItems.forEach((item, i) => {
      const links = item.querySelectorAll('a');
      links.forEach((link) => {
        link.tabIndex = index === i ? 0 : -1;
      });
    });
  };

  setTabIndex();

  const render = () => {
    renderActiveScreen();
    renderActiveDot();
    setTabIndex();
  };

  previous.addEventListener('click', () => {
    const index = model.findIndex((item) => item);
    const previous = index - 1 > 0 ? index - 1 : 0;
    setActiveElement(previous);
    render();
  });

  next.addEventListener('click', () => {
    const index = model.findIndex((item) => item);
    const next = index + 1 < model.length ? index + 1 : model.length - 1;
    setActiveElement(next);
    render();
  });

  sliderDots.addEventListener('click', (evt) => {
    const sliderDotsItems = document.querySelectorAll('.bullet-item');
    const index = Array.from(sliderDotsItems).indexOf(evt.target.closest('li'));
    setActiveElement(index);
    render();
  });
}

if (servicesLinksList) {
  servicesLinksList.addEventListener('click', (evt) => {
    evt.preventDefault();
    if (evt.target.classList.contains('service-list-link')) {
      const index = Array.from(servicesLinks).indexOf(evt.target.closest('li'));
      document.querySelector('.service-link-active').classList.remove('service-link-active');
      evt.target.classList.add('service-link-active');
      document.querySelector('.service-description-active').classList.remove('service-description-active');
      Array.from(servicesScreens)[index].classList.add('service-description-active');
    }
  });
}


/*const sliderItem = [...document.querySelectorAll('.slider-item')];
console.log(sliderItem);

const nextButton = document.querySelector('.slider-next');
console.log(nextButton);

const prevButton = document.querySelector('.slider-prev');

const bulletItem = [...document.querySelectorAll('.bullet-item')];*/

/*
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
}*/
