function validateLogin(x){
    var email= x.Email.value;
    var email_re = /\S+@\S+\.\S+/;
    var pass=x.loginpassword.value;
   if(email_re.test(email) == false){
        alert("Please enter a valid email");
        return false;
    }
    else if(pass.length<6){
        alert("Please enter atleast six characters");
        return false;  
    }

}
