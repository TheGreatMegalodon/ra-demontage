function scrollToElement(id, tp=true) {
    var monBloc = document.getElementById(id);
    var scrollTop = window.scrollY || document.documentElement.scrollTop;
    var targetY = monBloc.getBoundingClientRect().top + scrollTop - (tp?75:100);
    window.scrollTo({
        top: targetY,
        behavior: "smooth"
    });
}

const redirect = {
    in: function(path) {
        window.location.replace(window.location.origin + window.location.pathname + path);
    },
    out: function(url) {
        window.open(url, "_blank");
    }
}

var urlStatus = {
    lastStatus: "",
    check: function(page) {
        if (this.lastStatus !== "" || page) {
            document.querySelector('body').classList.toggle('visible');
        }
        if (this.lastStatus !== "") {
            document.getElementById(this.lastStatus).classList.toggle('visible');
        }
        this.lastStatus = page||"";
        if (page) {
            document.getElementById(page).classList.toggle('visible');
        }
    },
    update: function(location) {
        history.pushState(null, '', `?=${location}`);
        this.check(location);
        if (location.length <= 1) {
            location = window.location.href.split('?=')[1];
            new URLSearchParams(window.location.search).delete("");
            window.history.replaceState(null, "", window.location.origin + window.location.pathname);
        }
    }
};

const Lightbox = {
    open: function(imgElement) {
        document.querySelector('body').classList.toggle('visible');
        const lightbox = document.querySelector('.lightbox');
        const lightboxImg = document.getElementById('lightbox-img');
        lightboxImg.src = imgElement.src;
        lightbox.style.display = 'flex';
    },
    close: function() {
        document.querySelector('.lightbox').style.display = 'none';
        document.querySelector('body').classList.toggle('visible');
    }
}