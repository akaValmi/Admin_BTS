function botonesGenerar() {
  let botonContainer = document.getElementById("botones-opciones");
  botonesHTML = ``;
  const getCategorias = async () => {
    const response = await fetch('http://localhost:3002/categorias');
    if (!response.ok) {
      throw new Error('Error al obtener las categorias');
    }
    const categorias = await response.json();
    return categorias;
  };
  getCategorias().then(categorias => {
    for (let i = 0; i < categorias.length; i++) { 
      botonesHTML += `
      <div class="boton-container">
        <button class="boton" id="${categorias[i]}-boton">${categorias[i].nombreCategoria}</button>
        <button class="eliminar-boton" id="${categorias[i]._id}-eliminar"><i class="fa-solid fa-trash"></i></button>
      </div>`;
    }
          
    botonContainer.innerHTML = botonesHTML;
    
    // Obtener una lista de todos los botones
    const botones = document.querySelectorAll(".boton");
    const botonesEliminar = document.querySelectorAll(".eliminar-boton");

    // Agregar un eventListener a cada botón
    botones.forEach((boton, i) => {
      boton.addEventListener("click", function() {
        localStorage.setItem("categoriaSeleccionada", categorias[i]._id);
        window.location.href = "productos.html";
      });
    });

    //eventListener del botón de eliminar
    botonesEliminar.forEach((botonEliminar) => {
      botonEliminar.addEventListener("click", function(e) {
        e.stopPropagation(); //Evita que se propague el evento al botón de la categoría
        const categoriaId = botonEliminar.id.replace('-eliminar', '');
        eliminarCategoria(categoriaId);
      });
    });
  
  }).catch(error => {
    console.error(error);
  }); 
}

botonesGenerar();

async function eliminarCategoria(categoriaId) {
  try {
    const response = await fetch(`http://localhost:3002/categorias/eliminarCategoria/${categoriaId}`, {
      method: "DELETE"
    });
    if (!response.ok) {
      throw new Error('Error al eliminar la categoría');
    }
    alert('Categoría eliminada exitosamente');
    location.reload();
  } catch (error) {
    console.error(error);
    alert('Error al eliminar la categoría');
  }
}




const form = document.getElementById("myForm");

form.action = "http://localhost:3002/categorias/registroCategorias";

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const nombreCategoria = document.getElementById("nombreCategoria").value;
  const imgCategoria = document.getElementById("imgCategoria").value;

  const data = {
    nombreCategoria,
    imgCategoria,
  };

  const response = await fetch(form.action, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (response.ok) {
    alert("Categoría agregada exitosamente");
    window.location.reload(); // recarga la página después de agregar la categoría
  } else {
    alert("Hubo un error al agregar la categoría");
  }
});
