let listItems = document.querySelectorAll('.list-group-item');
let mainNewsImg = document.querySelector('.slider-main img');

let newsImgs = [
    'https://ichef.bbci.co.uk/images/ic/720x405/p05vtkdr.jpg',
    'https://ichef.bbci.co.uk/images/ic/480xn/p01tlf61.jpg',
    'https://static.foxnews.com/static/orion/styles/img/fox-news/og/og-fox-news.png'
];

listItems.forEach((listItem, index) => {
    listItem.setAttribute('data-index', index);

    listItem.addEventListener('click', () => {
        mainNewsImg.setAttribute('src', newsImgs[index]);
        listItems.forEach((item) => item.classList.remove('active'));
        listItem.classList.add('active');
    });
});

mainNewsImg.setAttribute('src', newsImgs[0]);

let activeIndex = 0;
let navigationButtons = document.querySelectorAll('.navigation-button');
navigationButtons.forEach((navigationButton) => {
    let isRight = navigationButton.getAttribute('data-navigation') === 'right';
    navigationButton.addEventListener('click', () => {
        if (isRight) {
            if (activeIndex + 1 < newsImgs.length) {
                activeIndex++;
            } else {
                activeIndex = 0;
            }
        } else if (!isRight) {
            if (activeIndex - 1 >= 0) {
                activeIndex--;
            } else {
                activeIndex = newsImgs.length - 1;
            }
        }
        setActiveElement(activeIndex);
    });
});

function setActiveElement(activeIndex) {
    listItems.forEach((item) => item.classList.remove('active'));
    listItems[activeIndex].classList.add('active');

    mainNewsImg.setAttribute('src', newsImgs[activeIndex]);
};

function changeListItem() {
    if (activeIndex + 1 < listItems.length) {
        activeIndex++;
    } else {
        activeIndex = 0;
    }
};

let sliderMain = document.querySelector('.slider-main');
let interval = setInterval(() => {
    setActiveElement(activeIndex);
    changeListItem();
}, 2000);

sliderMain.addEventListener('mouseleave', () => {
    interval = setInterval(() => {
        setActiveElement(activeIndex);
        changeListItem();
    }, 2000);
});

sliderMain.addEventListener('mouseover', () => {
    clearInterval(interval)
});