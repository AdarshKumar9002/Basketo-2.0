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
    this.initComponent(SeeMoreTopProducts, 'SeeMoreTopProducts');
    this.initComponent(Newsletter, 'newsletter');
    // this.initComponent(AddToWishList, 'addToWishlist', 'product-card__like-btn');
    ToggleHref.toggle();
  }

  // DRY method to initialize components
  initComponent(ComponentClass, property, ...args) {
    this[property] = new ComponentClass(...args);
  }
}

document.addEventListener('DOMContentLoaded', () => new HomePage());
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    // eslint-disable-next-line no-new
    new AddToWishList('product-card__like-btn');
  }, 3000);
});
