// 1
const sendMessageImage = document.querySelector('.contacts__image');
const messageModal = document.getElementById('messageModal');
const closeModalBtn = document.querySelector('.close__btn');

const modalViewHandler = () => {
    messageModal.classList.toggle("modal--open");
}

sendMessageImage.addEventListener("click", modalViewHandler);
closeModalBtn.addEventListener("click", modalViewHandler);

messageModal.addEventListener("click", (event) => {
    if (event.target === messageModal) {
        modalViewHandler();
    }
});

// 2
const burgerBtn = document.querySelector('.burger__btn');
const mainNav = document.querySelector('.main-nav');

const toggleMenu = () => {
    mainNav.classList.toggle('active');
}

burgerBtn.addEventListener('click', toggleMenu);

// 3
let count = 0;
document.getElementById('clickButton').onclick = function() {
    count++;
    document.getElementById('clickCount').textContent = count;
};
