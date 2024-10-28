document.getElementById("Age").addEventListener('change', (e) => {
    document.getElementById("DisplayAge").textContent = e.target.value
})

document.getElementById('RegisterForm').addEventListener('reset', () => {
    document.getElementById("DisplayAge").textContent = 0
})

function handleSubmit(event){
    event.preventDefault()
    var firstName=document.getElementById("FirstName").value
    var lastName=document.getElementById("LastName").value
    var gender=document.getElementById("Male").checked?document.getElementById("Male").value:document.getElementById("Female").value;
    var email=document.getElementById("Email").value
    var phoneNumber=document.getElementById("PhoneNumber").value
    var classs=document.getElementById("Class").value
    var password=document.getElementById("Password").value
    var confirmPassword=document.getElementById("ConfirmPassword").value
    var age=document.getElementById("Age").value
    if(classs!="1"&&age!=0){
        if(password===confirmPassword){
            var user={firstName,lastName,gender,email,phoneNumber,classs,age}
            localStorage.setItem("user",JSON.stringify(user))
            window.open("task1/display.html","_self")
        }
        else
            alert("Password doesn't match with confirm password")
    }
    else{
        alert("Please fill all details.")
    }
}