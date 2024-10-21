class ToggleController {
  constructor(triggerClass, targetId) {
    this.TRIGGRED_ELEMENTS = document.getElementsByClassName(triggerClass);

    this.TRIGGRED_ELEMENTS_ARRAY = Array.from(this.TRIGGRED_ELEMENTS);

    this.TARGET_ELEMENTS = document.getElementById(targetId);

    this.addEventListeners(this.TRIGGRED_ELEMENTS_ARRAY, this.TARGET_ELEMENTS);
  }

  //  Open the target element (set the state to "open" and update aria attributes)
  activate() {
    this.TRIGGRED_ELEMENTS_ARRAY.forEach((btn) => {
      this.TARGET_ELEMENTS.setAttribute('data-state', 'open');
      btn.setAttribute('aria-expanded', 'true');
    });
  }

  //  Close the target element (set the state to "close" and update aria attributes)
  deactivate() {
    this.TRIGGRED_ELEMENTS_ARRAY.forEach((btn) => {
      this.TARGET_ELEMENTS.setAttribute('data-state', 'close');
      btn.setAttribute('aria-expanded', 'false');
    });
  }

  // Toggle between opening and closing the target element
  toggleState() {
    const menuState = this.TARGET_ELEMENTS.getAttribute('data-state');
    if (menuState === 'open') {
      this.deactivate();
    } else {
      this.activate();
    }
  }

  // Add click event listeners to each trigger element, calling toggleState on click
  addEventListeners() {
    this.TRIGGRED_ELEMENTS_ARRAY.forEach((trigger) => {
      trigger.addEventListener('click', () => {
        this.toggleState();
      });
    });
  }
}

export default ToggleController;
