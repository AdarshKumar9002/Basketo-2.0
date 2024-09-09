class ToggleController {
  constructor(triggerClass, targetId) {
    // add the comment
    this.TRIGGRED_ELEMENTS = document.getElementsByClassName(triggerClass);
    //   add the comment
    this.TRIGGRED_ELEMENTS_ARRAY = Array.from(this.TRIGGRED_ELEMENTS);
    //   add the comment
    this.TARGET_ELEMENTS = document.getElementById(targetId);

    this.addEventListeners(this.TRIGGRED_ELEMENTS_ARRAY, this.TARGET_ELEMENTS);
  }

  //  Open the target element
  activate() {
    this.TRIGGRED_ELEMENTS_ARRAY.forEach((btn) => {
      this.TARGET_ELEMENTS.setAttribute('data-state', 'open');
      btn.setAttribute('aria-expanded', 'true');
    });
  }

  //  Close the target element
  deactivate() {
    this.TRIGGRED_ELEMENTS_ARRAY.forEach((btn) => {
      this.TARGET_ELEMENTS.setAttribute('data-state', 'close');
      btn.setAttribute('aria-expanded', 'false');
    });
  }

  // Toggle Element state
  toggleState() {
    const menuState = this.TARGET_ELEMENTS.getAttribute('data-state');
    if (menuState === 'open') {
      this.activate();
    } else {
      this.deactivate();
    }
  }

  // Event listeners
  addEventListeners() {
    this.TRIGGRED_ELEMENTS_ARRAY.forEach((trigger) => {
      trigger.addEventListener('click', () => {
        this.toggleState();
      });
    });
  }
}

export default ToggleController;
