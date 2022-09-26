let btnPass = document.querySelector('.eye');
let inputPass = document.querySelector('.pass');

btnPass.onclick = function () {
    if (inputPass.getAttribute('type') === 'password') {
        inputPass.setAttribute('type', 'text');
    }
    else {
        inputPass.setAttribute('type', 'password')
    }
}

function signup(e) {
    event.preventDefault();

    var name = document.getElementById('Names').value;
    var lastName = document.getElementById('LastName').value;
    var pass = document.getElementById('password').value;
    var email = document.getElementById('email').value;

    var user = {
        Names: name,
        LastName: lastName,
        password: pass,
        email: email,
    };
    var json = JSON.stringify(user);
    localStorage.setItem(name, json);
    console.log('user added');
}
signup();