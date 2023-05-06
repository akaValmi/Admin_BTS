const formulario = document.getElementById('mi-formulario');
const correo = document.getElementById('correo');
const contraseña = document.getElementById('contraseña');

formulario.addEventListener('submit', (evento) => {
  evento.preventDefault(); 

  
  if (correo.value === '' || contraseña.value === '') {
    alert('Por favor, rellena todos los campos.');
    return;
  }
  const validarAdmin = async () => {
    const response = await fetch('http://localhost:3002/admin/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        correo: correo.value,
        contraseña: contraseña.value
      })
    });
  
    if (!response.ok) {
      throw new Error('Error al iniciar sesión');
    }
  
    window.location.href = 'principal.html';
  };

  validarAdmin().catch((error) => {
    console.error(error);
    alert('Error al iniciar sesión');
  });
});
