import FetchSingleProduct from '../fetch/fetch-single-product.js';
import SingleProductPageMarkup from './single-product-page-markup.js';

class PopulateSingleProductPage {
  constructor() {
    this.singleProductData = new FetchSingleProduct();

    this.init();
    this.populateImageElements();
  }

  // Initializes DOM element references for product page
  init() {
    this.PRODUCT_IMAGE_ELEMENT = document.querySelector(
      '.product-image',
    );
    this.PRODUCT_RATING_ELEMENT = document.querySelector('.product-rating');
    this.PRODUCT_TITLE_ELEMENT = document.getElementById('product-name');
    this.PRODUCT_PRICE_ELEMENT = document.getElementById('product-price');
    this.PRODUCT_DESCRIPTION_ELEMENT = document.getElementById(
      'product-description',
    );
  }

  // Fetches product data asynchronously
  async productData() {
    const product = await this.singleProductData.fetchProduct();
    return product;
  }

  // Populates the specified element with product images
  async populateImageElements() {
    const product = await this.productData();
    const image = product.images;
    const { title } = product;

    const imageElement = SingleProductPageMarkup.productImageFragmentStorage(image, title);
    console.log(SingleProductPageMarkup.productImageFragmentStorage(image, title));
    this.PRODUCT_IMAGE_ELEMENT.append(imageElement);
    
  }

}

export default PopulateSingleProductPage;
