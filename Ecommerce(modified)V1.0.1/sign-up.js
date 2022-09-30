//get first and last name elements and their texts
var Fname = document.getElementById("Fname");
var Lname = document.getElementById("Lname");
var userMessage = document.getElementById("fText");
var lastName = document.getElementById("lText");

//get email element and its text
var email = document.getElementById("email");
var E_text = document.getElementById("emailValid");

//get password and confirmation elements
var password = document.getElementById("psw");
var pswText = document.getElementById("pswText");
var conf_psw = document.getElementById("cnfr-psw");
var conf_text = document.getElementById("re-pswText");

//get phone number element and its text
var p_number = document.getElementById("p-num");
var p_text = document.getElementById("num-Text");

//email regex for validation
var emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//password regex for validation
var pswRegex =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;


//validation function
function validation(){
    var flag = true;
    //first name validation
   if(Fname.value == ""){
        userMessage.innerHTML = "*Required";
        userMessage.style.color = "red";
        flag = false;
    }
    else if(isNaN(Fname.value) == false) {
        userMessage.innerHTML = "Text only";
        userMessage.style.color = "red";
        flag = false;
    }

    //last Name validation
    if(Lname.value == ""){
        lastName.innerHTML = "*Required";
        lastName.style.color = "red";
        flag = false;
    }
    else if(isNaN(Lname.value) == false){
        lastName.innerHTML = "Text only";
        lastName.style.color = "red";
        flag = false;
    }

    //email validation
    if(email.value == ""){
        E_text.innerHTML = "*Required";
        E_text.style.color = "red";
        flag = false;
    }
    else if(emailRegex.test(email.value) == false){
        E_text.innerHTML = "Enter Vaild E-mail";
        E_text.style.color = "red";
        flag = false;
    }

    //Password Validation
    if(password.value == ""){
        pswText.innerHTML = "*Required"
        pswText.style.color = "red"
        flag = false;
    }
    else if(pswRegex.test(password.value) == false){
        pswText.innerHTML = "Password must be at least 8 char & contain number & uppercase letters ";
        pswText.style.color = "red"
        flag = false;
    }

    // password confirmation validation
    if(conf_psw.value == ""){
        conf_text.innerHTML = "*Required";
        conf_text.style.color = "red"; 
        flag = false;
    }
    else if(conf_psw.value != password.value ){
        conf_text.innerHTML = "password doesn't match";
        conf_text.style.color = "red";
        flag = false;
    }
    if (conf_psw.value == password.value && conf_psw.value != ""){
        window.location.href = "file:///F:/ITI/JS/JS-Project/Ecommerce(modified)V1.0.1/index.html";
        flag = false;
    }

    // Number Validation
    if(isNaN(p_number.value) == true){
        p_text.innerHTML = "Numbers only";
        p_text.style.color = "red";
        flag = false;
    }else if(p_number.value.length < 11 && p_number.value.length != 0){
        p_text.innerHTML = "Enter your number";
        p_text.style.color = "red";
        flag = false;
    }
    
    return flag;
}

// storage data locally
function storage(){
    localStorage.setItem("First_Name", Fname.value);
    localStorage.setItem("Last_Name", Lname.value);
    localStorage.setItem("E-Mail", email.value);
    localStorage.setItem("Password", password.value);
    localStorage.setItem("Phone Number", p_number.value);
}