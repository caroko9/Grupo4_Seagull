document.addEventListener('DOMContentLoaded', function () {
  const formulario = document.forms['escuelaCreada'];

  formulario.addEventListener('submit', function (event) {
    let valid = true;

    // Validación del campo "nombre"
    const nombreInput = formulario.querySelector('#nombre');
    if (nombreInput.value.trim() === '') {
      alert('Por favor, ingresa un nombre para el emprendimiento.');
      valid = false;
    }

    // Validación del campo "email"
    const emailInput = formulario.querySelector('#email');
    const emailValue = emailInput.value.trim();
    if (emailValue === '' || !validateEmail(emailValue)) {
      alert('Por favor, ingresa una dirección de correo electrónico válida.');
      valid = false;
    }

    // Validación del campo "descripcion"
    const descripcionInput = formulario.querySelector('#descripcion');
    if (descripcionInput.value.trim() === '') {
      alert('Por favor, describe tu emprendimiento.');
      valid = false;
    }

    // Validación del campo "imagen"
    const imagenInput = formulario.querySelector('#imagen');
    if (!imagenInput.files.length) {
      alert('Por favor, carga al menos una imagen.');
      valid = false;
    }

    // Validación del campo "pais"
    const paisInput = formulario.querySelector('#pais');
    if (paisInput.value.trim() === '') {
      alert('Por favor, selecciona un país.');
      valid = false;
    }

    if (!valid) {
      event.preventDefault(); // Evita el envío del formulario si hay errores de validación.
    }
  });

  // Función para validar el formato del correo electrónico
  function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }
});
