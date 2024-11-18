// Scroll to section on button click
function scrollToSection(sectionId) {
  document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
}

// Handle reservation form submission
document.getElementById("reservationForm").addEventListener("submit", function (event) {
  event.preventDefault();

  // Display confirmation message
  const confirmationMessage = document.getElementById("confirmationMessage");
  confirmationMessage.classList.remove("hidden");

  // Clear form fields
  event.target.reset();

  // Automatically hide confirmation after 3 seconds
  setTimeout(() => {
    confirmationMessage.classList.add("hidden");
  }, 3000);
});

