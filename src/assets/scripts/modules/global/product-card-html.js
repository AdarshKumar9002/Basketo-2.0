import SvgIcons from './svg-icons.js';

class ProductCardHTML extends SvgIcons {
  constructor(img, title, rating, price, discount) {
    super();
    this.img = img;
    this.name = title;
    this.rating = rating;
    this.price = price;
    this.discount = discount;
  }

  // Creates and returns the complete card element
  renderCard() {
    return this.cards();
  }

  static createElement(type, className = '', textContent = '') {
    const element = document.createElement(type);
    if (className) element.className = className;
    if (textContent) element.textContent = textContent;
    return element;
  }

  // Product card container
  cards() {
    const PRODUCT_CARD_ITEM_ELEMENT = ProductCardHTML.createElement(
      'div',
      'products-card__item flex',
    );
    const PRODUCT_IMG_CONTAINER_ELEMENT = this.cardImageContainer();
    const PRODUCT_DETAILS_CONTAINER_ELEMENT = this.productDetailsContainer();

    PRODUCT_CARD_ITEM_ELEMENT.appendChild(PRODUCT_IMG_CONTAINER_ELEMENT);
    PRODUCT_CARD_ITEM_ELEMENT.appendChild(PRODUCT_DETAILS_CONTAINER_ELEMENT);
    return PRODUCT_CARD_ITEM_ELEMENT;
  }

  // Product Image Container
  cardImageContainer() {
    const IMG_CONTAINER_ELEMENT = ProductCardHTML.createElement(
      'div',
      'products-card__product-image',
    );
    const PRODUCT_IMAGE = this.cardImage();
    const PRODUCT_DISCOUNT = this.cardDiscount();
    const COMPARE_BTN = ProductCardHTML.compareBtn();

    IMG_CONTAINER_ELEMENT.appendChild(PRODUCT_IMAGE);
    IMG_CONTAINER_ELEMENT.appendChild(PRODUCT_DISCOUNT);
    IMG_CONTAINER_ELEMENT.appendChild(COMPARE_BTN);

    return IMG_CONTAINER_ELEMENT;
  }

  // Product Image
  cardImage() {
    const IMG_ELEMENT = ProductCardHTML.createElement('img');
    IMG_ELEMENT.src = this.img;
    IMG_ELEMENT.alt = this.name;
    return IMG_ELEMENT;
  }

  // Product Discount Display
  cardDiscount() {
    const DISCOUNT_ELEMENT = ProductCardHTML.createElement(
      'span',
      '',
      `${this.discount}%`,
    );
    return DISCOUNT_ELEMENT;
  }

  // Product Compare Button
  static compareBtn() {
    const COMPARE_BTN_ELEMENT = ProductCardHTML.createElement('button');
    COMPARE_BTN_ELEMENT.id = 'compare-btn';
    COMPARE_BTN_ELEMENT.appendChild(SvgIcons.compareIcon());
    return COMPARE_BTN_ELEMENT;
  }

  // Product Details Container. Container for Product title, price, rating, acitons
  productDetailsContainer() {
    const PRODUCT_DETAILS_CONTAINER_ELEMENT = ProductCardHTML.createElement(
      'div',
      'products-card__productDetails',
    );
    const PRODUCT_NAME = this.productName();
    const PRODUCT_DESCRIPTION = this.productRatingContainer();
    const PRODUCT_CARD_FOOTER = this.productCardFooter();

    PRODUCT_DETAILS_CONTAINER_ELEMENT.appendChild(PRODUCT_NAME);
    PRODUCT_DETAILS_CONTAINER_ELEMENT.appendChild(PRODUCT_DESCRIPTION);
    PRODUCT_DETAILS_CONTAINER_ELEMENT.appendChild(PRODUCT_CARD_FOOTER);

    return PRODUCT_DETAILS_CONTAINER_ELEMENT;
  }

  // Product Name
  productName() {
    const ANCOR_ELEMENT = ProductCardHTML.createElement('a');
    ANCOR_ELEMENT.href = '#';
    const PRODUCT_NAME = ProductCardHTML.createElement('h4', '', this.name);
    ANCOR_ELEMENT.appendChild(PRODUCT_NAME);
    return ANCOR_ELEMENT;
  }

  // Product Rating
  productRatingContainer() {
    const PRODUCT_RATING__CONTAINER = ProductCardHTML.createElement(
      'div',
      'products-card__rating',
    );
    const PRODUCT_RATING_STAR = this.productRatingStar();
    const PRODUCT_TOTAL_REVIEW = this.productTotalRevies();

    PRODUCT_RATING__CONTAINER.appendChild(PRODUCT_RATING_STAR);
    PRODUCT_RATING__CONTAINER.appendChild(PRODUCT_TOTAL_REVIEW);
    return PRODUCT_RATING__CONTAINER;
  }

  productRatingStar() {
    const PRODUCT_RATING_STAR = ProductCardHTML.createElement(
      'div',
      'products-card__rating-star',
    );
    const productRating = this.rating;
    for (let i = 0; i < parseInt(productRating, 10); i += 1) {
      const star = ProductCardHTML.starIcon(100);
      PRODUCT_RATING_STAR.appendChild(star);
    }
    const halfStar = productRating - Math.floor(productRating);
    if (halfStar >= 0) {
      const filledPercent = halfStar * 10;
      const star = ProductCardHTML.starIcon(filledPercent);
      PRODUCT_RATING_STAR.appendChild(star);
    }

    return PRODUCT_RATING_STAR;
  }

  // Product Total Review Count
  productTotalRevies() {
    const PRODUCT_TOTAL_REVIEW_ELEMENT = ProductCardHTML.createElement(
      'div',
      'products-card__rating-text',
      `(500)`,
    );

    return PRODUCT_TOTAL_REVIEW_ELEMENT;
  }

  productCardFooter() {
    const PRODUCT_CARD_FOOTER_ELEMENT = ProductCardHTML.createElement(
      'div',
      'product-card__footer flex',
    );
    const PRODUCT_PRICE = this.productPrice();
    const PRODUCT_CARD_ACTIONS = ProductCardHTML.cardActions();

    PRODUCT_CARD_FOOTER_ELEMENT.appendChild(PRODUCT_PRICE);
    PRODUCT_CARD_FOOTER_ELEMENT.appendChild(PRODUCT_CARD_ACTIONS);

    return PRODUCT_CARD_FOOTER_ELEMENT;
  }

  // Product Price
  productPrice() {
    const PRODUCT_PRICE = ProductCardHTML.createElement(
      'div',
      'products-card__price',
      `$${this.price}`,
    );
    return PRODUCT_PRICE;
  }

  // Contains Butoons like: like, Cart
  static cardActions() {
    const CARD_ACTIONS_ELEMENT = ProductCardHTML.createElement(
      'div',
      'products-card__actions flex',
    );

    const LIKE_BTN_ELEMENT = ProductCardHTML.likeBtn();
    const CART_BTN_ELEMENT = ProductCardHTML.cartButton();

    CARD_ACTIONS_ELEMENT.appendChild(LIKE_BTN_ELEMENT);
    CARD_ACTIONS_ELEMENT.appendChild(CART_BTN_ELEMENT);

    return CARD_ACTIONS_ELEMENT;
  }

  // Like Btn
  static likeBtn() {
    const LIKE_BTN_ELEMENT = ProductCardHTML.createElement('button');
    LIKE_BTN_ELEMENT.appendChild(SvgIcons.likeIcon());
    return LIKE_BTN_ELEMENT;
  }

  // Cart Button
  static cartButton() {
    const CART_BTN_ELEMENT = ProductCardHTML.createElement('button');
    CART_BTN_ELEMENT.appendChild(SvgIcons.cartIcon());

    return CART_BTN_ELEMENT;
  }
}

export default ProductCardHTML;
