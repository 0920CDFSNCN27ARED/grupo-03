let errors = [];

window.addEventListener("load", () => {
  const formLogin = document.getElementById("loginForm");
  formLogin.addEventListener("submit", (event) => {
    errors = [];
    clearValidations();

    validateIsNotEmpty("user", "El campo usuario no puede estar vacío!");
    validateIsNotEmpty("password", "El campo contraseña no puede estar vacío!");

    if (checkErrors()) {
      event.preventDefault();
    }
  });
});

window.addEventListener("load", () => {
const formRegister = document.getElementById("registerForm");
  formRegister.addEventListener("submit", (event) => {
    errors = [];
    clearValidations();

    validateIsNotEmpty("firstName", "El campo nombre no puede estar vacío!");
    validateIsNotEmpty("lastName", "El campo apellido no puede estar vacío!");
    validateIsNotEmpty("user", "El campo usuario no puede estar vacío!");
    validateIsNotEmpty("email", "El campo email no puede estar vacío!");
    validateIsNotEmpty("password", "El campo contraseña no puede estar vacío!");
    validateLength("firstName", "El campo nombre debe tener al menos dos caracteres!",2);
    validateLength("lastName", "El campo apellido debe tener al menos dos caracteres!",2);
    validateLength("password", "La contraseña debe tener al menos ocho caracteres!",8);
    validateEmail("email", "El formato no es valido")
    validateImage("image", "Solo se aceptan archivos con las siguientes extensiones: .jpg / .gif / .png / .jpeg")

    if (checkErrors()) {
      event.preventDefault();
    }
  });
});

//ELIMINA LAS CLASES QUE LE AGREGAMOS A CADA INPUT Y FEEDBACK PARA HACER UNA NUEVA VALIDACION
function clearValidations() {
  const validatedInputs = document.getElementsByClassName("validate");
  const feedbackmsg = document.getElementsByClassName("feedback");

  for (const input of validatedInputs) {
    input.classList.remove("is-invalid");
  }
  for (const feedback of feedbackmsg) {
    feedback.classList.remove("alert", "alert-danger");
    feedback.innerHTML = "";
  }
}

//CHEQUEA QUE LOS CAMPOS NO ESTEN VACIOS
function validateIsNotEmpty(inputId, errorMsg) {
  const input = document.getElementById(inputId);
  if (input.value.trim() == "") {
    const error = {
      inputId,
      msg: errorMsg,
    };
    errors.push(error);
  } else {
    input.classList.add("is-valid");
  }
}

//CHEQUEA SI EL ARRAY DE ERRORES ESTA VACIO O NO. SI TIENE ERRORES COMPLETA CADA
//INPUT CON INVALID Y CADA FEEDBACK CON EL ERROR
function checkErrors() {
  if (errors.length > 0) {
    errors.forEach((e) => {
      const feedbackId = e.inputId + "Feedback";
      const feedbackDiv = document.getElementById(feedbackId);
      const input = document.getElementById(e.inputId);
      input.classList.add("is-invalid");
      feedbackDiv.innerHTML = e.msg;
      feedbackDiv.classList.add("alert", "alert-danger");
    });
    return true;
  }

  return false;
}

function validateLength(inputId, errorMsg, minLength) {
  const input = document.getElementById(inputId);
  if (input.value.length < minLength) {
    const error = {
      inputId,
      msg: errorMsg,
    };
    errors.push(error);
  } else {
    input.classList.add("is-valid");
  }
}

function validateEmail(inputId, errorMsg) {
  const input = document.getElementById(inputId);
  const regExp =  /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  if (!regExp.test(input.value)) {
    const error = {
      inputId,
      msg: errorMsg,
    };
    errors.push(error);
  } else {
    input.classList.add("is-valid");
  }
}

function validateImage(inputId, errorMsg){
  const input = document.getElementById(inputId);
  if (!input.value.match(/.(jpg)|(gif)|(png)|(jpeg)$/)) {
    const error = {
      inputId,
      msg: errorMsg,
    };
    errors.push(error);
  } else {
    input.classList.add("is-valid");
  }
  
}


