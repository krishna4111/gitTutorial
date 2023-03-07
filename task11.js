let myObj={
    name:"krishna",
    email:"email@gmeil.com"
};
let myObj_serialized=JSON.stringify(myObj);
localStorage.setItem('myobj', myObj_serialized);
