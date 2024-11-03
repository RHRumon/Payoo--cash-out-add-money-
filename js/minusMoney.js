document.getElementById('cashOutBtn').addEventListener('click', function(e){
    e.preventDefault();
    let cashMinusAmount = getInputFieldId('cashOutAmount');
    let cashMinusPin = getInputFieldId('cashOutPin');

    if(cashMinusPin === 1111){
        let cur_balance = getTextFieldId('original-taka');

        let total_taka = cur_balance - cashMinusAmount;
        document.getElementById('original-taka').innerText = total_taka;
    }
    else{
        alert('Pin Error!');
    }
})