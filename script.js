document.querySelector('.burger-menu').addEventListener('click', () => {
    document.querySelector('.nav-menu').classList.toggle('active');
});

const searchBtn = document.querySelector('.search-btn');
const searchBar = document.querySelector('.search-bar');
const searchInput = document.querySelector('.search-bar-input');

searchBtn.addEventListener('click', () => {
    searchBar.style.display = 'flex';
    searchBtn.style.display = 'none';
    searchInput.focus();
});

searchInput.addEventListener('blur', () => {
    searchBar.style.display = 'none';
    searchBtn.style.display = 'block';
});

document.addEventListener('DOMContentLoaded', () => {
    const commentsContainer = document.querySelector('.comments-list');
    const leftButton = document.querySelector('.comments-button-left');
    const rightButton = document.querySelector('.comments-button-right');
    const card = document.querySelector('.comment-card');

    function scrollAmount() {
        return card.offsetWidth + 8;
    }

    leftButton.addEventListener('click', () => {
        commentsContainer.scrollBy({
            left: -scrollAmount(),
            behavior: 'smooth'
        });
    });

    rightButton.addEventListener('click', () => {
        commentsContainer.scrollBy({
            left: scrollAmount(),
            behavior: 'smooth'
        });
    });
});