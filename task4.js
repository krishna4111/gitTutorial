


//GETELEMENTBYCLASSNAME
//this gives you list of array of itms
console.log(document.getElementsByClassName('container'));
var items=document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[3]);
//change text
items[1].textContent='hello';
items[1].style.fontWeight='bold';
//items[2].style.backgroundColor='#f4f4f4';
//make all the fields to red color and bold letters you should use loop

for(var i=0;i<items.length;i++){
    items[i].style.fontWeight='bold';
    items[i].style.color='red';
}
//backgrount color of 3rd item is green
items[2].style.backgroundColor='green'
