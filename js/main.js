var loginEmail = document.querySelector('#loginEmail')
var loginPass = document.querySelector('#loginPass')
var loginBtn = document.querySelector('#loginBtn')
var userNameInput = document.querySelector('#userNameInput')
var userEmailInput = document.querySelector('#userEmailInput')
var userPassInput = document.querySelector('#userPassInput')
var signupBtn = document.querySelector('#signupBtn')
var inputs = document.getElementsByClassName('form-control');
var checkInputs = document.querySelector('#checkInputs')
var wrongInputs = document.querySelector('#wrongInputs')
var confirmMsg = document.getElementById('confirmMsg')
var tryAgainMsg = document.getElementById("tryAgainMsg");
var users = []

if (JSON.parse(localStorage.getItem('usersList')) != null) {
    users = JSON.parse(localStorage.getItem('usersList'));

}

if (signupBtn != null) {
    signupBtn.addEventListener("click", signup)
    function signup() {
        if (validation() == true && isEmailExist() == false) {
            var user = {
                name: userNameInput.value,
                email: userEmailInput.value,
                password: userPassInput.value
            }
            users.push(user)
            localStorage.setItem("usersList", JSON.stringify(users));
            tryAgainMsg.classList.add("d-none");
            confirmMsg.classList.replace("d-none", "d-block");
            
            clear();
        }
        else {
            confirmMsg.classList.replace("d-block", "d-none");
       
            tryAgainMsg.classList.replace("d-none", "d-block");
        }

    }
    var userNameAlert = document.querySelector('#userNameAlert')
    function userNameValidate() {
        var rejexName = /^[A-Za-z]{3,10}(\s?[A-Za-z]{3,10})?$/
        if (rejexName.test(userNameInput.value)) {
            userNameAlert.classList.add('d-none')
            return true

        }
        else {
            userNameAlert.classList.remove('d-none')
            return false
        }

    }
    var userEmailAlert = document.querySelector('#userEmailAlert')

    function userEmailValidate() {

        var rejexEmail = /@[a-z]{5,10}(\.com)$/
        if (rejexEmail.test(userEmailInput.value)) {
            userEmailAlert.classList.add('d-none')
            return true

        }
        else {
            userEmailAlert.classList.remove('d-none')
            return false
        }

    }
    var userPasswordAlert = document.querySelector('#userPasswordAlert')

    function userPasswordValidate() {

        var rejexPass = /^.{5,15}$/
        if (rejexPass.test(userPassInput.value)) {
            userPasswordAlert.classList.add('d-none')
            return true

        }
        else {
            userPasswordAlert.classList.remove('d-none')
            return false
        }

    }

    function validation() {
        userNameValidate();
        userEmailValidate();
        userPasswordValidate();
        if ((userNameValidate() == true && userEmailValidate() == true && userPasswordValidate() == true)) {
            return true
        }
        else {
            return false
        }

    }
}
function clear() {
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].value = '';
    }
}
function isEmailExist() {
    for (var i = 0; i < users.length; i++) {
        if (users[i].email.toLowerCase() == userEmailInput.value.toLowerCase()) {
            accountExistMsg.classList.replace("d-none", "d-block");
            return true;
        }

    }
    return false;
}

if (loginBtn != null) {
    function isLoginEmpty() {

        if (loginEmail.value == "" || loginPass.value == "") {
            return false
        } else {
            return true
        }
    }

    loginBtn.addEventListener("click", login)

    function login() {
        if (isLoginEmpty == false) {
            checkInputs.classList.replace("d-none", "d-block");
        }
        for (var i = 0; i < users.length; i++) {
            if (users[i].email.toLowerCase() == loginEmail.value.toLowerCase() && users[i].email.toLowerCase() == loginEmail.value.toLowerCase()) {
                localStorage.setItem('userName', users[i].name)
                loginBtn.href = "welcome.html"
            }
            else {
                wrongInputs.classList.replace("d-none", "d-block");
            }
        }
    }
}
var home = document.getElementById('home')

if (home != null) {
    var username = localStorage.getItem('userName')
    if (username != null) {
        document.getElementById('username').innerHTML = " welcome " + username
    }
}







