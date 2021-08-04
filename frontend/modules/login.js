import validator from "validator";
export default class Login {
  constructor(formClass) {
    this.form = document.querySelector(formClass);
  }
  init() {
    this.event();
  }

  event() {
    if (!this.form) return;
    this.form.addEventListener("submit", (e) => {
      e.preventDefault();
      this.validate(e);
    });
  }

  validate(e) {
    const elemento = e.target;
    const emailInput = elemento.querySelector('input[name="email"]');
    const passwordInput = elemento.querySelector('input[name="password"]');
    let error = false;
    if (!validator.isEmail(emailInput.value)) {
      alert("email invalido");
      error = true;
    }

    if (passwordInput.value.length > 50 || passwordInput.value.length < 4) {
      alert("a sneha precisa estar entre 3 e 5a characteres");
      error = true;
    }
    if(!error)elemento.submit();

  }
}
