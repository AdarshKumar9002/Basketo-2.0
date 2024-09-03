/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
import MenuToggler from './modules/global/menu-toggler.js';
// import ScrollEffect from './modules/home/header-scroll-effect.js';
import GetCategories from './modules/global/categories.js';
import API_LINKS from './modules/global/vendor.js';


class HomePage {
  constructor(MenuTogglerClass) {
    this.MenuTogglerClass = MenuTogglerClass;
    this.toggleHeaderMenu();
    // this.headerScrollEffect();
    this.categories();
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

  // headerScrollEffect() {
  //   const scrollEffect =  new ScrollEffect();
  // }

  categories() {
    const productCategories = new GetCategories(API_LINKS.categories);
  }
}
document.addEventListener('DOMContentLoaded', () => {
  const homePage = new HomePage(MenuToggler,);
});


