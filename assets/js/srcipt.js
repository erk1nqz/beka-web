let nav = document.querySelector('nav');
let logo = document.querySelector('.navbar-brand');

const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', function() {
    if (this.window.scrollY > 40) {
        nav.classList.add('bg-dark', 'shadow');
        logo.classList.add('text-white');

        navLinks.forEach(navLink => {
            navLink.classList.remove('text-black');
            navLink.classList.add('text-white');
        });
    } else {
        nav.classList.remove('bg-dark', 'shadow');
        logo.classList.remove('text-white');

        navLinks.forEach(navLink => {
            navLink.classList.remove('text-white');
            navLink.classList.add('text-black');
        });
    }
});


let acc = document.getElementsByClassName("accordion-item");

for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        let panel = this.nextElementSibling;
        
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}