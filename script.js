// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Highlight the current section in the navigation bar based on scroll position
document.addEventListener('scroll', function () {
    const sections = document.querySelectorAll('section');
    const navigationLinks = document.querySelectorAll('nav a');

    sections.forEach((section, index) => {
        const top = section.offsetTop - 50;
        const bottom = top + section.offsetHeight;

        if (window.scrollY >= top && window.scrollY <= bottom) {
            section.classList.add('active');
            navigationLinks[index].classList.add('active');
        } else {
            section.classList.remove('active');
            navigationLinks[index].classList.remove('active');
        }
    });
});

