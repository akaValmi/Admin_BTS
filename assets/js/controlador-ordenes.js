const orden = [{
    productos: "pizza jaja",
    direccion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis",
    cliente: "Hidetaka Miyazaki",
    monto: "cinco peso"
  },
  {
    productos: "loca cola jaja",
    direccion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis",
    cliente: "Hideo Kojima",
    monto: "cinco peso"
  }
];
  


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

function generarPedidos(){
    let cards = document.getElementById("cards");
    let pedidosHTML = "";
    for (let i = 0; i < orden.length; i++) {
        // Agregar un id único al botón Asignar
        pedidosHTML += ` <div class="card text-bg-primary mb-3" style="max-width: 18rem;">
        <div class="card-header">Entrega</div>
        <div class="card-body">
          <p class="card-text">
           <b>Productos:</b> ${orden[i].productos} <br>
           <b>Dirección:</b> ${orden[i].direccion} <br>
          <b>Cliente:</b> ${orden[i].cliente} <br>
          <b>Monto a pagar:</b> ${orden[i].monto}
          </p>
        </div>
        
        <!-- Button trigger modal -->
    <div class="card-footer">
        <button type="button" class="btn btn-primary" id="boton-asignar" data-bs-toggle="modal" data-bs-target="#exampleModal-${i}">
      Asignar
    </button>
    </div>    
    <!-- Modal -->
    <div class="modal fade" id="exampleModal-${i}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">Asignación de Productos</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <!-- botones -->  

        <select name="repartidores" id="repartidores">
            <option>${repartidores[i].nombre}</option>
            <option>${repartidores[i+1].nombre}</option>
            <option>${repartidores[i+1].nombre}</option>
            <option>${repartidores[i].nombre}</option>
        </select>
          </div>
          <div class="modal-footer">
            <button type="button" id="cerrar-footer-modal" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
            <button type="button" id="asignar-footer-modal" class="btn btn-primary">Asignar</button>
          </div>
        </div>
      </div>
    </div>


      </div>
`;
    }
    cards.innerHTML = pedidosHTML;

}



generarPedidos();
