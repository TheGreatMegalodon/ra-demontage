function scrollToElement(id, tp=true) {
    var monBloc = document.getElementById(id);
    var scrollTop = window.scrollY || document.documentElement.scrollTop;
    var targetY = monBloc.getBoundingClientRect().top + scrollTop - (tp?75:100);
    window.scrollTo({
        top: targetY,
        behavior: "smooth"
    });
}

function redirectToSite(url) {
    window.location.href = url;
}
