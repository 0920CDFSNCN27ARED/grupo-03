const { validator } = require("sequelize/types/lib/utils/validator-extras");

let errors = [];

window.addEventListener("load", () => {
  const form = document.getElementById("loginForm");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    errors = [];
    clearValidations();

    const name = document.getElementById("user");
    name.validator.isLength();
  });
});
