var users = [];

function Users(email,password){
    this.email = email;
    this.password = password;
}

function signUp(){

    var email = document.getElementById("email").value
    var password = document.getElementById("password").value
    // console.log(email)
    // console.log(password)

    var user = new Users(email,password)
    // console.log(user)

    users.push(user)
    console.log(users)

    document.getElementById("email").value = "";
    document.getElementById("password").value = "";

    var userData = onGetStorage()
    console.log(userData)

    for(var i =0 ; i<userData.length ; i++){
        if(userData[i].email === email){
            alert("Email already Registered");
        }
        else{
            onSetStorage()
        }
        
        
        // console.log(i)
    }


}

function login(){

}

function onSetStorage(){
    var newUser = users;
    // console.log("newUser Hello",newUser)
    var converted = JSON.stringify(newUser)
    localStorage.setItem("users",converted)

}

function onGetStorage(){

    var data = localStorage.getItem("users")
    var parseData = JSON.parse(data)
    // console.log(parseData);
    return parseData
}

function onRemoveStorage(){

}