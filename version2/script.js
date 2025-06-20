document.getElementById("appointment-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !phone || !message) {
    document.getElementById("form-message").textContent = "Please fill all fields.";
    return;
  }

  document.getElementById("form-message").textContent = "Appointment request sent successfully!";
  document.getElementById("appointment-form").reset();
});