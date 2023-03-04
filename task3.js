//it shows you what are the properties and methods attached to it
console.dir(document);

//local host address
console.log(document.domain);

//entire page url
console.log(document.URL);

//get title
console.log(document.title);

//change the title
document.title='hello bro';
console.log(document.title);

//full head section
console.log(document.head);

// full body section
console.log(document.body);

//it gives you array of html collection in dom
console.log(document.all);
console.log(document.all[5]);

//Collection of form arrays
console.log(document.forms);

//collection of links as array
console.log(document.links);

//colection of imgs as array
console.log(document.images);

var header=document.querySelector('#main-header');
header.style.borderBottom='black solid 10px'

var additem=document.querySelector('.title');
additem.textContent='ADD ITEM';
additem.style.fontWeight='bold';
additem.style.color='green';
console.log(additem.innerText);
console.log(additem.textContent)