window.addEventListener("load", function () {
    let formulario = document.querySelector("form.formulario");

    formulario.addEventListener("submit", function (event) {
        let ulErrores = document.querySelector("div.errores ul");
        ulErrores.innerHTML = ""; // Limpiar errores anteriores

        // Validación del campo Nombre
        let campoNombre = document.querySelector("input.nombre");
        if (campoNombre.value == "") {
            event.preventDefault(); // Evitar el envío del formulario
            ulErrores.innerHTML += "<li>El campo de Nombre Completo tiene que estar completo</li>";
        } else if (campoNombre.value.length < 2) {
            event.preventDefault(); // Evitar el envío del formulario
            ulErrores.innerHTML += "<li>El campo de Nombre Completo debe tener al menos 2 caracteres</li>";
        }

        // Validación del campo Email
        let campoEmail = document.querySelector("input.email"); // Corregir el selector
        let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/; 
        if (campoEmail.value == "") {
            event.preventDefault(); 
            ulErrores.innerHTML += "<li>El campo de email tiene que estar completo</li>";
        } else if (!emailPattern.test(campoEmail.value)) {
            event.preventDefault(); 
            ulErrores.innerHTML += "<li>El campo Email no tiene un formato válido</li>";
        }

        // Validación del campo Contraseña
        let campoContrasena = document.querySelector("input.contrasena"); 
        if (campoContrasena.value == "") {
            event.preventDefault(); 
            ulErrores.innerHTML += "<li>El campo de contraseña tiene que estar completo</li>";
        } else if (campoContrasena.value.length < 8) {
            event.preventDefault(); 
            ulErrores.innerHTML += "<li>El campo Contraseña debe tener al menos 8 caracteres</li>";
        }
        // Validación del campo Telefono
        let campoTelefono = document.querySelector("input.telefono"); 
        if (campoTelefono.value == "") {
            event.preventDefault(); 
            ulErrores.innerHTML += "<li>El campo de Telefono tiene que estar completo</li>";
        } else if (campoTelefono.value.length < 10) {
            event.preventDefault(); 
            ulErrores.innerHTML += "<li>El campo Telefono debe tener al menos 10 caracteres</li>";
        }
    });
});
