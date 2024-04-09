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