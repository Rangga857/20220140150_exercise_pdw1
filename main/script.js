function redirectToGallery() {
    alert("Anda akan dialihkan ke halaman galeri.");
    window.location.href = "galery.html"; // Mengarahkan ke halaman galeri
}

function displayDateTime() {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
    const formattedDateTime = now.toLocaleDateString('en-ID', options);
    document.getElementById("date-time").innerHTML = formattedDateTime;
}

// Panggil fungsi displayDateTime setiap detik untuk memperbarui waktu secara real-time
setInterval(displayDateTime, 1000);

// Mengarahkan ke halaman galeri saat tombol "Masuk" ditekan
document.getElementById("login-button").addEventListener("click", redirectToGallery);

// Fungsi untuk melakukan scroll yang halus ke elemen target
function smoothScroll(target) {
    // Mengambil posisi vertikal dari elemen target
    const targetPosition = document.querySelector(target).offsetTop;

    // Mengambil posisi vertikal dari window
    const startPosition = window.pageYOffset;

    // Menghitung jarak yang harus di-scroll
    const distance = targetPosition - startPosition;

    // Durasi animasi dalam milidetik
    const duration = 1000;

    // Waktu mulai animasi
    let startTime = null;

    // Fungsi animasi scroll
    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    // Fungsi untuk mengatur percepatan animasi (easing function)
    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    // Memulai animasi scroll
    requestAnimationFrame(animation);
}