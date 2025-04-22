// Step1: Set Event Handler
document.getElementById('btn-login')
    .addEventListener('click', function (event) {
        // Step2: Prevent Default behavior 
        event.preventDefault();  // event.preventDefault(); Reloads or navigates away from the current page
        console.log('Login button clicked');
        // Step3: Get the phone number
        const phoneNumber = document.getElementById('phone-number').value;
        console.log(phoneNumber)

    })
