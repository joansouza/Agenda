import validator from 'validator';

export default class Contato {
  constructor(formClass) {
    this.form = document.querySelector(formClass);
  }
  init() {
    this.event();
  }
  event() {
    if (!this.form) return;
    this.form.addEventListener("submit", (e) => {
     console.log(this.form.value);
      e.preventDefault();
      this.validate(e);
    });
  }

  validate(e) {
    const elemento = e.target;
    const nomeInput = elemento.querySelector('input[name="nome"]');
    const emailInput = elemento.querySelector('input[name="email"]');
    const telefoneInput = elemento.querySelector('input[name="telefone"]');
    let error = false;

    if (emailInput.value && !validator.isEmail(emailInput.value)) {
      alert("email invalido");
      error = true;
    }
    if (!nomeInput.value) {
      alert("campo nome é obrigatório");
      error = true;
    }
    if (!emailInput.value && !telefoneInput.value) {
      alert("necessário enviar pelo menos um dos campos: email | telefone");
      error = true;
    }
    if (!error) {
      elemento.submit();
    }
  }
}
