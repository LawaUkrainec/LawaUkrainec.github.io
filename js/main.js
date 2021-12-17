(function() {
    const menuIcon = document.querySelector('.menu-icon');

    menuIcon.addEventListener('click', () => {
        document.querySelector('nav').classList.toggle('active-nav');
    });
})();