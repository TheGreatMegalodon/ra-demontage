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

var urlStatus = {
    lastStatus: "",
    check: function() {
        const page = window.location.href.split('?=')[1];
        document.querySelector('body').classList.toggle('visible');

        if (this.lastStatus !== "") {
            document.getElementById(this.lastStatus).classList.toggle('visible');
        }
        this.lastStatus = page;
        document.getElementById(page).classList.toggle('visible');
    },
    update: function(location) {
        history.pushState(null, '', `?=${location}`);
        this.check();
    }
};