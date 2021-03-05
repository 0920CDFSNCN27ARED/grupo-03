let errors = [];

window.addEventListener("load", () => {
  clearValidations();
  const form = document.getElementById("loginForm");
  form.addEventListener("submit", (event) => {
    errors = [];

    validateIsNotEmpty("user", "El campo usuario no puede estar vacío!");
    validateIsNotEmpty("password", "El campo contraseña no puede estar vacío!");

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
