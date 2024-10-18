import EmailValidation from "../validation/email-validation.js";

class Newsletter {
    constructor() {
        this.emailValidation = new EmailValidation();
        this.addListeners();
    }
  
    addListeners() {
        document.getElementById('subscribe-btn').addEventListener('click', () => {
            this.emailValidation.validation();
        });
    }
}

export default Newsletter;