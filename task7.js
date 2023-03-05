//---------------TRAVERSING THE DOM-----------------
//if a elment is inside an another elment it is in the structure ofparent and child.
//if two elements are in the same level then those are called sibling

var itemList=document.querySelector('#items');


//1.parentnode 
//parentnode gives the parent node of the perticular item
console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor='#f4f4f4';
console.log(itemList.parentNode.parentNode);



//2.parentElement
//it is exactly the same thing of the parentNode
console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor='green';
console.log(itemList.parentElement.parentElement);





//3.childNodes
//when you use childNodes you can see some unwanted text nodes its all are line break.
//instead of using childNodes you can use children bcz children doest give text nodes.
console.log(itemList.childNodes);
//always use children insted using childNode
//it only gives the child note not gives you line break
console.log(itemList.children);
console.log(itemList.children[3]);
itemList.children[3].style.backgroundColor='pink';




//4.firstChild
//it includes the line break so its not recommended;
console.log(itemList.firstChild);

//5.firstElementChild
//it only includes the element not include line br
console.log(itemList.firstElementChild);
itemList.firstElementChild.style.color='green';
itemList.firstElementChild.style.textContent='Hello Sir';





//6.lastChild
//this will also gives you the text elements so alwayse prefer to use lastElementChild
console.log(itemList.lastChild);

//7/lastElementChild
console.log(itemList.lastElementChild);
itemList.lastElementChild.style.color='red';




//8.nextSibling
//includes line br
console.log(itemList.nextSibling);
//9.nextElementSibling
//not includes line br
console.log(itemList.nextElementSibling);
var title=document.querySelector('.title');
console.log(title.nextElementSibling);


//10.previousSibling
//include line br
console.log(itemList.previousSibling);
//11.previousElementSibling
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color='green';





//------------CREATING DOM ELEMENTS----------
//1.createElement
 var newDiv=document.createElement('div');
 console.log(newDiv);
 //1.add className
 //it sets the class name for your created element.
 newDiv.className='newDiv';
 //2.add id
 //it sets the id  for your created element.
 newDiv.id='hello';
 //3.add attribute
 //it sets the attribute to your created element.
 //inside the brackets first place is for attribute name and second place is for attribute value
 newDiv.setAttribute('title','hello div');

 //4.createTextNode
 var newDivText=document.createTextNode('Hello World');
 //add that txt to div
 newDiv.appendChild(newDivText)
 //now we have to decide that where we have to put our created element
 var container=document.querySelector('header .container');
 var h1=document.querySelector('header h1')
 container.insertBefore(newDiv,h1);