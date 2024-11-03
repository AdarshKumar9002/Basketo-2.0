import FetchAndCreateAdditonalData from '../fetch/fetch-and-create-additonal-data.js';
import FetchSingleProduct from '../fetch/fetch-single-product.js';
import ProductRatingMarkup from './product-rating-markup.js';
import SingleProductPageMarkup from './single-product-page-markup.js';

class PopulateSingleProductPage {
  constructor() {
    this.singleProductData = new FetchSingleProduct();
    this.additonalData = new FetchAndCreateAdditonalData();

    this.init();
    this.populateImageElements();
    this.populateProductDetails();
    this.populateProductInformationSection();
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

    this.PRODUCT_INFORMATION_DESCRIPTION_ELEMENT =
      document.getElementById('description');
    this.PRODUCT_ADDITIONAL_INFORMATION_ELEMENT =
      document.getElementById('additional-info');
    this.PRODUCT_REVIES_ELEMENT = document.getElementById('reviews');
  }

  // Fetches product data asynchronously
  async productData() {
    const product = await this.singleProductData.fetchProduct();
    return product;
  }

  // Fetches product data asynchronously
  async productAdditonalData() {
    const product = await this.additonalData.updatedData();
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
    await this.productName();
    await this.productPrice();
    await this.productStarRating();
    await this.productRatingCount();
    await this.productDescription();
  }

  async populateProductInformationSection() {
    this.productInfoDescription();
    this.productAdditionalInfo();
    this.productReview();
  }

  // Title
  async productName() {
    const product = await this.productData();
    const { title } = product;

    this.PRODUCT_TITLE_ELEMENT.textContent = title;
  }

  // Price
  async productPrice() {
    const product = await this.productData();
    const { price } = product;

    this.PRODUCT_PRICE_ELEMENT.textContent = price;
  }

  // Rating
  async productStarRating() {
    const STAR_RATING_ELEMENT = this.PRODUCT_RATING_ELEMENT.querySelector(
      '#product-rating-star',
    ); // any error with this line
    const product = await this.productData();
    const { rating } = product;
    const STAR_ICONS = ProductRatingMarkup.ratingStars(rating);

    STAR_RATING_ELEMENT.append(STAR_ICONS);
  }

  // Rating Count
  async productRatingCount() {
    const STAR_RATING_COUNT_ELEMENT = this.PRODUCT_RATING_ELEMENT.querySelector(
      '#product-rating-count',
    );
    const product = await this.productData();
    const { rating } = product;
    const ratingCount = `${rating} Customer Review`;

    STAR_RATING_COUNT_ELEMENT.textContent = ratingCount;
  }

  async productDescription() {
    const product = await this.productData();
    const { description } = product;

    this.PRODUCT_DESCRIPTION_ELEMENT.textContent = description;
  }

  async productInfoDescription() {
    const product = await this.productData();
    const { description } = product;

    this.PRODUCT_INFORMATION_DESCRIPTION_ELEMENT.textContent = description;
  }

  async productAdditionalInfo() {
    const additionalData = await this.productAdditonalData();
    const additionalDataElement =
      SingleProductPageMarkup.productAdditionalInfoMarkup(additionalData);
    this.PRODUCT_ADDITIONAL_INFORMATION_ELEMENT.appendChild(additionalDataElement);
  }

  async productReview() {
    const product = await this.productData();
    const { reviews } = product;

    const reviewElement = SingleProductPageMarkup.productReview(reviews);
    this.PRODUCT_REVIES_ELEMENT.appendChild(reviewElement);
  }
}

export default PopulateSingleProductPage;
