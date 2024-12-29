let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');
let carouselDom = document.querySelector('.carousel');
let listItemDom = document.querySelector('.carousel .list');
let thumbnailDom = document.querySelector('.carousel .thumbnail');

nextDom.onclick = function () {
    showSlider('next');
};
prevDom.onclick = function () {
    showSlider('prev');
};

let timeRunning = 3000; // Koha për animacion
let runTimeOut;
let timeAutoNext = 7000; // Koha për ndryshimin automatik
let runAutoRun = setTimeout(() => {
    nextDom.click();
}, timeAutoNext);

function showSlider(type) {
    let itemSlider = document.querySelectorAll('.carousel .list .item');
    let itemThumbnail = document.querySelectorAll('.carousel .thumbnail .item');

    if (type === 'next') {
        listItemDom.appendChild(itemSlider[0]); // Lëviz artikullin e parë në fund
        thumbnailDom.appendChild(itemThumbnail[0]);
        carouselDom.classList.add('next');
    } else {
        let positionLastItem = itemSlider.length - 1;
        listItemDom.prepend(itemSlider[positionLastItem]); // Lëviz artikullin e fundit në fillim
        thumbnailDom.prepend(itemThumbnail[positionLastItem]);
        carouselDom.classList.add('prev');
    }

    // Hiq klasat pas animacionit
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, timeRunning);

    // Riaktivizo automatikun
    clearTimeout(runAutoRun);
    runAutoRun = setTimeout(() => {
        nextDom.click();
    }, timeAutoNext);
}
