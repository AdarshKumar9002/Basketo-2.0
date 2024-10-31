// Links
import API_LINKS from '../local/vendor.js';
// Header
import ToggleNavigation from '../components/header/toggle-navigation.js';
import ScrollEffect from '../components/header/header-scroll-effect.js';
import ToggleHref from '../reusable/toogle-homeBtn-href.js';
// Search
import ToggleSearch from '../components/search/toggle-search.js';
import SetSearchPostion from '../components/search/search-postion.js';
import SearchHistoryManager from '../components/search/searchHistoryManager.js';
// Categories
import GetCategories from '../components/categories/categories.js';
// Products
import RenderTopProducts from '../components/render/render-top-products.js';
import SeeMoreTopProducts from '../components/utility/see-more-product.js';
// Wishlist
import AddToWishList from '../components/wishlist/add-to-wishlist.js';
// Cart
import AddToCartMessage from '../components/cart/add-to-cart-msg.js';
// Newsletter
import Newsletter from '../components/newsletter.js';

class HomePage {
  constructor() {
    // Header
    this.toggleNavigation = new ToggleNavigation();
    this.toggleSearch = new ToggleSearch();
    ToggleHref.toggle();
    this.scrollEffect = new ScrollEffect();

    // Search
    this.setSearchPostion = new SetSearchPostion();
    this.searchHistoryManager = new SearchHistoryManager();

    // Categories
    this.getCategories = new GetCategories(API_LINKS.categories);

    // Products
    this.renderProducts = new RenderTopProducts();
    this.SeeMoreTopProducts = new SeeMoreTopProducts();

    // Newsletter
    this.newsletter = new Newsletter();

    // Contain methods that will run after some time(3Sec)
    this.timeOutComponets();
  }

  // Run the components after 3 second
  timeOutComponets() {
    setTimeout(() => {
      // Wishlist
      this.addToWishlist = new AddToWishList('product-card__like-btn');

      // Cart
      this.addToCartMessage = new AddToCartMessage('product-card__like-btn');
    }, 3000);
  }
}

document.addEventListener('DOMContentLoaded', () => new HomePage());
