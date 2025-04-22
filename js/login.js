// Step1: Set Event Handler
document.getElementById('btn-login')
    .addEventListener('click', function (event) {
        // Step2: Prevent Default behavior 
        event.preventDefault();  // event.preventDefault(); Reloads or navigates away from the current page
        console.log('Login button clicked');
        // Step3: Get the phone number & pin number
        const phoneNumber = document.getElementById('phone-number').value;
        const pinNUmber = document.getElementById('input-pin').value;
        console.log(phoneNumber, pinNUmber);

        // Step4: Validate phone or pin
        // This is temporary
        if (phoneNumber === '5' && pinNUmber === '12345') {
            console.log('You are Log in');
            window.location.href = '/home.html';
        }
        else {
            alert('Wrong phone-number or pin')
        }

    })
