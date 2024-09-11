import ToggleController from './modules/global/toggle-hangler.js';
import ScrollEffect from './modules/global/header/header-scroll-effect.js';
import GetCategories from './modules/global/api/categories.js';
import API_LINKS from './modules/global/vendor.js';
import RenderProducts from './modules/home/render-featured-products.js';
import ToggleHref from './modules/global/toogle-homeBtn-href.js';
import SetSearchPostion from './modules/global/search/search-postion.js';


class HomePage {
  constructor() {
    this.initComponent(ToggleController, 'menuToggler','headerMenuBtn','headerNav');
    this.initComponent(ToggleController, 'searchToggler','search-btn-nav','search-box-popup');
    this.initComponent(SetSearchPostion, 'setSearchPostion');
    this.initComponent(ScrollEffect, 'scrollEffect');
    this.initComponent(GetCategories, 'categories', API_LINKS.categories);
    this.initComponent(RenderProducts, 'renderProducts', API_LINKS.limitedProducts);
    ToggleHref.toggle();
  }

  // DRY method to initialize components
  initComponent(ComponentClass, property, ...args) {
    this[property] = new ComponentClass(...args);
  }
}

document.addEventListener('DOMContentLoaded', () => new HomePage());


// // Set up a MutationObserver to monitor changes in the cart element and update totals accordingly
// const setupMutationObserver = () => {
//   const observer = new MutationObserver(() => {
//    new SetSearchPostion();
//   });

//   observer.observe(window, { childList: true, subtree: true });
// };