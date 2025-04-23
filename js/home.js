// add money to the account

// step1: Add an event handler to the add money button inside the from
document.getElementById('btn-add-money').addEventListener('click', function (event) {
    // prevent page reload after from submit
    event.preventDefault();

    // setp2: get money to be added to the account
    const addMoneyInput = document.getElementById('input-add-money').value;
    // console.log(addMoneyInput);

    // get the pin number provided
    const pinNumberInput = document.getElementById('input-pin-number').value;
    //console.log(typeof pinNumberInput)

    // step3: Verify pin number
    if (pinNumberInput === '123') {
        // step4: get the current balance
        const balance = document.getElementById('account-balance').innerText;
        console.log(balance);

        // step5: add addMoneyInput with balance
        const addMoneyNumber = parseFloat(addMoneyInput);
        const balanceNumber = parseFloat(balance);
        //console.log(addMoneyNumber);
        //console.log(balanceNumber);
        const newBalance = addMoneyNumber + balanceNumber;
        //console.log(newBalance);

        // step6: Update the balance in the UI
        document.getElementById('account-balance').innerText = newBalance;


    }
    else {
        alert('Failed to complete the transaction')
    }
});
