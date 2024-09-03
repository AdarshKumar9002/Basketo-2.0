class MenuToggler {
  constructor() {
    this.HEADER_MENU_BUTTON_ELEMENTS =
      document.getElementsByClassName('headerMenuBtn');
    this.HEADER_MENU_BUTTONS = Array.from(this.HEADER_MENU_BUTTON_ELEMENTS);
    this.HEADER_NAV_ELEMENT = document.getElementById('headerNav');
    this.addListener();
  }

  open() {
    this.HEADER_MENU_BUTTONS.forEach((btn) => {
      this.HEADER_NAV_ELEMENT.setAttribute('data-menu', 'open');
      btn.setAttribute('aria-expanded', 'true');
    });
  }

  close() {
    this.HEADER_MENU_BUTTONS.forEach((btn) => {
      this.HEADER_NAV_ELEMENT.setAttribute('data-menu', 'close');
      btn.setAttribute('aria-expanded', 'false');
    });
  }

  toggle() {
    const menuState = this.HEADER_NAV_ELEMENT.getAttribute('data-menu');
    if (menuState === 'open') {
      this.close();
    } else {
      this.open();
    }
  }

  addListener() {
    this.HEADER_MENU_BUTTONS.forEach((btnElement) => {
      btnElement.addEventListener('click', () => {
        this.toggle();
      });
    });
  }
}

export default MenuToggler;
