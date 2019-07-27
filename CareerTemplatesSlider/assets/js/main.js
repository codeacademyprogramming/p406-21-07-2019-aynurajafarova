let teamMembers = document.querySelectorAll('.our-team-member');
let dotIcons = document.querySelectorAll('.navigation-button .fa-circle');

let activeIndex = 0;
let navigationButtons = document.querySelectorAll('.navigation-button');

navigationButtons.forEach((button) => {
    let isRight = button.getAttribute('data-navigation') === 'right';
    button.addEventListener('click', () => {
        if (isRight && activeIndex + 1 < teamMembers.length) {
            activeIndex++;
        } else if (!isRight && activeIndex - 1 >= 0) {
            activeIndex--;
        }
        setActiveIndex(activeIndex);
    })
});

function setActiveIndex(activeIndex) {
    teamMembers.forEach((member) => member.classList.remove('active'));
    teamMembers[activeIndex].classList.add('active');

    dotIcons.forEach((icon) => icon.classList.remove('active-btn'));
    dotIcons[activeIndex].classList.add('active-btn');
};

setActiveIndex(activeIndex);

function activeSlide() {
    if (activeIndex + 1 < dotIcons.length) {
        activeIndex++;
    } else {
        activeIndex = 0;
    }
};

let interval = setInterval(() => {
    setActiveIndex(activeIndex);
    activeSlide();
}, 2000);

teamMembers.forEach((member) => {
    member.addEventListener('mouseleave', () => {
        interval = setInterval(() => {
            setActiveIndex(activeIndex);
            activeSlide();
        }, 2000);
    })
});

teamMembers.forEach((member) => {
    member.addEventListener('mouseover', () => {
        clearInterval(interval);
    });
});


