const opciones = {
    "Ensaladas": [
      {"nombre": "Ensalada César", "precio": 8.99, "descripcion": "Lechuga, pollo, queso parmesano, croutones y salsa César"},
      {"nombre": "Ensalada de quinoa", "precio": 9.99, "descripcion": "Lechuga, quinoa, tomate, cebolla, maíz, garbanzos y salsa de yogur"},
      {"nombre": "Ensalada de espinacas", "precio": 7.99, "descripcion": "Espinacas, queso feta, nueces, cebolla y salsa de yogur"}
    ],
    "Pizzas vegetarianas": [
      {"nombre": "Pizza Margarita vegetariana", "precio": 11.99, "descripcion": "Tomate, mozzarella, champiñones y aceitunas"},
      {"nombre": "Pizza de verduras asadas", "precio": 12.99, "descripcion": "Tomate, mozzarella, calabacín, berenjena, pimiento y cebolla"},
      {"nombre": "Pizza de champiñones y calabacín", "precio": 10.99, "descripcion": "Tomate, mozzarella, champiñones y calabacín"}
    ],
    "Pizzas": [
      {"nombre": "Pizza Margarita", "precio": 9.99, "descripcion": "Tomate, mozzarella y albahaca"},
      {"nombre": "Pizza de pepperoni", "precio": 12.99, "descripcion": "Tomate, mozzarella, pepperoni y orégano"},
      {"nombre": "Pizza cuatro quesos", "precio": 11.99, "descripcion": "Tomate, mozzarella, parmesano, gorgonzola y queso azul"}
    ],
    "Bebidas": [
      {"nombre": "Agua mineral", "precio": 1.99, "descripcion": "Agua mineral natural"},
      {"nombre": "Refresco de cola", "precio": 2.99, "descripcion": "Refresco de cola normal"},
      {"nombre": "Cerveza rubia", "precio": 3.99, "descripcion": "Cerveza rubia artesanal"}
    ],
    "Postres": [
      {"nombre": "Tarta de chocolate", "precio": 6.99, "descripcion": "Tarta de chocolate con crema"},
      {"nombre": "Tiramisú", "precio": 5.99, "descripcion": "Tiramisú con café"},
      {"nombre": "Helado de vainilla", "precio": 3.99, "descripcion": "Helado de vainilla con crema"}
    ]
  }


let botonesHTML = "";

function botonesGenerar() {
    let botonContainer = document.getElementById("botones-opciones");
    botonesHTML = ``;
    Object.keys(opciones).forEach(function(categoria) {
      if (opciones[categoria]) {
        botonesHTML += `
          <div class="boton-container">
            <button class="boton" id="${categoria}-boton">${categoria}</button>
            <button class="eliminar-boton" onclick="eliminarCategoria('${categoria}')"><i class="fa-solid fa-trash"></i></button>
          </div>`;
    }});
    botonContainer.innerHTML = botonesHTML;


    document.querySelectorAll(".boton").forEach(function(boton) {
        boton.addEventListener("click", function() {
          const categoria = boton.id.split("-")[0];
          const productos = opciones[categoria];
          const infoProductos = document.getElementById("productos-info");
      
          const info = document.getElementById("info").style.display = "none";
      
          let listaProductos = "";
          for (let i = 0; i < productos.length; i++) {
            const producto = productos[i];
            listaProductos += `
              <div class="card card-productos">
                <p class="p">${producto.nombre} - $${producto.precio} - ${producto.descripcion}</p>
                <button class="eliminar-boton" onclick="eliminarCategoria('${categoria}')"><i class="fa-solid fa-trash"></i></button>
              </div>
              
            `;
          }
      
          const producto = `
            <div id="productos-categorias">
              <h2>${categoria}</h2>
              <div class="productos-lista">
                ${listaProductos}
              </div>
              <form>
                <label for="nombre">Nombre:</label>
                <input type="text" id="nombre">
                <label for="descripcion">Descripción:</label>
                <input type="text" id="descripcion">
                <label for="precio">Precio:</label>
                <input type="number" id="precio">
                <button id="agregar-producto">Agregar producto</button>
              </form>
            </div>
          `;
      
          infoProductos.innerHTML = producto;
      
          const agregarProductoBtn = document.getElementById("agregar-producto");
          agregarProductoBtn.addEventListener("click", function(event) {
            event.preventDefault();
            const nombreInput = document.getElementById("nombre");
            const precioInput = document.getElementById("precio");
           
      
            const nombre = nombreInput.value.trim();
            const precio = Number(precioInput.value.trim());
            const descripcion = document.getElementById("descripcion").value.trim();
      
            if (!nombre || !precio) {
              alert("Por favor ingrese un nombre y precio válido.");
              return;
            }
      
            const listaProductosEl = document.querySelector(".productos-lista");
            const productoId = `producto-${categoria}-${productos.length + 1}`;
            const producto = { id: productoId, nombre, precio };
            productos.push(producto);
      
            const productoEl = `
              <div class="card card-productos">
                <p class="p">${nombre} - ${precio} - ${descripcion}</p>
                <button class="eliminar-boton" onclick="eliminarCategoria('${categoria}')"><i class="fa-solid fa-trash"></i></button>
              </div>
            `;
            listaProductosEl.insertAdjacentHTML("beforeend", productoEl);
      
            nombreInput.value = "";
            precioInput.value = "";
          });
      
         
        });
      });
      
      

      
      
  }
botonesGenerar();


function eliminarCategoria(id) {
  delete opciones[id];
  console.log(opciones);
  botonesGenerar();
}

function agregarCategoria() {
    const nombreCategoria = document.getElementById("nombreCategoria").value;
    if (nombreCategoria == "") {
        alert("Debe ingresar un nombre para la categoría");
        return;
    }
    const nuevaCategoriaId = Object.keys(opciones).length + 1;
    opciones[nuevaCategoriaId] = nombreCategoria;    
    botonesHTML += `<button class="boton boton-agregar" id=${nuevaCategoriaId}>${nombreCategoria}</button>`;
    document.getElementById("botones-opciones").innerHTML = botonesHTML;
    document.getElementById("modalCategoria").classList.remove("show");
    document.getElementById("modalCategoria").setAttribute("aria-hidden", "true");
    document.querySelector(".modal-backdrop").remove();
}

