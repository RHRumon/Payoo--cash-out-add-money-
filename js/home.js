document.getElementById('btn').addEventListener('click', function(event){
    let moneyAmount = document.getElementById('moneyAmount').value;
    let pinNumber = document.getElementById('pinNumber').value;

    // console.log(typeof(moneyAmount));
    
    console.log(moneyAmount, pinNumber);
    
    event.preventDefault();

    if(pinNumber === '1111'){
        let originalMoney = document.getElementById('original-taka').innerText;
        // console.log(typeof(originalMoney));
        
        let inputAmount = parseFloat(moneyAmount);
        let originalAmount = parseFloat(originalMoney);
        
        let total = inputAmount + originalAmount;
        console.log(total);
        document.getElementById('original-taka').innerText = total;
    }
    else{
        alert('something Error!');
    }
})
