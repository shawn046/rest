// =======================
// BACK BUTTON FUNCTION
// =======================
function goBack() {
  if (window.history.length > 1) {
    // Go back if possible
    window.history.back();
  } else {
    // Otherwise, go to homepage
    window.location.href = "index.html";
  }
}

// =======================
// BOOKING FORM FUNCTION
// =======================
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("bookingForm");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("name")?.value.trim() || "Guest";
      const guests = document.getElementById("guests")?.value || "N/A";
      const date = document.getElementById("date")?.value || "your chosen date";
      const message = document.getElementById("message")?.value.trim() || "";

      // Use a modal popup instead of alert
      showBookingModal(name, guests, date, message);

      // Reset the form after submission
      form.reset();
    });
  }

  // =======================
  // LIGHTBOX FUNCTION
  // =======================
  const lightboxLinks = document.querySelectorAll(".lightbox-link");

  if (lightboxLinks.length > 0) {
    const overlay = document.createElement("div");
    overlay.classList.add("lightbox-overlay");
    document.body.appendChild(overlay);

    const overlayImage = document.createElement("img");
    overlay.appendChild(overlayImage);

    lightboxLinks.forEach(link => {
      link.addEventListener("click", function(e) {
        e.preventDefault();
        overlayImage.src = this.href;
        overlay.classList.add("active");
      });
    });

    overlay.addEventListener("click", () => {
      overlay.classList.remove("active");
    });
  }
});

// =======================
// MODAL FUNCTION FOR BOOKING
// =======================
function showBookingModal(name, guests, date, message) {
  // Create modal container
  const modal = document.createElement("div");
  modal.classList.add("booking-modal");

  modal.innerHTML = `
    <div class="booking-content">
      <h3>Reservation Confirmed!</h3>
      <p>Thank you, <strong>${name}</strong>!</p>
      <p>Your table for <strong>${guests}</strong> guests has been reserved on <strong>${date}</strong>.</p>
      ${message ? `<p>Special Request: ${message}</p>` : ""}
      <button id="closeModal">Close</button>
    </div>
  `;

  document.body.appendChild(modal);

  // Close modal
  document.getElementById("closeModal").addEventListener("click", () => {
    modal.remove();
  });

  // Close on clicking outside content
  modal.addEventListener("click", e => {
    if (e.target === modal) modal.remove();
  });
}
