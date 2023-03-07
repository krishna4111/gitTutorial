var button=document.getElementById('submitbutton');
var nameInput=document.getElementById('name');
var emailInput=document.getElementById('email');

button.addEventListener('click',submitEvent);

function submitEvent(event){
    event.preventDefault();
    localStorage.setItem('name',nameInput.value);
    localStorage.setItem('email',emailInput.value);
    console.log('name :'+nameInput.value);
    console.log('email :'+emailInput.value);
}