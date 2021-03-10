let errors = [];

window.addEventListener("load", () => {
  const createForm = document.getElementById("createForm");
  if(createForm){ 
  createForm.addEventListener("submit", (event) => {
    errors = [];
    clearValidations();

    validateInput("name", [
      [
        validator.isLength, ///valitation[0]
        { min: 5 },
        "El campo nombre debe tener al menos cinco caracteres", //validation[validation.length-1]
      ],
    ]);
    validateInput("description", [
      [
        validator.isLength,
        { min: 20 },
        "La descripción del producto debe tener al menos veinte caracteres",
      ],
    ]);
   
    
   

    if (checkErrors()) {
      event.preventDefault();
    }
  
  });

}
});

window.addEventListener("load", () => {
  const editForm = document.getElementById("editForm");
  
  if(editForm){ 
  editForm.addEventListener("submit", (event) => {
    errors = [];
    clearValidations();

    validateInput("name", [
        [
          validator.isLength, ///valitation[0]
          { min: 5 },
          "El campo nombre debe tener al menos cinco caracteres", //validation[validation.length-1]
        ],
      ]);
      validateInput("description", [
        [
          validator.isLength,
          { min: 20 },
          "La descripción del producto debe tener al menos veinte caracteres",
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
