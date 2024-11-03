function getInputFieldId(id){
    let inputNumber = document.getElementById(id).value;
    let inputValue = parseFloat(inputNumber);

    return inputValue;
}

function getTextFieldId(id){
    let originalBalance = document.getElementById(id).innerText;
    let originalAmount = parseFloat(originalBalance);
    return originalAmount;
}

function showSectionById(id){
    document.getElementById('cashInDiv').classList.add('hidden');
    document.getElementById('cashOutDiv').classList.add('hidden');
    document.getElementById('transaction-form').classList.add('hidden');

    document.getElementById(id).classList.remove('hidden');
}