document.getElementById('cashOutBtn').addEventListener('click', function(event){
    let cashOutAmount = document.getElementById('cashOutAmount').value;
    let cashOutPin = document.getElementById('cashOutPin').value;

    event.preventDefault();
    // console.log(typeof(cashOutAmount));
    
    if(cashOutPin === '1111'){
        let cashAmount = parseFloat(cashOutAmount);

        let currentCash = document.getElementById('original-taka').innerText;
        let currentAmount = parseFloat(currentCash);

        let currentBalance = currentAmount - cashAmount;
        console.log(currentBalance);
        
        document.getElementById('original-taka').innerText = currentBalance;
    }
    else{
        alert('Pin Error!');
    }
    
})