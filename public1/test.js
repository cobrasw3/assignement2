function btn() {  
    alert("you will be redirected to the second page"); 
    window.location.href = "page2.html";
}  

function btn1() {  
    alert("you will be redirected to the third page"); 
    window.location.href = "page3.html";
}  

function btn2() {  
    alert("you will be redirected to the index"); 
    window.location.href = "index.html";
}  

let users = [];

const addUser = (ev) => {
    ev.preventDefault();
    let user = {
        FirstName : document.getElementById('firstname').value,
        LastName : document.getElementById('lastname').value
    }
    users.push(user);
    document.forms[0].reset();

    console.warn('added', {users});
    let pre = document.querySelector('#msg pre');
    pre.textContent = '\n' + JSON.stringify(users, '\t', 2);

    localStorage.setItem('The users are : ', JSON.stringify(users));
}
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('button').addEventListener('click', addUser);
});



