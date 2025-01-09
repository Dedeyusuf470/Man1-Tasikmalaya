// Fungsi untuk navigasi antar halaman
function showPage(pageId) {
    // Ambil semua elemen halaman
    const pages = document.querySelectorAll(".page");

    // Sembunyikan semua halaman
    pages.forEach(page => {
        page.style.display = "none";
    });

    // Tampilkan halaman yang dipilih
    const selectedPage = document.getElementById(pageId);
    if (selectedPage) {
        selectedPage.style.display = "block";
    }
}

// Fungsi untuk menangani pengiriman formulir Buku Tamu
function submitForm(event) {
    event.preventDefault(); // Mencegah reload halaman

    // Ambil elemen formulir dan pesan konfirmasi
    const form = document.getElementById("guestBookForm");
    const confirmationMessage = document.getElementById("confirmationMessage");

    // Tampilkan pesan konfirmasi
    confirmationMessage.style.display = "block";
    confirmationMessage.textContent = "Terima kasih! Pesan Anda telah berhasil dikirim.";

    // Hapus nilai input pada form
    form.reset();

    // Sembunyikan pesan konfirmasi setelah beberapa detik (3 detik)
    setTimeout(() => {
        confirmationMessage.style.display = "none";
    }, 3000);
}
