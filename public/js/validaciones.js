window.addEventListener("load", function () {
    let formulario = document.querySelector("form.formulario");

    formulario.addEventListener("submit", function (event) {
        let ulErrores = document.querySelector("div.errores ul");
        ulErrores.innerHTML = ""; // Limpiar errores anteriores

        // Validación del campo Nombre
        let campoNombre = document.querySelector("input.nombre");
        let nombreError = document.querySelector(".nombre-error");
        if (campoNombre.value == "") {
            event.preventDefault(); // Evitar el envío del formulario
            nombreError.innerHTML = "Debes completar este campo";
        } else if (campoNombre.value.length < 2) {
            event.preventDefault(); // Evitar el envío del formulario
            nombreError.innerHTML = "El campo de Nombre Completo debe tener al menos 2 caracteres";
        } else {
            nombreError.innerHTML = ""; // Limpiar error si es válido
        }

        // Validación del campo Email
        let campoEmail = document.querySelector("input.email");
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

        // Validación del campo Contraseña
        let campoContrasena = document.querySelector("input.contrasena"); 
        let contrasenaError = document.querySelector(".contrasena-error");
        if (campoContrasena.value == "") {
            event.preventDefault(); 
            contrasenaError.innerHTML = "El campo de contraseña tiene que estar completo";
        } else if (campoContrasena.value.length < 8) {
            event.preventDefault(); 
            contrasenaError.innerHTML = "El campo Contraseña debe tener al menos 8 caracteres";
        } else {
            contrasenaError.innerHTML = ""; // Limpiar error si es válido
        }

        // Validación del campo Telefono
        let campoTelefono = document.querySelector("input.telefono"); 
        let telefonoError = document.querySelector(".telefono-error");
        if (campoTelefono.value == "") {
            event.preventDefault(); 
            telefonoError.innerHTML = "El campo de Teléfono tiene que estar completo";
        } else if (campoTelefono.value.length < 10) {
            event.preventDefault(); 
            telefonoError.innerHTML = "El campo Teléfono debe tener al menos 10 caracteres";
        } else {
            telefonoError.innerHTML = ""; // Limpiar error si es válido
        }
    });
});