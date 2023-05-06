function generarOrden() {
  let cardContainer = document.getElementById("cards-container");
  let cardHTML = "";

  const getRepartidors = async () => {
    const response = await fetch('http://localhost:3002/ordenes');
    if (!response.ok) {
      throw new Error('Error al obtener las ordenes');
    }
    const ordenes = await response.json();
    return ordenes;
  };
  getRepartidors().then(ordenes => {
    for (let i = 0; i < ordenes.length; i++) { 
      let productosHTML = "";
      for (let j = 0; j < ordenes[i].productos.length; j++) {
        productosHTML += `${ordenes[i].productos[j].nombreProducto}, `;
      }
      productosHTML = productosHTML.slice(0, -2); // Eliminar la última coma y espacio
      cardHTML += `
        <div class="card text-bg-primary mb-3" style="max-width: 18rem;">
          <div id="container-cards">
            <div class="card-header">Entrega</div>
            <div class="card-body">
              <p class="card-text">
                <b>Productos:</b> ${productosHTML} <br>
                <b>Dirección:</b> ${ordenes[i].direccion} <br>
                <b>Cliente:</b> ${ordenes[i].nombreCliente} <br>
                <b>Monto a pagar:</b> ${ordenes[i].montoPagar}
              </p>
            </div>
            <div class="card-footer">
              <button type="button" id="boton-asignar" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" 
                onclick="localStorage.setItem('idOrden', '${ordenes[i]._id}')">
                Asignar
              </button>
            </div>       
          </div>
        </div>
      `;
    }
    cardContainer.innerHTML = cardHTML;
}).catch(error => {
  console.error(error);
});
}
generarOrden(); 



function generarRepartidor() {
  let cardContainer = document.getElementById("repartidores");
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
          
                  <option value="${repartidors[i]._id}">${repartidors[i].nombre}</option>
                            
        `;
        }
        cardContainer.innerHTML = cardHTML;
    }).catch(error => {
    console.error(error);
  });
}
generarRepartidor();



function asignarRepartidor() {
  const selectRepartidor = document.getElementById("repartidores");
  const repartidorId = selectRepartidor.value;
  const idOrden = localStorage.getItem("idOrden");

  const actualizarRepartidor = async () => {
    const response = await fetch("http://localhost:3002/repartidores/actualizarRepartidor", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ idRepartidor: repartidorId, idOrden }),
    });
    if (!response.ok) {
      throw new Error("Error al actualizar el repartidor");
    }
    alert("La orden ha sido asignada al repartidor correctamente");
  };

  actualizarRepartidor().catch((error) => {
    console.error(error);
    alert("Error al asignar la orden al repartidor");
  });
}
