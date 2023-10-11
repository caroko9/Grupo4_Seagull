  window.addEventListener("load", function () {
    let formulario = document.querySelector("form.formularioo");

    formulario.addEventListener("submit", function (event) {
      let ulErrores = document.querySelector("div.errores ul");
      ulErrores.innerHTML = ""; // Limpiar errores anteriores

      // Validación del campo Nombre
      let campoNombre = document.querySelector("input[name=nombre]");
      let nombreError = document.querySelector(".nombre-error");
      if (campoNombre.value == "") {
        event.preventDefault(); // Evitar el envío del formulario
        nombreError.innerHTML = "Debes completar este campo";
      } else {
        nombreError.innerHTML = ""; // Limpiar error si es válido
      }

      // Validación del campo Email
      let campoEmail = document.querySelector("input[name=email]");
      let emailError = document.querySelector(".email-error");
      let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      if (campoEmail.value == "") {
        event.preventDefault();
        emailError.innerHTML = "Debes completar el campo Email";
      } else if (!emailPattern.test(campoEmail.value)) {
        event.preventDefault();
        emailError.innerHTML = "El campo Email no tiene un formato válido";
      } else {
        emailError.innerHTML = ""; // Limpiar error si es válido
      }

      // Validación del campo Descripción
      let campoDescripcion = document.querySelector("textarea[name=descripcion]");
      let descripcionError = document.querySelector(".descripcion-error");
      if (campoDescripcion.value == "") {
        event.preventDefault();
        descripcionError.innerHTML = "Debes completar el campo Descripción";
      } else {
        descripcionError.innerHTML = ""; // Limpiar error si es válido
      }

      // Validación del campo Imagen
      let campoImagen = document.querySelector("input[name=imagen]");
      let imagenError = document.querySelector(".imagen-error");
      if (campoImagen.files.length === 0) {
        event.preventDefault();
        imagenError.innerHTML = "Debes cargar al menos una imagen";
      } else {
        imagenError.innerHTML = ""; // Limpiar error si es válido
      }

      // Validación del campo País
      let campoPais = document.querySelector("input[name=pais]");
      let paisError = document.querySelector(".pais-error");
      if (campoPais.value == "") {
        event.preventDefault();
        paisError.innerHTML = "Debes completar el campo País";
      } else {
        paisError.innerHTML = ""; // Limpiar error si es válido
      }
    });
  });
