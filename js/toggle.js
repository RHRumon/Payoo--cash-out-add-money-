document.getElementById('show-cash-out-btn').addEventListener('click', function(event){
     document.getElementById('cashOutDiv').classList.remove('hidden');

    document.getElementById('cashInDiv').classList.add('hidden');
    
})
document.getElementById('show-add-money-btn').addEventListener('click', function(event){
     document.getElementById('cashOutDiv').classList.add('hidden');

    document.getElementById('cashInDiv').classList.remove('hidden');
    
})