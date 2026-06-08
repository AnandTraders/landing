// ==========================
// Bootstrap Carousel Init
// ==========================
document.addEventListener('DOMContentLoaded', function () {
    new bootstrap.Carousel('#heroSlider', {
        interval: 3000,
        ride: 'carousel'
    });
});


// ==========================
// Scroll To Top Button
// ==========================
let scrollBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", function () {
    if (!scrollBtn) return;

    if (document.documentElement.scrollTop > 300) {
        scrollBtn.style.display = "flex";
    } else {
        scrollBtn.style.display = "none";
    }
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


// ==========================
// Counter Animation
// ==========================
document.addEventListener("DOMContentLoaded", function () {
    const counters = document.querySelectorAll('.counter');

    counters.forEach(counter => {
        counter.innerText = '0';

        const updateCounter = () => {
            const target = +counter.getAttribute('data-target');
            const c = +counter.innerText;

            const increment = target / 100;

    if (c < target) {
        counter.innerText = `${Math.ceil(c + increment)}`;
        setTimeout(updateCounter, 20);
    } else {
        counter.innerText = target;
    }
};

updateCounter();
});
});


// ==========================
// Floating Action Button (FAB)
// ==========================
function toggleFAB() {
    const fab = document.querySelector(".fab-container");
    if (fab) fab.classList.toggle("active");
}


// ==========================
// Navbar Collapse on Click (Mobile)
// ==========================
document.addEventListener("DOMContentLoaded", function () {
    const navbarCollapse = document.getElementById("menu");

    if (navbarCollapse) {
        const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
            toggle: false
        });

        document.querySelectorAll(".nav-link").forEach(link => {
            link.addEventListener("click", function () {
                if (window.innerWidth < 992) {
                    bsCollapse.hide();
                }
            });
    });
}
});


// ==========================
// WhatsApp Form Submit
// ==========================
function sendToWhatsapp() {
    let name = document.getElementById("waName").value.trim();
    let phone = document.getElementById("waPhone").value.trim();

    let nameError = document.getElementById("nameError");
    let phoneError = document.getElementById("phoneError");

    if (nameError) nameError.innerText = "";
    if (phoneError) phoneError.innerText = "";

    let nameRegex = /^[A-Za-z\s]+$/;
    let phoneRegex = /^[6-9]\d{9}$/;

    let valid = true;

    if (!name) {
        nameError.innerText = "Name is required";
        valid = false;
    } else if (!nameRegex.test(name)) {
        nameError.innerText = "Only letters allowed";
        valid = false;
    }

    if (!phone) {
        phoneError.innerText = "Phone number is required";
        valid = false;
    } else if (!phoneRegex.test(phone)) {
        phoneError.innerText = "Enter valid 10-digit Indian number";
        valid = false;
    }

    if (!valid) return;

    // Indian Date Format (DD/MM/YYYY)
    let today = new Date();
    let indianDate = today.toLocaleDateString("en-IN");

    let message =
    `*New Trading Inquiry*

    *Date:* _${indianDate}_
    *Name:* _${name}_
    *Phone:* _${phone}_

    I would like to know more about your trading services.`;

    let url = "https://wa.me/919825846168?text=" + encodeURIComponent(message);

    window.open(url, "_blank");
    
    // Close Bootstrap Modal
    const modalElement = document.getElementById("whatsappModal");
    const modal = bootstrap.Modal.getInstance(modalElement);
    if (modal) {
        modal.hide();
    }
}
