var sec=document.querySelector('.list-group-item:nth-child(2) ');
console.log(sec);
sec.style.backgroundColor='green';
var theird=document.querySelector('.list-group-item:nth-child(3)');
theird.style.display='none';


var secc=document.querySelectorAll('.list-group-item');
secc[1].style.color='green';

var odd=document.querySelectorAll('.list-group-item:nth-child(odd)');
for(var i=0;i<odd.length;i++){
    odd[i].style.backgroundColor='green';
}