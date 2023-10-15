const htmlElement = document.querySelector('html');
const bodyElement = document.querySelector('body');

// Mengambil elemen dengan ID nav-hamburger-sm
const navHamburger = document.getElementById("nav-hamburger-sm");
const navSm = document.getElementById("nav-sm")

// nav lg node
const navLg = document.getElementById("nav-lg")
const navLgLogo = document.getElementById("nav-logo-lg")
const navLgList = document.getElementById("nav-list-lg")

// Mengambil elemen dengan ID nav-list-sm
const navList = document.getElementById("nav-list-sm");

// Nav sm List
const navLinks = document.querySelectorAll('#nav-list-sm .nav-list a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Menutup navbar (Anda dapat menyesuaikan ini dengan kebutuhan Anda)
        navList.classList.add("d-none");
        htmlElement.style.overflowY = 'visible';
    });
});

// Menambahkan event listener untuk meng-handle klik pada elemen nav-hamburger-sm
navHamburger.addEventListener("click", function () {
    if (navList.classList.contains("d-none")) {
        navList.classList.remove("d-none");
        navSm.classList.remove("bg-transparent");
        navSm.classList.add("custom-shadow");
        htmlElement.style.overflowY = 'hidden';
    } else {
        navList.classList.add("d-none");
        document.body.classList.remove("stop-scrolling");
        htmlElement.style.overflowY = 'visible';
    }
});

// mengubah latar belakang navbar saat scrolling
window.addEventListener('scroll', () => {
    if (window.scrollY > 1) {
        navSm.classList.remove("bg-transparent");
        navSm.classList.add("custom-shadow");
        navLg.classList.remove("bg-transparent");
        navLg.classList.add("shadow-sm");
        navLgLogo.classList.remove("text-white");
        navLgList.classList.remove("text-white");
    } else {
        navSm.classList.add("bg-transparent");
        navSm.classList.remove("custom-shadow");
        navLg.classList.add("bg-transparent");
        navLg.classList.remove("shadow-sm");
        navLgLogo.classList.add("text-white");
        navLgList.classList.add("text-white");
    }
});

// Margin if click Navbar
const links = document.querySelectorAll('a[href^="#"]');
const offset = 95;

links.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substr(1); // Mengambil ID target dari tautan
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            const targetOffset = targetElement.offsetTop - offset;

            window.scrollTo({
                top: targetOffset,
                behavior: 'smooth'
            });
        }
    });
});

const coba = document.querySelector(".modal-dialog span");
coba.addEventListener("click", function() {
    console.log('jancok');
});
