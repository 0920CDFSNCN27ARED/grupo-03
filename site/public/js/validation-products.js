let errors = [];

window.addEventListener("load", () => {
  const formCreate = document.getElementById("createForm");
  formCreate.addEventListener("submit", (event) => {
    errors = [];
    clearValidations();

    validateIsNotEmpty("name", "El campo nombre no puede estar vacío!");
    validateLength("description", "La descripción debe tener al menos veinte caracteres!",20);
    validateLength("name", "El nombre debe tener al menos cinco caracteres!",5);
    validateImage("image", "Solo se aceptan archivos con las siguientes extensiones: .jpg / .gif / .png / .jpeg")
    if (checkErrors()) {
      event.preventDefault();
    }
  });
});

window.addEventListener("load", () => {
const formEdit = document.getElementById("editForm");
  formEdit.addEventListener("submit", (event) => {
    errors = [];
    clearValidations();

    validateIsNotEmpty("name", "El campo nombre no puede estar vacío!");
    validateLength("description", "La descripción debe tener al menos veinte caracteres!",20);
    validateLength("name", "El nombre debe tener al menos cinco caracteres!",5);
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


