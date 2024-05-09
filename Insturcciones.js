let button = document.getElementById("login")
let nameUser = document.getElementById("name")
let password = document.getElementById("password")


button.addEventListener("click", function() {
    if( password.value.length != 8 ){
        alert("verifique la Contraseña")
    } else{
        alert("Contraseña permitida")
if ( nameUser.value.length != 10){
alert("Nombre mal")
} 
else{alert("Nombre Bien")}
    }});
    
    function alerta(){
        alert("hola")
    }