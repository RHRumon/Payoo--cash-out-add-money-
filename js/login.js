// document.getElementById('btn-login').addEventListener('click', function(event){
//     event.preventDefault();
//     console.log('btn is clicked');
    
//     let phoneNumber =  document.getElementById('phone-number').value;
//     console.log(phoneNumber);
    
// })

document.getElementById('btn-login').addEventListener('click', function(event){
    event.preventDefault();  /*prevent browser autoLoading*/

    let phoneNumber = document.getElementById('phone-number').value;
    let pinNumber = document.getElementById('pin-number').value;

    if(phoneNumber === '123456' && pinNumber === '1111'){
        console.log('you are logged in');
        window.location.href = '/home.html';
    }
    else{
        alert('Error!! Check your phone Number or Pin');
    }
})