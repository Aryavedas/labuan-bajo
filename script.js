// Mengambil elemen dengan ID nav-hamburger-sm
var navHamburger = document.getElementById("nav-hamburger-sm");

// Mengambil elemen dengan ID nav-list-sm
var navList = document.getElementById("nav-list-sm");

// Menambahkan event listener untuk meng-handle klik pada elemen nav-hamburger-sm
navHamburger.addEventListener("click", function () {
    // Memeriksa apakah navList memiliki kelas 'd-none' (tersembunyi)
    if (navList.classList.contains("d-none")) {
        // Jika iya, hapus kelas 'd-none' untuk memunculkan elemen
        navList.classList.remove("d-none");
    } else {
        // Jika tidak, tambahkan kelas 'd-none' untuk menyembunyikan elemen
        navList.classList.add("d-none");
    }
});

