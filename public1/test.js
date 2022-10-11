const userBase = [
    { name: "Paul", age: "21", likes: "bread"},
    { name: "Arthur", age: "20", likes: "radish"},
    { name: "Fanny", age: "18", likes: "Boba"},
    { name: "Julian", age: "19", likes: "Manga"},
    { name: "Lucas", age: "22", likes: "Nutella"}
  ]

function btn() {  
    window.location.href = "page2.html";
}  

function btn1() {  
    window.location.href = "page3.html";
}  

function btn2() {  
    window.location.href = "index.html";
}  

let users = [];

const addUser = (ev) => {
    ev.preventDefault();
    let user = {
        FirstName : document.getElementById('firstname').value,
        LastName : document.getElementById('lastname').value
        
    }
    document.forms[0].reset();

    var cpt = 0;
    for (var i = 0; i < userBase.length; i++) {
        if (user.FirstName != userBase[i].name){
            cpt += 1;  
        }
    }

    if (cpt > (i-1)){
        alert('Please enter an other firstname'); 
    }
    else{
        users.push(user);
        localStorage.setItem('The users are : ', JSON.stringify(users));
    }

    
    var res = localStorage.getItem('The users are : ');
    console.log(res);
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('button').addEventListener('click', addUser);
});



