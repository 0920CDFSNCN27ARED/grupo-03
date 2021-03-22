let errors = [];

window.addEventListener("load", () => {
  const registerForm = document.getElementById("registerForm");
  if (registerForm) {
    registerForm.addEventListener("submit", (event) => {
      errors = [];
      clearValidations();

      validateImage(
        "image",
        "Solo se aceptan archivos con las siguientes extensiones: .jpg / .gif / .png / .jpeg"
      );
      validateInput("firstName", [
        [
          validator.isLength, ///valitation[0]
          { min: 2 },
          "El campo nombre debe tener al menos dos caracteres", //validation[validation.length-1]
        ],
      ]);
      validateInput("lastName", [
        [
          validator.isLength,
          { min: 2 },
          "El campo apellido debe tener al menos dos caracteres",
        ],
      ]);
      validateInput("email", [
        [validator.isLength, { min: 1 }, "El campo email debe estar completo"],
        [validator.isEmail, "Email debe ser un email valido!"],
      ]);
      validateInput("user", [
        [
          validator.isLength,
          { min: 1 },
          "El campo usuario debe estar completo",
        ],
      ]);
      validateInput("password", [
        [validator.isLength, { min: 1 }, "Password es un campo requerido!"],
        [
          validator.isLength,
          { min: 8 },
          "El campo password debe tener al menos 8 caracteres!",
        ],
        [
          validator.isStrongPassword,
          "La clave no es segura. Debe tener por lo menos 8 caracteres. Entre ellos: 1 número, 1 símbolo, 1 letra en mayúscula y 1 letra en minúscula",
        ],
      ]);

      if (checkErrors()) {
        event.preventDefault();
      }
    });
  }
});

window.addEventListener("load", () => {
  const loginForm = document.getElementById("loginForm");

  if (loginForm) {
    loginForm.addEventListener("submit", (event) => {
      errors = [];
      clearValidations();

      validateInput("user", [
        [
          validator.isLength,
          { min: 1 },
          "El campo usuario debe estar completo",
        ],
      ]);
      validateInput("password", [
        [validator.isLength, { min: 1 }, "Password es un campo requerido!"],
        [
          validator.isLength,
          { min: 8 },
          "El campo password debe tener al menos 8 caracteres!",
        ],
        [
          validator.isStrongPassword,
          "La clave no es segura. Debe tener por lo menos 8 caracteres. Entre ellos: 1 número, 1 símbolo, 1 letra en mayúscula y 1 letra en minúscula",
        ],
      ]);

      if (checkErrors()) {
        event.preventDefault();
      }
    });
  }
});

function clearValidations() {
  const arrayInputs = document.getElementsByClassName("validate");
  const arrayFeedbacks = document.getElementsByClassName("feedback");

  for (const input of arrayInputs) {
    input.classList.remove("is-invalid", "is-valid");
  }
  for (const feedback of arrayFeedbacks) {
    feedback.classList.remove("alert", "alert-danger");
    feedback.innerHTML = "";
  }
}

function validateInput(inputId, validations) {
  const input = document.getElementById(inputId);
  let inputValue = input.value;

  let foundErrors = false;
  for (const validation of validations) {
    const validationFunction = validation[0]; //primer validacion del array de validations
    const errorMsg = validation[validation.length - 1];
    const validationOptions = validation.length > 2 ? validation[1] : undefined;

    if (!validationFunction(inputValue, validationOptions)) {
      const error = {
        inputId,
        msg: errorMsg,
      };
      errors.push(error);
      foundErrors = true;
    }
  }
  if (!foundErrors) {
    input.classList.add("is-valid");
  }
}

function validateImage(inputId, errorMsg) {
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

function checkErrors() {
  if (errors.length > 0) {
    errors.forEach((e) => {
      const feedbackId = e.inputId + "Feedback";
      const feedbackDiv = document.getElementById(feedbackId);
      const input = document.getElementById(e.inputId);
      input.classList.add("is-invalid");
      feedbackDiv.innerHTML += `<li>${e.msg}</li>`;
      feedbackDiv.classList.add("alert", "alert-danger");
    });
    return true;
  }

  return false;
}

//consultar
function isTrue(value) {
  return value;
}
