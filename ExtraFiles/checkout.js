document.getElementById('checkoutForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;
    const cardNumber = document.getElementById('cardNumber').value;

})

 function redirect() {
            window.location.href = "done.html"; 
}