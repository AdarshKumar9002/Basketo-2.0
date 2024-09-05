import SvgIcons from './svg-icons.js';

class ProductCardHTML extends SvgIcons {
  constructor(img, title, description, price, discount) {
    super();
    this.img = img;
    this.name = title;
    this.description = description;
    this.price = price;
    this.discount = discount;
  }

  // Creates and returns the complete card element
  renderCard() {
    return this.cards();
  }

  createElement(type, className = '', textContent = '') {
    const element = document.createElement(type);
    if (className) element.className = className;
    if (textContent) element.textContent = textContent;
    return element;
  }

  cards() {
    const PRODUCT_CARD_ITEM_ELEMENT = this.createElement('div', 'products-card__item');
    const PRODUCT_IMG_CONTAINER_ELEMENT = this.cardImageContainer();
    const PRODUCT_DETAILS_CONTAINER_ELEMENT = this.productDetailsContainer();

    PRODUCT_CARD_ITEM_ELEMENT.appendChild(PRODUCT_IMG_CONTAINER_ELEMENT);
    PRODUCT_CARD_ITEM_ELEMENT.appendChild(PRODUCT_DETAILS_CONTAINER_ELEMENT);
    return PRODUCT_CARD_ITEM_ELEMENT;  // Return the full product card element
  }

  cardImageContainer() {
    const IMG_CONTAINER_ELEMENT = this.createElement('div', 'products-card__product-image');
    const PRODUCT_IMAGE = this.cardImage();
    const PRODUCT_DISCOUNT = this.cardDiscount();
    const PRODUCT_IMAGE_ON_HOVER = this.imgOnHover();

    IMG_CONTAINER_ELEMENT.appendChild(PRODUCT_IMAGE);
    IMG_CONTAINER_ELEMENT.appendChild(PRODUCT_DISCOUNT);
    IMG_CONTAINER_ELEMENT.appendChild(PRODUCT_IMAGE_ON_HOVER);

    return IMG_CONTAINER_ELEMENT;
  }

  cardImage() {
    const IMG_ELEMENT = this.createElement('img');
    IMG_ELEMENT.src = this.img;
    IMG_ELEMENT.alt = this.name;
    return IMG_ELEMENT;
  }

  cardDiscount() {
    const DISCOUNT_ELEMENT = this.createElement('span', '', `${this.discount}%`);
    return DISCOUNT_ELEMENT;
  }

  imgOnHover() {
    const ON_HOVER_CONTAINER_ELEMENT = this.createElement('div', 'products-card__on-hover-elements');
    const ADD_TO_CART_ELEMENT = this.addToCartBtnContainer();
    const BTN_GROUP_ELEMENT = this.btnGroup();

    ON_HOVER_CONTAINER_ELEMENT.appendChild(ADD_TO_CART_ELEMENT);
    ON_HOVER_CONTAINER_ELEMENT.appendChild(BTN_GROUP_ELEMENT);

    return ON_HOVER_CONTAINER_ELEMENT;
  }

  addToCartBtnContainer() {
    const ADD_TO_CART_BTN_CONTAINER_ELEMENT = this.createElement('div', 'products-card__addToCart');
    const ADD_TO_CART_BUTTON = this.addToCartBtn();
    ADD_TO_CART_BTN_CONTAINER_ELEMENT.appendChild(ADD_TO_CART_BUTTON);
    return ADD_TO_CART_BTN_CONTAINER_ELEMENT;
  }

  addToCartBtn() {
    const ADD_TO_CART_BTN_ELEMENT = this.createElement('button', '', 'Add to cart');
    return ADD_TO_CART_BTN_ELEMENT;
  }

  btnGroup() {
    const BTN_GROUP_CONTAINER_ELEMENT = this.createElement('div', 'products-card__on-hover-buttons');
    const LIKE_BTN_ELEMENT = this.likeBtn();
    const COMPARE_BTN_ELEMENT = this.compareBtn();
    const SHARE_BTN_ELEMENT = this.shareBtn();

    BTN_GROUP_CONTAINER_ELEMENT.appendChild(LIKE_BTN_ELEMENT);
    BTN_GROUP_CONTAINER_ELEMENT.appendChild(COMPARE_BTN_ELEMENT);
    BTN_GROUP_CONTAINER_ELEMENT.appendChild(SHARE_BTN_ELEMENT);
    return BTN_GROUP_CONTAINER_ELEMENT;
  }

  likeBtn() {
    const LIKE_BTN_ELEMENT = this.createElement('button');
    LIKE_BTN_ELEMENT.appendChild(this.likeIcon());
    return LIKE_BTN_ELEMENT;
  }

  compareBtn() {
    const COMPARE_BTN_ELEMENT = this.createElement('button');
    COMPARE_BTN_ELEMENT.appendChild(this.compareIcon());
    return COMPARE_BTN_ELEMENT;
  }

  shareBtn() {
    const SHARE_BTN_ELEMENT = this.createElement('button');
    SHARE_BTN_ELEMENT.appendChild(this.shareIcon());
    return SHARE_BTN_ELEMENT;
  }

  productDetailsContainer() {
    const PRODUCT_DETAILS_CONTAINER_ELEMENT = this.createElement('div', 'products-card__productDetails');
    const PRODUCT_NAME = this.productName();
    const PRODUCT_DESCRIPTION = this.productDescription();
    const PRODUCT_PRICE = this.productPrice();

    PRODUCT_DETAILS_CONTAINER_ELEMENT.appendChild(PRODUCT_NAME);
    PRODUCT_DETAILS_CONTAINER_ELEMENT.appendChild(PRODUCT_DESCRIPTION);
    PRODUCT_DETAILS_CONTAINER_ELEMENT.appendChild(PRODUCT_PRICE);
    return PRODUCT_DETAILS_CONTAINER_ELEMENT;
  }

  productName() {
    const PRODUCT_NAME = this.createElement('h4', '', this.name);
    return PRODUCT_NAME;
  }

  productDescription() {
    const PRODUCT_DESCRIPTION = this.createElement('p', '', this.description);
    return PRODUCT_DESCRIPTION;
  }

  productPrice() {
    const PRODUCT_PRICE = this.createElement('h4', '', `$ ${this.price}`);
    return PRODUCT_PRICE;
  }
}

export default ProductCardHTML;
