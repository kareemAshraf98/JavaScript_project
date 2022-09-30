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

}
jQuery(window).load(function(){
  sessionStorage.setItem("status", loggedin);
});







