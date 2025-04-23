// Cash Out to the account

// step1: Add an event handler to the cash out button inside the from
document.getElementById('btn-cash-out').addEventListener('click', function (event) {
    event.preventDefault();

    // setp2: get money to be minus to the account
    const CashOutMoney = document.getElementById('cash-out-money').value;
    // console.log(CashOutMoney);

    // get the pin number provided
    const CashOutPin = document.getElementById('cash-out-pin').value;
    // console.log(CashOutPin);
    if (CashOutPin === '123') {
        //step4: get the current balance
        const balance = document.getElementById('account-balance').innerText;
        //console.log(balance);

        // step5: cash out from the account balance
        const CashOutMoneyNumber = parseFloat(CashOutMoney);
        const balanceNum = parseFloat(balance);

        // console.log(CashOutMoneyNumber);
        // console.log(balanceNum);

        const existingMoney = balanceNum - CashOutMoneyNumber;
        //console.log(existingMoney);

        // step6: Update the balance in the UI
        document.getElementById('account-balance').innerText = existingMoney;
    }
    else {
        alert("Transaction is not possible")
    }
})