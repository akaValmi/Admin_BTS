const opciones = {
    1: "Categoria y Productos",
    2: "Repartidores",
    3: "Asignar Ordenes",
    
}


const numAtributos = Object.keys(opciones).length;

function botonesGenerar() {
    let botonContainer = document.getElementById("botones-opciones");
    let botonesHTML = "";
    for (let i = 1; i <= numAtributos; i++) {
        botonesHTML += `<button class="boton" id=${i}>${opciones[i]}</button>`;
    }
    botonContainer.innerHTML = botonesHTML;
}
botonesGenerar();

function botonesEventos() {
    for (let i = 1; i <= numAtributos; i++) {
        document.getElementById(i).addEventListener("click", () => {
            if (i == 1) {
                window.location.href = "categorias.html";
            } else if (i == 2) {
                window.location.href = "repartidores.html";
            } else if (i == 3) {
                window.location.href = "asignar-ordenes.html";
            }
            
        });
    }
}

botonesEventos()