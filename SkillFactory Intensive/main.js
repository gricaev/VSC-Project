const MENU_LINKS = document.querySelectorAll('.header__menu-link');
MENU_LINKS.forEach((link) => link.addEventListener('click', event => {
    event.preventDefault();

    const section = document.querySelector(link.getAttribute('href'));

    section.scrollIntoView({
        behavior: 'smooth'
    })
}))

const HERO_DOTS = document.querySelectorAll('.hero__dot');
const HERO_IMAGE = document.querySelector('.hero__image');
const HERO_TITLE = document.querySelector('.hero__title');
const HERO_SUBTITLES = document.querySelector('.hero__subtitle');
const TITLES = [
    'Разработано 2000+ приложений',
    'Бесплатные приложения',
    'Тысячи довольных клиентов'
];
const SUBTITLES = [
    "Для вашего удобства мы разработали множество приложений для вашего бизнеса и команды, которые доступны в любое время суток",
    "К любому сервисному обслуживанию мы подключим советы по управлению компанией совершенно бесплатно",
    "Накопленный нами опыт позволяет предлагать клиентам обширный спектр качественных приложений и сервисов"
];

HERO_DOTS.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        HERO_DOTS.forEach(el => { el.classList.remove('active') })
        dot.classList.add('active');
        HERO_IMAGE.src = `assets/hero_${index + 1}.jpg`
        HERO_TITLE.textContent = TITLES[index];
        HERO_SUBTITLES.textContent = SUBTITLES[index]
    })
})