import ToggleController from './modules/global/toggle-hangler.js';
import ScrollEffect from './modules/global/header/header-scroll-effect.js';
import GetCategories from './modules/global/api/categories.js';
import API_LINKS from './modules/global/vendor.js';
import RenderTopProducts from './modules/home/render-top-products.js';
import ToggleHref from './modules/global/toogle-homeBtn-href.js';
import SetSearchPostion from './modules/global/search/search-postion.js';
import SearchHistoryManager from './modules/global/search/searchHistoryManager.js';
import AddToWishList from './modules/global/add-to-wishlist.js';
import SeeMoreTopProducts from './modules/home/see-more-product.js';
import Newsletter from './modules/global/newsletter.js';
import AddToCartMessage from './modules/global/add-to-cart-msg.js';

class HomePage {
  constructor() {
    this.initComponent(
      ToggleController,
      'menuToggler',
      'headerMenuBtn',
      'headerNav',
    );
    this.initComponent(
      ToggleController,
      'searchToggler',
      'search-btn-nav',
      'search-box-popup',
    );
    this.initComponent(SetSearchPostion, 'setSearchPostion');
    this.initComponent(SearchHistoryManager, 'searchHistoryManager');
    this.initComponent(SetSearchPostion, 'setSearchPostion');
    this.initComponent(ScrollEffect, 'scrollEffect');
    this.initComponent(GetCategories, 'categories', API_LINKS.categories);
    this.initComponent(RenderTopProducts, 'renderProducts');
    this.timeOutComponets(AddToWishList, 'addToWishlist', 'product-card__like-btn');
    this.timeOutComponets(AddToCartMessage, 'addToCartMessage');
    this.initComponent(SeeMoreTopProducts, 'SeeMoreTopProducts');
    this.initComponent(Newsletter, 'newsletter');
    ToggleHref.toggle();
  }

  // DRY method to initialize components
  initComponent(ComponentClass, property, ...args) {
    this[property] = new ComponentClass(...args);
  }

  // Run the components after 3 second
  timeOutComponets(ComponentClass, property, ...args) {
    setTimeout(() => {
      this[property] = new ComponentClass(...args);
    },3000);
  }
}


document.addEventListener('DOMContentLoaded', () => new HomePage());

