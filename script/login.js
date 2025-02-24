document.getElementById('login-btn').addEventListener('click', function(event){
    event.preventDefault();
    const accountNumber = document.getElementById('account-number').value;
    const password = document.getElementById('pin').value;
    const toPass = parseInt(password);
    if (accountNumber.length === 11){
        if (toPass === 1234){
            window.location.href = './main.html';
        }
        else{
            alert('Invalid Pin');
        }
    }
    else{
        alert('Invalid Account Number');
    }

})