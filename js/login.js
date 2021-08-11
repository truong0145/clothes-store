
function login() {
    var userName = document.getElementById("userName").value;
    var password = document.getElementById("password").value;

    if(userName === "truong" && password === "123"){
        console.log(userName + " " + password);
        return true;
    }else{
        document.getElementById("errorMessage").innerHTML = "Wrong userName or password";
        return false;
    }
}