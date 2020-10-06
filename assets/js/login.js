$(document).ready(function () {
    $("#login_submit").on('click', function () {
        var name = $("#name").val();
        var pwd = $("#pwd").val();
        if (name == '' || pwd == '') {
            alert("Please fill all the fields");
        } {
            var username = localStorage.getItem("username");
            var useremail = localStorage.getItem("useremail");
            var userpassword = localStorage.getItem("userpassword");
            if (name == username || useremail == username) {
                if (userpassword == pwd) {
                    alert("Login successfull");
                    window.location.href = 'home.html';
                } else {
                    alert('invalid username/password');
                }
            } else {
                alert('User does not exist');
            }

        }
    });
});