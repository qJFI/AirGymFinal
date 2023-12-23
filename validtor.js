function validate_form ( ){
    alert("inside func");
    var valid=true;
    var password =document.getElementById("registerPassword").value;
    var confirmPassword =document.getElementById("registerConfrimPassword").value;
    if(password != confirmPassword){
        alert("Passwords Doesn't match");
        valid=false;
    }
    else{
        alert("Registration Complete");
    }
    
    
    return valid;
}