import MenuToggler from './modules/global/menu-toggler.js';
import ScrollEffect from './modules/global/header-scroll-effect.js';
import GetCategories from './modules/global/categories.js';
import API_LINKS from './modules/global/vendor.js';
import RenderProducts from './modules/home/render-featured-products.js';

class HomePage {
  constructor() {
    this.initComponent(MenuToggler, 'menuToggler');
    this.initComponent(ScrollEffect, 'scrollEffect');
    this.initComponent(GetCategories, 'categories', API_LINKS.categories);
    this.initComponent(RenderProducts, 'renderProducts', API_LINKS.limitedProducts);
  }

  // DRY method to initialize components
  initComponent(ComponentClass, property, ...args) {
    this[property] = new ComponentClass(...args);
  }
}

document.addEventListener('DOMContentLoaded', () => new HomePage());

