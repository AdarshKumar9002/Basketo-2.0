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

  cards() {
    const PRODUCT_CARD_ITEM_ELEMENT = ProductCardHTML.createElement('div', 'products-card__item flex');
    const PRODUCT_IMG_CONTAINER_ELEMENT = this.cardImageContainer();
    const PRODUCT_DETAILS_CONTAINER_ELEMENT = this.productDetailsContainer();

    PRODUCT_CARD_ITEM_ELEMENT.appendChild(PRODUCT_IMG_CONTAINER_ELEMENT);
    PRODUCT_CARD_ITEM_ELEMENT.appendChild(PRODUCT_DETAILS_CONTAINER_ELEMENT);
    return PRODUCT_CARD_ITEM_ELEMENT;  // Return the full product card element
  }

  cardImageContainer() {
    const IMG_CONTAINER_ELEMENT = ProductCardHTML.createElement('div', 'products-card__product-image');
    const PRODUCT_IMAGE = this.cardImage();
    const PRODUCT_DISCOUNT = this.cardDiscount();
    const PRODUCT_IMAGE_ON_HOVER = ProductCardHTML.imgOnHover();

    IMG_CONTAINER_ELEMENT.appendChild(PRODUCT_IMAGE);
    IMG_CONTAINER_ELEMENT.appendChild(PRODUCT_DISCOUNT);
    IMG_CONTAINER_ELEMENT.appendChild(PRODUCT_IMAGE_ON_HOVER);

    return IMG_CONTAINER_ELEMENT;
  }

  cardImage() {
    const IMG_ELEMENT = ProductCardHTML.createElement('img');
    IMG_ELEMENT.src = this.img;
    IMG_ELEMENT.alt = this.name;
    return IMG_ELEMENT;
  }

  cardDiscount() {
    const DISCOUNT_ELEMENT = ProductCardHTML.createElement('span', '', `${this.discount}%`);
    return DISCOUNT_ELEMENT;
  }

  static imgOnHover() {
    const ON_HOVER_CONTAINER_ELEMENT = ProductCardHTML.createElement('div', 'products-card__on-hover-elements');
    const ADD_TO_CART_ELEMENT = ProductCardHTML.addToCartBtnContainer();
    const BTN_GROUP_ELEMENT = ProductCardHTML.btnGroup();

    ON_HOVER_CONTAINER_ELEMENT.appendChild(ADD_TO_CART_ELEMENT);
    ON_HOVER_CONTAINER_ELEMENT.appendChild(BTN_GROUP_ELEMENT);

    return ON_HOVER_CONTAINER_ELEMENT;
  }

  static addToCartBtnContainer() {
    const ADD_TO_CART_BTN_CONTAINER_ELEMENT = ProductCardHTML.createElement('div', 'products-card__addToCart');
    const ADD_TO_CART_BUTTON = ProductCardHTML.addToCartBtn();
    ADD_TO_CART_BTN_CONTAINER_ELEMENT.appendChild(ADD_TO_CART_BUTTON);
    return ADD_TO_CART_BTN_CONTAINER_ELEMENT;
  }

  static addToCartBtn() {
    const ADD_TO_CART_BTN_ELEMENT = ProductCardHTML.createElement('button', '', 'Add to cart');
    return ADD_TO_CART_BTN_ELEMENT;
  }

  static btnGroup() {
    const BTN_GROUP_CONTAINER_ELEMENT = ProductCardHTML.createElement('div', 'products-card__on-hover-buttons');
    const LIKE_BTN_ELEMENT = ProductCardHTML.likeBtn();
    const COMPARE_BTN_ELEMENT = ProductCardHTML.compareBtn();
    const SHARE_BTN_ELEMENT = ProductCardHTML.shareBtn();

    BTN_GROUP_CONTAINER_ELEMENT.appendChild(LIKE_BTN_ELEMENT);
    BTN_GROUP_CONTAINER_ELEMENT.appendChild(COMPARE_BTN_ELEMENT);
    BTN_GROUP_CONTAINER_ELEMENT.appendChild(SHARE_BTN_ELEMENT);
    return BTN_GROUP_CONTAINER_ELEMENT;
  }

  static likeBtn() {
    const LIKE_BTN_ELEMENT = ProductCardHTML.createElement('button','flex');
    LIKE_BTN_ELEMENT.textContent = 'Like';
    LIKE_BTN_ELEMENT.appendChild(SvgIcons.likeIcon());
    return LIKE_BTN_ELEMENT;
  }

  static compareBtn() {
    const COMPARE_BTN_ELEMENT = ProductCardHTML.createElement('button','flex');
    COMPARE_BTN_ELEMENT.textContent = 'Compare';
    COMPARE_BTN_ELEMENT.appendChild(SvgIcons.compareIcon());
    return COMPARE_BTN_ELEMENT;
  }

  static shareBtn() {
    const SHARE_BTN_ELEMENT = ProductCardHTML.createElement('button','flex');
    SHARE_BTN_ELEMENT.textContent = 'Share';
    SHARE_BTN_ELEMENT.appendChild(SvgIcons.shareIcon());
    return SHARE_BTN_ELEMENT;
  }

  productDetailsContainer() {
    const PRODUCT_DETAILS_CONTAINER_ELEMENT = ProductCardHTML.createElement('div', 'products-card__productDetails flex');
    const PRODUCT_NAME = this.productName();
    const PRODUCT_DESCRIPTION = this.productRatingContainer();
    const PRODUCT_PRICE = this.productPrice();

    PRODUCT_DETAILS_CONTAINER_ELEMENT.appendChild(PRODUCT_NAME);
    PRODUCT_DETAILS_CONTAINER_ELEMENT.appendChild(PRODUCT_DESCRIPTION);
    PRODUCT_DETAILS_CONTAINER_ELEMENT.appendChild(PRODUCT_PRICE);
    return PRODUCT_DETAILS_CONTAINER_ELEMENT;
  }

  productName() {
    const PRODUCT_NAME = ProductCardHTML.createElement('h4', '', this.name);
    return PRODUCT_NAME;
  }

  productRatingContainer() {
    const PRODUCT_RATING__CONTAINER = ProductCardHTML.createElement('div', 'products-card__rating');
    const PRODUCT_RATING_STAR = this.productRatingStar();
    const PRODUCT_RATING_TEXT = this.productRatingText();

    PRODUCT_RATING__CONTAINER.appendChild(PRODUCT_RATING_STAR);
    PRODUCT_RATING__CONTAINER.appendChild(PRODUCT_RATING_TEXT);
    return PRODUCT_RATING__CONTAINER;
  }
  
  productRatingStar() {
    const PRODUCT_RATING_STAR = ProductCardHTML.createElement('div', 'products-card__rating-star');
    const productRating = this.rating;
    for(let i = 0; i < parseInt(productRating, 10); i+=1) {
      const star = ProductCardHTML.starIcon(100);
      PRODUCT_RATING_STAR.appendChild(star);
    }
    const halfStar = productRating - Math.floor(productRating);
    if(halfStar >= 0) {
      const filledPercent = halfStar * 10;
      const star = ProductCardHTML.starIcon(filledPercent);
      PRODUCT_RATING_STAR.appendChild(star);
    };

    return PRODUCT_RATING_STAR;
  }
  
  productRatingText() {
    const PRODUCT_RATING__TEXT = ProductCardHTML.createElement('div', 'products-card__rating-text', `${this.rating} out of 5`);

    return PRODUCT_RATING__TEXT;
  }

  productPrice() {
    const PRODUCT_PRICE = ProductCardHTML.createElement('div', 'products-card__price', `$${this.price}`);
    return PRODUCT_PRICE;
  }
}

export default ProductCardHTML;
