document.getElementById('cash-out-section').style.display = 'none';


document.getElementById('add-money-div')
    .addEventListener('click', function(event) {
        event.preventDefault();
        document.getElementById('cash-out-section').style.display = 'none';
        document.getElementById('add-money-section').style.display = 'block';
        
    })
document.getElementById('cash-out-div')
    .addEventListener('click', function(event) {
        event.preventDefault();
        document.getElementById('cash-out-section').style.display = 'block';
        document.getElementById('add-money-section').style.display = 'none';
        
    })