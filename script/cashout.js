document.getElementById("cashOut-btn").addEventListener("click", function(event) {
    event.preventDefault();
    // convert cashOutAmount to an integer
    const cashOutAmount = document.getElementById("cashOut-amount").value;
    const convertedAmount = parseFloat(cashOutAmount);
    // convert cashOutPin to an integer
    const cashOutPin = document.getElementById("cashOut-pin").value;
    const convertedCashOutPin = parseInt(cashOutPin);
    // convertedBalance is the balance in the account
    const balance = document.getElementById('main-balance').innerText;
    const convertedBalance = parseFloat(balance);
    const accountNumber = document.getElementById('cashOutAccount-number').value;
    if(accountNumber.length === 11){
        if (convertedCashOutPin === 1234) {
            const sum = convertedBalance - convertedAmount;
            document.getElementById('main-balance').innerText = sum;
        }
        else {
            alert("Invalid Pin");
        }

    }
    else{
        alert("Invalid Account Number");
    };

    document.getElementById("cashOut-amount").value = '';
    document.getElementById("cashOut-pin").value = '';
    document.getElementById('cashOutAccount-number').value = '';


    
})