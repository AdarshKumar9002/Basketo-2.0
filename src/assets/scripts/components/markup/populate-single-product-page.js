import FetchSingleProduct from '../fetch/fetch-single-product.js';
import ProductRatingMarkup from './product-rating-markup.js';
import SingleProductPageMarkup from './single-product-page-markup.js';

class PopulateSingleProductPage {
  constructor() {
    this.singleProductData = new FetchSingleProduct();

    this.init();
    this.populateImageElements();
    this.populateProductDetails();
  }

  // Initializes DOM element references for product page
  init() {
    this.PRODUCT_IMAGE_ELEMENT = document.querySelector('.product-image');
    this.PRODUCT_TITLE_ELEMENT = document.getElementById('product-name');
    this.PRODUCT_PRICE_ELEMENT = document.getElementById('product-price');
    this.PRODUCT_RATING_ELEMENT = document.querySelector('.product-rating');

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

    const imageElement = SingleProductPageMarkup.productImageFragmentStorage(
      image,
      title,
    );
    this.PRODUCT_IMAGE_ELEMENT.append(imageElement);
  }

  async populateProductDetails() {
    await this.populateProductName();
    await this.populateProductPrice();
    await this.populateProductStarRating();
    await this.populateProductRatingCount();
    await this.populateProductDescription();

  }

  // Title
  async populateProductName() {
    const product = await this.productData();
    const { title } = product;

    this.PRODUCT_TITLE_ELEMENT.textContent = title;
  }

  // Price
  async populateProductPrice() {
    const product = await this.productData();
    const { price } = product;

    this.PRODUCT_PRICE_ELEMENT.textContent = price;
  }

  // Rating
  async populateProductStarRating() {
    const STAR_RATING_ELEMENT = this.PRODUCT_RATING_ELEMENT.querySelector('#product-rating-star'); // any error with this line 
    const product = await this.productData();
    const { rating } = product;
    const STAR_ICONS = ProductRatingMarkup.ratingStars(rating);

    STAR_RATING_ELEMENT.append(STAR_ICONS);
  }

  // Rating Count
  async populateProductRatingCount() {
    const STAR_RATING_COUNT_ELEMENT = this.PRODUCT_RATING_ELEMENT.querySelector('#product-rating-count');
    const product = await this.productData();
    const { rating } = product;
    const ratingCount = `${rating} Customer Review`;

    STAR_RATING_COUNT_ELEMENT.textContent = ratingCount;
  }

  async populateProductDescription() {
    const product = await this.productData();
    const { description } = product;

    this.PRODUCT_DESCRIPTION_ELEMENT.textContent = description;
  }
}

export default PopulateSingleProductPage;
