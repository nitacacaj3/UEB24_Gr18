//Përdorimi i JavaScript për shfrytëzim te getElementById:
//1. Përdorimi i tagjeve elementare të JavaScript-ave
let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');
let carouselDom = document.querySelector('.carousel');
let listItemDom = document.querySelector('.carousel .list');
let thumbnailDom = document.querySelector('.carousel .thumbnail');
//Krijimi dhe përdorimi i funksioneve në JS me dhe pa parametra 
//Përdorimi i JavaScript për  ngjarje (event):
// Ngjarja e klikimit për butonin "Next"
nextDom.onclick = function () {
    showSlider('next'); // Kjo do të thërrasë funksionin për të kaluar në elementin tjetër
};
// Ngjarja e klikimit për butonin "Prev"
prevDom.onclick = function () {
    showSlider('prev'); // Kjo do të thërrasë funksionin për të kaluar në elementin e mëparshëm
};

let timeRunning = 3000; 
let runTimeOut;
let timeAutoNext = 7000; 
let runAutoRun = setTimeout(() => {
    nextDom.click();
}, timeAutoNext);

function showSlider(type) {
    let itemSlider = document.querySelectorAll('.carousel .list .item');
    let itemThumbnail = document.querySelectorAll('.carousel .thumbnail .item');

    if (type === 'next') {
        listItemDom.appendChild(itemSlider[0]); 
        thumbnailDom.appendChild(itemThumbnail[0]);
        carouselDom.classList.add('next');
    } else {
        let positionLastItem = itemSlider.length - 1;
        listItemDom.prepend(itemSlider[positionLastItem]); 
        thumbnailDom.prepend(itemThumbnail[positionLastItem]);
        carouselDom.classList.add('prev');
    }

  
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, timeRunning);


    clearTimeout(runAutoRun);
    runAutoRun = setTimeout(() => {
        nextDom.click();
    }, timeAutoNext);
}
