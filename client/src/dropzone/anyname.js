var passwordInput = document.getElementById("password");

var addPasswordInputEventListeners = function () {
    // TODO: Task 4 - Listen for the "input" event on passwordInput and confirmPasswordInput.
    //       Call the checkPasswords function
    passwordInput.addEventListener("input", checkPasswords, false);

};


var checkPasswords = function () {
    console.log("pi",passwordInput.value);

}

addPasswordInputEventListeners();
