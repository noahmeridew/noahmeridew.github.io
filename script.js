function smoothScroll(target) {
    document.querySelector(target).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
    });

    // change the file path and implement into html
    function openPDF() {
        window.open('path_to_your_pdf_file.pdf', '_blank');
      };
}

const revealElements = document.querySelectorAll("[data-reveal]")

const scrollReveal = function () {
    for (let i = 0, len = revealElements.length; i < len; i++) {
        const isElementsOnScreen = revealElements[i].getBoundingClientRect().top < window.innerHeight;

        if (isElementsOnScreen) {
            revealElements[i].classList.add("revealed")
        }
        else {
            revealElements[i].classList.remove("revealed");
        }
    }
}

window.addEventListener("scroll", scrollReveal);

window.addEventListener("load", scrollReveal);
