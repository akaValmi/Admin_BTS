let cardsHTML = "";
const categoriaId = localStorage.getItem("categoriaSeleccionada");

function cardsGenerar() {
  let cardsContainer = document.getElementById("cards-productos");
  const getCards = async () => {
    const response = await fetch(`http://localhost:3002/categorias/${categoriaId}`);
    if (!response.ok) {
      throw new Error('Error al obtener los productos');
    }
    const categoria = await response.json();
    return categoria;
  };
  getCards().then(categoria => {
    for (let i = 0; i < categoria.productos.length; i++) { 
      cardsHTML += `
      <div class="card">
        <h2>${categoria.productos[i].nombreProducto}</h2>
        <p>${categoria.productos[i].descripcion}</p>
        <p class="precio">${categoria.productos[i].precio}</p> 
        <button class="eliminar" onclick="eliminarProducto('${categoria.productos[i]._id}')">Eliminar</button>
      </div>`;
    }
    cardsContainer.innerHTML = cardsHTML;
  }).catch(error => {
    console.error(error);
  }); 
}

cardsGenerar();

async function eliminarProducto(productoId) {
  try {
    const response = await fetch(`http://localhost:3002/productos/eliminarProducto/${productoId}`, {
      method: "DELETE",
    });
    if (response.ok) {
      // Actualiza la lista de productos después de eliminar el producto
      cardsGenerar();
      alert("Producto eliminado exitosamente");
      window.location.reload();
    } else {
      alert("Hubo un error al eliminar el producto");
    }
  } catch (error) {
    console.error(error);
  }
}




const form = document.getElementById("myForm");

form.action = `http://localhost:3002/productos/registroProductos/${categoriaId}`;

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const nombreProducto = document.getElementById("nombreProducto").value;
  const imgProducto = document.getElementById("imgProducto").value;
  const descripcion = document.getElementById("descripcion").value;
  const precio = document.getElementById("precio").value;

  const data = {
    nombreProducto,
    imgProducto,
    descripcion,
    precio,
  };

  const response = await fetch(form.action, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (response.ok) {
    alert("Producto agregado exitosamente");
    window.location.reload();
  } else {
    alert("Hubo un error al agregar el producto");
  }
});