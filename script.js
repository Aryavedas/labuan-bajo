const htmlElement = document.querySelector('html');
const bodyElement = document.querySelector('body');

// Mengambil elemen dengan ID nav-hamburger-sm
const navHamburger = document.getElementById("nav-hamburger-sm");
const navSm = document.getElementById("nav-sm")

// nav lg node
const navLg = document.getElementById("nav-lg")

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
        htmlElement.style.overflowY = 'hidden';
    } else {
        navList.classList.add("d-none");
        document.body.classList.remove("stop-scrolling");
        htmlElement.style.overflowY = 'visible';
    }
});

// Menambahkan event listener untuk mengubah latar belakang navbar saat scrolling
window.addEventListener('scroll', () => {
    if (window.scrollY > 1) {
        navSm.classList.remove("bg-transparent");
        navLg.classList.remove("bg-transparent");
    } else {
        navSm.classList.add("bg-transparent");
        navLg.classList.add("bg-transparent");
    }
});
