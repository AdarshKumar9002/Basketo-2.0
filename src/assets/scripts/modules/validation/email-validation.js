import ValidationError from './validtion-error-msg.js';

class EmailValidation {
  constructor() {
    this.NEWSLETTER_INPUT_ELEMENT = document.getElementById('subscribe');
    this.regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  }

  // Remove the Message element if it exist
  static removeMsgElement() {
    const NEWSLETTER_MESSAGE_ELEMENT =
      document.getElementById('newsletter-msg');
    if (NEWSLETTER_MESSAGE_ELEMENT) {
      NEWSLETTER_MESSAGE_ELEMENT.remove();
    }
  }

  // Remove the element after 3 sec
  static removeMsgElementByTime() {
    setTimeout(() => {
      document.getElementById('newsletter-msg').remove();
    }, 3000);
  }

  // Change the text color
  static changeTextColor(color) {
    document.getElementById('newsletter-msg').style.color = color;
  }

  // Validate the email and show msg based on reuslt
  validation() {
    const NEWSLETTER_ELEMENT = document.querySelector('.newsletter');
    const email = this.NEWSLETTER_INPUT_ELEMENT.value;

    EmailValidation.removeMsgElement();

    if (this.regex.test(email)) {
      const successMsg = 'Subscribed';
      ValidationError.appendErrorMsg(successMsg, NEWSLETTER_ELEMENT);

      EmailValidation.changeTextColor('green');

      EmailValidation.removeMsgElementByTime();
    } else {
      const errorMsg = 'Invalid Email';
      ValidationError.appendErrorMsg(errorMsg, NEWSLETTER_ELEMENT);
    }
  }
}

export default EmailValidation;
