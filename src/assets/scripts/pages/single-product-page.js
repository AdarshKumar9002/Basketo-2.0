// Header
import ToggleNavigation from '../components/header/toggle-navigation.js';
import ToggleHref from '../reusable/toogle-homeBtn-href.js';
import SingleProductPageHeader from '../components/header/single-product-page-header.js';

// Search
import ToggleSearch from '../components/search/toggle-search.js';
import SetSearchPostion from '../components/search/search-postion.js';
import SearchHistoryManager from '../components/search/searchHistoryManager.js';

// Breadcrumb
import UpdateBreadcrumb from '../components/Breadcrumb/update-breadcrumg.js';

// Products
import PopulateSingleProductPage from '../components/markup/populate-single-product-page.js';

// Carousel
import ProductImageCarouselControls from '../components/carousel/product-image-carousel-controls.js';

// Newsletter
import Newsletter from '../components/newsletter.js';

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
    this.updateBreadcrumb = new UpdateBreadcrumb();

    // Newsletter
    this.newsletter = new Newsletter();

    // Product
    this.populateSingleProductPage = new PopulateSingleProductPage();

    // Contain methods that will run after some time(3Sec)
    this.timeOutComponets();
  }

  // Run the components after 2 second
  timeOutComponets() {
    setTimeout(() => {
      // Carousel
      this.prodctImageCarousel = new ProductImageCarouselControls();
    }, 2000);
  }
}

document.addEventListener('DOMContentLoaded', () => new HomePage());
