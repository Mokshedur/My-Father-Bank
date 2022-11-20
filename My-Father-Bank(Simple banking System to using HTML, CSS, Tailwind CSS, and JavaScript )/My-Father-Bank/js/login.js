document.getElementById('login-submit').addEventListener('click', function() {
    // get user email
    const emailField = document.getElementById('email');
    const userEmail = emailField.value;
    // get user password
    const passwordField = document.getElementById('password');
    const userPassword = passwordField.value;
    // check email and password
    if (userEmail == 'momin20192020@gmail.com' && userPassword == '1234') {
        window.location.href = 'banking.html';
    } else {
        alert('Something wrong in your input field');
    }
});