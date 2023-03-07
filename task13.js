var nameInput=document.getElementById('name');
var emailInput=document.getElementById('email');
//var button=document.getElementById('submitbutton');
var form = document.getElementById('my-form');
var itemList = document.getElementById('users');


// Form submit event
//form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);

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
    e.preventDefault();

  // Get input value
  var newItem = document.getElementById('users').value;

  // Create new li element
  var li = document.createElement('li');
  // Add class
  li.className = 'list-group-item';
  // Add text node with input value
  li.appendChild(document.createTextNode(newItem));

  // Create del button element
  var deleteBtn = document.createElement('button');
  //var editBtn=document.createElement('button');

  // Add classes to del button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
 // editBtn.className = 'btn btn-success btn-sm float-right delete';

  // Append text node
  deleteBtn.appendChild(document.createTextNode('X'));
 // editBtn.appendChild(document.createTextNode('Edit'));
  
  // Append button to li
  li.appendChild(deleteBtn);
 // li.appentChild(editBtn);

  // Append li to list
  itemList.appendChild(li);
}
// Remove item
function removeItem(e){
    if(e.target.classList.contains('delete')){
      if(confirm('Are You Sure?')){
        var li = e.target.parentElement;
        itemList.removeChild(li);
      }
    }
  }

function showUserOnScreen(obj){
    const parent=document.getElementById('users');
    const child=document.createElement('li');
    child.textContent=obj.name+' - '+obj.email;
    parent.appendChild(child);

}



  

