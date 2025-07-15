const URL =
  "https://script.google.com/macros/s/AKfycbx7A_-FcNZlzM42EftsjoyFOgZMc-ouJPS3Gh76iw6gaCl_gq5Yiir6vJvNvdW3Q0dT/exec";
const form = document.getElementById("contact-form");
const tabButtons = document.querySelectorAll(".tab-btn");
const tabPanes = document.querySelectorAll(".tab-pane");
const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");
const cards = document.querySelectorAll(".member-card");
const intro = document.getElementById("intro");
const mainContent = document.getElementById("main-content");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(URL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      Swal.fire({
        icon: "success",
        title: "Sukses!",
        text: "Pesan berhasil dikirim.",
      });
      form.reset();
    })
    .catch((error) => {
      Swal.fire({
        icon: "error",
        title: "Gagal!",
        text: "Ups! Ada masalah, coba lagi.",
      });
      console.error("Error!", error.message);
    });
});

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const target = button.getAttribute("data-tab");

    // hilangkan active pada semua tab-pane
    tabPanes.forEach((pane) => {
      pane.classList.remove("active");
    });

    // hilangkan active pada semua tab-btn
    tabButtons.forEach((btn) => {
      btn.classList.remove("active");
    });

    // aktifkan tab-pane yang sesuai
    document.getElementById(target).classList.add("active");

    // aktifkan tombolnya
    button.classList.add("active");
  });
});

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".custom-video").forEach((video) => {
  video.addEventListener("click", () => {
    if (!video.hasAttribute("controls")) {
      video.setAttribute("controls", true);
      video.play();
    }
  });

  video.addEventListener("ended", () => {
    video.removeAttribute("controls");
  });
});

document.addEventListener("DOMContentLoaded", function () {

  setTimeout(() => {
  if (intro) {
    intro.classList.add("animate-on-scroll");
  }
}, 1000);

  setTimeout(() => {
    intro.classList.add("fade-out");
  }, 1000);

  setTimeout(() => {
    intro.style.display = "none";
    mainContent.style.display = "block";
  }, 3000);
});
