$(document).ready(function () {
    var emailExpr = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // var num_val = /^\d*$/.test(value);
    // var regex = new RegExp("^[a-zA-Z0-9]+$");
    $("#reg_submit").on('click', function () {
        var name = $("#name").val();
        var email = $("#email").val();
        var pwd = $("#pwd").val();

        if (name == '' || email == '' || pwd == '') {
            var name = document.myform.name.value;
            var email = document.myform.email.value;
            var pswd = document.myform.pwd.value;
            if (name == "") {
                alert("Name is mandatory");
                document.myform.name.focus();
                return false;
            } else if (name.length < 3) {
                alert("Username should be at least 3 char 3 number");
                document.myform.name.focus();
                return false;
            }
            // else if (!regex.test(name)) {
            //     alert("Username 3 number");
            //     document.myform.name.focus();
            //     return false;
            // } 
            else if (email == "") {
                alert("please enter the email");
                document.myform.email.focus();
            } else if (!emailExpr.test(email)) {
                alert("enter the valid email");
                document.myform.email.focus();
            } else if (pswd == "") {
                alert("password is mandatory");
                document.myform.pswd.focus();
                return false;
            }

        } else {
            alert("Registration Successfull");
            // var store = {
            //     'username': name,
            //     'useremail': email,
            //     'userpassword': pwd,
            // };
            // console.log("store");
            // localStorage.setItem("credentials", JSON.stringify(store));
            localStorage.setItem("username", name);
            localStorage.setItem("useremail", email);
            localStorage.setItem("userpassword", pwd);
            window.location.href = 'login.html';
        }
    });

});