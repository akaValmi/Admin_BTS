const repartidores = [
    {
        nombre: "Juan Perez",
        telefono: "+504 9876-4321",
        contraseña: "123",
        correo: "juan@gmail.com"
    },
    {
        nombre: "Pedro Martinez",
        telefono: "+504 9876-4222",
        contraseña: "456",
        correo: "pedro@gmail.com"
    },
    {
        nombre: "Maria Rodriguez",
        telefono: "+504 9876-4777",
        contraseña: "789",
        correo: "maria@gmail.com"
    }
];



function generarRepartidor(){
    let cardContainer = document.getElementById("container-cards");
    let cardHTML = "";

    for (let i = 0; i < repartidores.length; i++) {
        cardHTML += `
        <div class="card" style="max-width: 18rem;">
        <div class="card-header">${repartidores[i].nombre}</div>
        <div class="card-body">
          <h4 class="card-title">${repartidores[i].telefono}</h4>
          <p class="card-text">${repartidores[i].correo}</p>
        </div>
      </div>
      `;
    }

    cardContainer.innerHTML = cardHTML;
}


generarRepartidor();

