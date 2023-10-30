document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".sll2");
    const sliderLogo = document.querySelector(".sll2L");
    const carousel = document.querySelector(".immI2"); 

    let currentIndex = 0;
    let maxIndex = 2;

    slider.addEventListener("click", function () {
        currentIndex = (currentIndex + 1) % maxIndex;
        updateCarousel();
        if (currentIndex == (maxIndex-1)) sliderLogo.style.transform = "rotate(180deg) ";
        else if (currentIndex == 0) sliderLogo.style.transform = "rotate(360deg)";
    });

    function updateCarousel() {
        const translateX = currentIndex * -100;
        carousel.style.transform = `translateX(${translateX}%)`;
    }
});

function scrollToElement(id, tp=true) {
    var monBloc = document.getElementById(id);
    var scrollTop = window.scrollY || document.documentElement.scrollTop;
    var targetY = monBloc.getBoundingClientRect().top + scrollTop - (tp?75:100);
    window.scrollTo({
        top: targetY,
        behavior: "smooth"
    });
}