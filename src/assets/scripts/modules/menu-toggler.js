class MenuToggler {
  constructor(menuElement, dataContainerElement) {
    this.menuElement = Array.from(menuElement);
    this.dataContainerElement = dataContainerElement;
  }

  open() {
    this.menuElement.forEach((btn) => {
      this.dataContainerElement.setAttribute('data-menu', 'open');
      btn.setAttribute('aria-expanded', 'true');
    });
  }

  close() {
    this.menuElement.forEach((btn) => {
      this.dataContainerElement.setAttribute('data-menu', 'close');
      btn.setAttribute('aria-expanded', 'false');
    });
  }

  toggle() {
    const menuState = this.dataContainerElement.getAttribute('data-menu');
    if (menuState === 'open') {
      this.close();
    } else {
      this.open();
    }
  }
}

export default MenuToggler;
