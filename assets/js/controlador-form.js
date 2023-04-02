const admins = 
  {
    correo: "admin@gmail.com",
    contraseña: "1234"
  }
;

function validarFormulario() {
    var correo = document.getElementById("correo").value;
    var contraseña = document.getElementById("contraseña").value;
  

    if (correo != admins.correo || contraseña != admins.contraseña) {
      alert("Por favor, complete todos los campos.");
      return false;
    } else {
      window.location.href = "principal.html";
      return true;
    }
  }
  