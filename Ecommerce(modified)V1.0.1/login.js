// function getVal() {
// var userName = document.getElementById('userName').value; 
// var passWord = document.getElementById('passWord').value;
//     if(userName == "admin" && passWord == "123") {
//         alert("Welcome!");
//     }
//     else {
//         alert("Not Registered!");
//     }
        
// }    

function getVal() {
  var storedEmail = localStorage.getItem("E-Mail");
  var storedPass = localStorage.getItem("Password");

    var email = document.getElementById('userName');
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    var password = document.getElementById('passWord');
    var pfilter = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;     

    if (!filter.test(email.value)) {
      alert('Please provide a valid email address');
      email.focus;
    return false;
    }

    if(!pfilter.test(password.value)) { 
    alert('Invalid Password...')
    password.focus;
    return false;
    }
    if(email.value == storedEmail && password.value == storedPass){
      window.location.href = "file:///F:/ITI/JS/JS-Project/Ecommerce(modified)V1.0.1/index.html";
      console.log(storedEmail);
      console.log(storedPass);
      return false;
    }

}

// jQuery(window).load(function(){
//   sessionStorage.setItem("status", loggedin);
// });







