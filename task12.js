var nameInput=document.getElementById('name');
var emailInput=document.getElementById('email');
//var button=document.getElementById('submitbutton');

//button.addEventListener('click',submitEvent);
function submitEvent(e){
    e.preventDefault();
    console.log(e);
    const name=nameInput.value;
    const email=emailInput.value
    console.log(name);
    let obj={
        name,
        email
    }
    localStorage.setItem(obj.email,JSON.stringify(obj));
    showUserOnScreen(obj);
}
function showUserOnScreen(obj){
    const parent=document.getElementById('users');
    const child=document.createElement('li');
    child.textContent=obj.name+' - '+obj.email;
    parent.appendChild(child);

}