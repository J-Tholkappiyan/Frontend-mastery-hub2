// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('navbar-scrolled', 'py-2');
        navbar.classList.remove('py-3');
    } else {
        navbar.classList.remove('navbar-scrolled', 'py-2');
        navbar.classList.add('py-3');
    }
});

// Add hover effect to nav links using JS instead of CSS
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('mouseenter', function() {
        this.style.borderBottom = '3px solid #FF5F00';
        this.style.transition = 'border-bottom 0.3s ease';
    });
    link.addEventListener('mouseleave', function() {
        this.style.borderBottom = 'none';
    });
});

// Add image hover effect using JS
document.querySelectorAll('.card-img-top').forEach(img => {
    img.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1)';
        this.style.transition = 'transform 0.5s ease';
    });
    img.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});

// Set placeholder color for contact form
document.querySelectorAll('input, textarea').forEach(el => {
    el.setAttribute('style', 'color: #fff !important;');
    el.addEventListener('focus', function() {
        this.style.color = '#fff';
    });
});