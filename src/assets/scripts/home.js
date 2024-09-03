/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
import MenuToggler from './modules/global/menu-toggler.js';
import ScrollEffect from './modules/global/header-scroll-effect.js';
import GetCategories from './modules/global/categories.js';
import API_LINKS from './modules/global/vendor.js';


class HomePage {
  constructor() {
    this.toggleHeaderMenu();
    this.headerScrollEffect();
    this.categories();
  }


  toggleHeaderMenu() {
    const menuToggle = new MenuToggler();
  }

  headerScrollEffect() {
    const scrollEffect =  new ScrollEffect();
  }

  categories() {
    const productCategories = new GetCategories(API_LINKS.categories);
  }
}
document.addEventListener('DOMContentLoaded', () => {
  const homePage = new HomePage();
});


