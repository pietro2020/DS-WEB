const form = document.getElementById("form");

const rules = {
  nome: [
    {
      validate: (value) => value.trim() !== "",
      message: "Nome é obrigatório"
    }
  ],

  email: [
    {
      validate: (value) => value.trim() !== "",
      message: "Email é obrigatório"
    },
    {
      validate: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
      message: "Email inválido"
    }
  ],

  senha: [
    {
      validate: (value) => value.length >= 8,
      message: "Senha deve ter no mínimo 8 caracteres"
    }
  ]
};


function validateField(name, value) {

  const fieldRules = rules[name];

  for (let rule of fieldRules) {

    const valid = rule.validate(value);

    if (!valid) {
      return rule.message;
    }

  }

  return null;

}


function showError(input, message) {

  const field = input.parentElement;
  const error = field.querySelector(".error");

  error.innerText = message;
  field.classList.add("invalid");

}


function clearError(input){

  const field = input.parentElement;
  const error = field.querySelector(".error");

  error.innerText = "";
  field.classList.remove("invalid");

}


// VALIDAÇÃO NO SUBMIT
form.addEventListener("submit", function(event){

  event.preventDefault();

  let formValid = true;

  const inputs = form.querySelectorAll("input");

  inputs.forEach(input => {

    const name = input.name;
    const value = input.value;

    const errorMessage = validateField(name, value);

    if (errorMessage) {

      showError(input, errorMessage);
      formValid = false;

    } else {

      clearError(input);

    }

  });

  if (formValid) {
    alert("Formulário enviado com sucesso!");
    form.reset();
  }

});