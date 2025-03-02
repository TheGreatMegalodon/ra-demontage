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

function sendEmail() {  // todo:   https://www.emailjs.com/
    /*
    emailjs.init("TON_USER_ID"); // Remplace par ton User ID
    emailjs.send("TON_SERVICE_ID", "TON_TEMPLATE_ID", {
        to_name: "Destinataire",
        from_name: "Ton nom",
        message: "Ceci est un test d'e-mail via EmailJS",
        reply_to: "tonemail@example.com"
    }).then(
        response => console.log("E-mail envoyé avec succès !", response),
        error => console.error("Erreur lors de l'envoi de l'e-mail", error)
    );
    */
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