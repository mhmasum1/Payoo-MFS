// add money to the account

// step1: Add an event handler to the add money button inside the from
document.getElementById('btn-add-money').addEventListener('click', function (event) {
    // prevent page reload after from submit
    event.preventDefault();

    // setp2: get money to be added to the account
    const addMoneyInput = document.getElementById('input-add-money').value;
    console.log(addMoneyInput);

    // get the pin number provided
    const pinNumberInput = document.getElementById('input-pin-number').value;
    console.log(pinNumberInput)
});
