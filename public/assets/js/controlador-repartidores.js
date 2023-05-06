function generarRepartidor() {
  let cardContainer = document.getElementById("container-cards");
  let cardHTML = "";

  const getRepartidors = async () => {
    const response = await fetch('http://localhost:3002/repartidores');
    if (!response.ok) {
      throw new Error('Error al obtener los repartidores');
    }
    const repartidors = await response.json();
    return repartidors;
  };
    getRepartidors().then(repartidors => {
    for (let i = 0; i < repartidors.length; i++) { 
          cardHTML += `
          <div class="card" style="max-width: 18rem;">
            <div class="card-header">${repartidors[i].nombre}</div>
            <div class="card-body">
              <h4 class="card-title">${repartidors[i].telefono}</h4>
              <p class="card-text">${repartidors[i].correo}</p>
            </div>
            <button class="eliminar" onclick="eliminarRepartidor('${repartidors[i]._id}')">Eliminar</button>
          </div>
          
        `;
        }
        cardContainer.innerHTML = cardHTML;
    }).catch(error => {
    console.error(error);
  });
}
generarRepartidor();


async function eliminarRepartidor(repartidorId) {
  try {
    const response = await fetch(`http://localhost:3002/repartidores/eliminarRepartidor/${repartidorId}`, {
      method: "DELETE",
    });
    if (response.ok) {
      generarRepartidor();
      alert("Repartidor eliminado exitosamente");
      window.location.reload();
    } else {
      alert("Hubo un error al eliminar el repartidor");
    }
  } catch (error) {
    console.error(error);
  }
}


const form = document.getElementById("myForm");

form.action = "http://localhost:3002/repartidores/registroRepartidores";

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const correo = document.getElementById("correo").value;
  const contraseña = document.getElementById("contraseña").value;
  const telefono = document.getElementById("telefono").value;

  const data = {
    nombre,
    correo,
    contraseña,
    telefono,
  };

  const response = await fetch(form.action, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (response.ok) {
    alert("Repartidor agregado exitosamente");
    window.location.reload(); 
  } else {
    alert("Hubo un error al agregar el repartidor");
  }
});
