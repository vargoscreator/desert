document.addEventListener("DOMContentLoaded", function () {
    let swiper = new Swiper(".review__slider", {
        loop: false,
        spaceBetween: 20,
        slidesPerView: 1,
        breakpoints: {
            768: {
                spaceBetween: 30,
                slidesPerView: 2,
            },
            1279: {
                spaceBetween: 39,
                slidesPerView: 3,
            },
        },
        pagination: {
            el: '.review__slider-pagination',
            clickable: true,
            type: 'bullets',
        }
    });

    const faqItems = document.querySelectorAll('.faq__item');
    faqItems.forEach(item => {
        item.addEventListener('click', function() {
            if (this.classList.contains('active')) {
                this.classList.remove('active');
            } else {
                faqItems.forEach(i => i.classList.remove('active'));
                this.classList.add('active');
            }
        });
    });
});