// add money

document.getElementById('btn').addEventListener('click', function(event){
    event.preventDefault();

    let inputNumber = getInputFieldId('moneyAmount');
    let pinNumber = getInputFieldId('pinNumber');
    
    // console.log(inputNumber, pinNumber);
    if(pinNumber === 1111){
        let currentBalance = getTextFieldId('original-taka');
        
        let total = inputNumber + currentBalance;
        // console.log(total);
        document.getElementById('original-taka').innerText = total;
        
    }
    else{
        alert('Pin ERROR');
    }
    
})