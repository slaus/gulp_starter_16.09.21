/* SCRIPT */
window.addEventListener('DOMContentLoaded', () => {
    /* VIDEO */
    const playVideo = () => {

        const blockVideo = document.querySelector('.main-video__frame'),
            video = document.getElementById('video'),
            play = document.getElementById('play'),
            coefficient = blockVideo.offsetWidth / 560;

        blockVideo.style.height = 315 * coefficient + 'px';

        play.addEventListener('click', () => {
            play.style.display = 'none';
            video.style.display = 'block';
            video.style.width = blockVideo.offsetWidth + 'px';
            video.style.height = 315 * coefficient + 'px';
            video.src = 'https://www.youtube.com/embed/2qRQf00C5JU?autoplay=1';
        });
    };

    playVideo();

    /* SLIDER */
    const wrapper = document.querySelector('.main-testimonials__wrapper'),
        list = wrapper.querySelector('.main-testimonials__list'),
        images = wrapper.querySelectorAll('.main-testimonials__item');

    const prev = document.querySelector('[data-slide="prev"]'),
        next = document.querySelector('[data-slide="next"]');

    let i = 0,
        browserWidth = document.body.clientWidth,
        qty;

    const qtyItems = () => {
        if (browserWidth < 767) {
            qty = 1;
        } else if (browserWidth < 992) {
            qty = 2;
        } else {
            qty = 3;
        }
        return qty;
    };

    const setAdaptiveSlider = (index = i) => {
        qtyItems();

        let itemWidth = wrapper.offsetWidth / qty,
            total = images.length * itemWidth;
        list.style.width = total + 'px';

        images.forEach(item => {
            item.style.width = itemWidth + 'px';
        });

        next.addEventListener('click', (e) => {
            e.preventDefault();
            index = index + 1;
            if (index > images.length - qty) {
                index = 0;
            }
            list.style.transform = `translateX(-${index * itemWidth}px)`;
        });

        prev.addEventListener('click', (e) => {
            e.preventDefault();
            index = index - 1;
            if (index < 0) {
                index = images.length - qty;
            }
            list.style.transform = `translateX(-${index * itemWidth}px)`
        });
        console.log(images.length);
    };

    setAdaptiveSlider();

    window.addEventListener('resize', () => {
        playVideo();
        setAdaptiveSlider();
    });

});