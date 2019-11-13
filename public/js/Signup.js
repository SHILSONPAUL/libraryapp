function validateForm(x){
   
    var pass1=x.Password1.value;
    var pass2=x.Password2.value;
    var num =  /^\d{10}$/;
    var n= x.phone.value;
    var email= x.mail.value;
    var res=false;
    var y=document.getElementsByName("check[]");
    for(i in y){
        if(y[i].checked){
        res=true;    
        break;
        }
    }
    

    var email_re = /\S+@\S+\.\S+/;
    if(email_re.test(email) == false){
        alert("Please enter a valid email");
        return false;
    }
    else if(pass1 != pass2){
        alert("Password doesn't match. Please enter same password");
        return false;
    }

    else if(num.test(n) == false){
        alert("please enter a valid phone number");
        return false;
    }
    else if(!res){
        alert("Please check atleast one box")
    }
}