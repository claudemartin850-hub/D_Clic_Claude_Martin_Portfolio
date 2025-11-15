const header = document.getElementById('tete');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');

    }
});

document.addEventListener('DOMContentLoaded', function() {

    const form = document.querySelector('.contact-form');
    if (!form) return;

    const submitbtn = form.querySelector('.submit-btn');
    const initialBtnText = submitbtn.textContent;
    const initialBtncolor = submitbtn.style.backgroundColor;

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        e.stopPropagation();

        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }

        submitbtn.textContent = 'Envoyé';
        submitbtn.style.backgroundColor = 'green';

        form.reset();

        setTimeout(() => {
            submitbtn.textContent = initialBtnText;
            submitbtn.style.backgroundColor = initialBtncolor || '';
        }, 2000);

        console.log('Formulaire envoyé, bouton vert, champs vidés');
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const bars = document.querySelectorAll(".progress");
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const width = entry.target.getAttribute("data-width");
                entry.target.style.width = width;
            }
            else {
                entry.target.style.width = "0";
            }
        });
    }, {
        threshold: 0.5
    });

    bars.forEach(bar => observer.observe(bar));
});
