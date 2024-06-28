const sections = document.querySelectorAll('.section');
const secBtns = document.querySelectorAll('.controlls .control');
const allSections = document.querySelector('.main-content');

function PageTransition() {
    secBtns.forEach((btn) => {
        btn.addEventListener('click', function() {
            const currentBtn = document.querySelector('.active-btn');
            currentBtn.classList.remove('active-btn');
            this.classList.add('active-btn');

            const id = this.getAttribute('data-id');
            const targetSection = document.getElementById(id);

            sections.forEach((section) => {
                section.classList.remove('active');
            });

            targetSection.classList.add('active');
        });
    });

    
    allSections.addEventListener('click', (e) => {
        const id = e.target.dataset.id;
        if (id) {
            secBtns.forEach((btn) => {
                btn.classList.remove('active');
            });

            e.target.classList.add('active');

            sections.forEach((section) => {
                section.classList.remove('active');
            });

            const element = document.getElementById(id);
            element.classList.add('active');
        }
    });

    const themeBtn = document.querySelector('.theme-btn');
    themeBtn.addEventListener('click' , () => {
        let element = document.body;
        element.classList.toggle('light-mode');
    })
}

PageTransition();





