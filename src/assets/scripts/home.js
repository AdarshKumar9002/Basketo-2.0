import MenuToggler from './modules/menu-toggler.js';

class HomePage {
  constructor(MenuTogglerClass) {
    this.MenuTogglerClass = MenuTogglerClass;
    this.toggleHeaderMenu();
  }

  toggleHeaderMenu() {
    const HEADER_MENU_BUTTON_ELEMENTS =
      document.getElementsByClassName('headerMenuBtn');
    const HEADER_MENU_BUTTONS = Array.from(HEADER_MENU_BUTTON_ELEMENTS);
    const HEADER_NAV_ELEMENT = document.getElementById('headerNav');
    const menuToggleHandler = new this.MenuTogglerClass(
      HEADER_MENU_BUTTONS,
      HEADER_NAV_ELEMENT,
    );

    HEADER_MENU_BUTTONS.forEach((btnElement) => {
      btnElement.addEventListener('click', () => {
        menuToggleHandler.toggle();
      });
    });
  }
}
document.addEventListener('DOMContentLoaded', () => {
  // eslint-disable-next-line no-unused-vars
  const homePage = new HomePage(MenuToggler);
});
