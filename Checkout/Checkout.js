const paymentRadios = document.querySelectorAll('input[name="payment"]');
const visaDetails = document.getElementById("visaDetails");
const checkoutForm = document.getElementById("checkoutForm");
const alertBox = document.getElementById("customAlert");

paymentRadios.forEach((radio) => {
  radio.addEventListener("change", () => {
    if (radio.value === "visa") {
      visaDetails.classList.remove("hidden");
    } else {
      visaDetails.classList.add("hidden");
    }
  });
});

checkoutForm.addEventListener("submit", (e) => {
  e.preventDefault();
  alertBox.classList.remove("hidden");
});

function closeAlert() {
  alertBox.classList.add("hidden");
  checkoutForm.reset();
  visaDetails.classList.add("hidden");
}
