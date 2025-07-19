//HERO-SLIDER-PORTION
const imgs = document.querySelectorAll('.header-slider ul img');
const previous_btn = document.querySelector('.previous');
const next_btn = document.querySelector('.next');

let n = 0;

function changeSlide() {
    for (let i = 0; i < imgs.length; i++) {
        imgs[i].style.display = 'none';
    }
    imgs[n].style.display = 'block';
}
changeSlide();
   
previous_btn.addEventListener('click', (e) => {
    if (n > 0) {
        n--;
    } else {
        n = imgs.length - 1;
    }
    changeSlide();
})

next_btn.addEventListener('click', (e) => {
    if (n < imgs.length - 1) {
        n++;
    } else {
        n = 0;
    }
    changeSlide();
})

//SCROLL-SLIDER-CONTAINER
const scrollContainer = document.querySelectorAll('.products');
for (const items of scrollContainer )
    {
        items.addEventListener('wheel',(evt)=>{
            evt.preventDefault();
            items.scrollLeft += evt.deltaY;
        })
    }