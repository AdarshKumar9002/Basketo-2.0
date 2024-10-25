
// Header
import ToggleNavigation from '../components/header/toggle-navigation.js';
import ToggleHref from '../reusable/toogle-homeBtn-href.js';
import SingleProductPageHeader from "../components/header/single-product-page-header.js";

// Search
import ToggleSearch from '../components/search/toggle-search.js';
import SetSearchPostion from '../components/search/search-postion.js';
import SearchHistoryManager from '../components/search/searchHistoryManager.js';

// Breadcrumb
// import StoreRetrivePath from '../components/Breadcrumb/store-path.js';
// Products

// Newsletter
import Newsletter from '../components/newsletter.js';
import FetchSingleProduct from '../components/Fetch/fetch-single-product.js';
import UpdateBreadcrumb from '../components/Breadcrumb/update-breadcrumg.js';

class HomePage {
  constructor() {
    // Header
    this.toggleNavigation = new ToggleNavigation();
    this.toggleSearch = new ToggleSearch();
    ToggleHref.toggle();
    SingleProductPageHeader.changeHeaderCSSPostion();

    // Search
    this.setSearchPostion = new SetSearchPostion();
    this.searchHistoryManager = new SearchHistoryManager();

    // Breadcrumb
    // this.storePath = new StoreRetrivePath();
    // StoreRetrivePath.removeDublicatesPaths();
    this.updateBreadcrumb = new UpdateBreadcrumb();

    // Newsletter
    this.newsletter = new Newsletter();

    // Product 
    this.getSignleProductDetail = new FetchSingleProduct(); 
    
    // Contain methods that will run after some time(3Sec)
    // this.timeOutComponets();

  }

  // Run the components after 3 second
//   timeOutComponets() {
//     setTimeout(() => {

//     }, 3000);
//   }
}

document.addEventListener('DOMContentLoaded', () => new HomePage());
