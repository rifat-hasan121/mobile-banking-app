document.getElementById('add-money')
    .addEventListener('click', function (event) {
        event.preventDefault();
        const amount = document.getElementById('amount').value;
        const convertedAmount = parseFloat(amount);
        const pin = document.getElementById('pin').value;
        const convertedPin = parseInt(pin);
        const mainBalance = document.getElementById('main-banalce').innerText;
        const convertedMainBalance = parseFloat(mainBalance);
        const accountNumber = document.getElementById('account-number').value;
        const convertedAccountNumber = accountNumber.toString();

        if(convertedAccountNumber.length === 11){
            if (convertedPin === 1234) {
                const sum = convertedAmount + convertedMainBalance;
                document.getElementById('main-banalce').innerText = sum;
            }
            else {
               alert('Pin is incorrect');

            }

        }
        else{
            alert('Account number is incorrect');
        }

        document.getElementById('amount').value = '';
        document.getElementById('pin').value = '';
        document.getElementById('account-number').value = '';


       
    })