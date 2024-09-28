import SvgIcons from '../svg-icons.js';

class ProductCardHTML extends SvgIcons {
  constructor(img, title, rating, price, discount) {
    super();
    this.img = img;
    this.name = title;
    this.rating = rating;
    this.price = price;
    this.discount = discount;
  }

  // Hide the discount if it is less than or equal to Zero
  discountDisplayNone(discountElement) {
    if (this.discount <= 0) {
      discountElement.style.display = 'none';
    }
  }

  // Calculate the discount price
  getDiscountedPrice() {
    if (this.price <= 0 || this.discount <= 0) {
      return 0;
    }
    const discountRate = this.discount / 100;
    const discountAmount = this.price * discountRate;
    const discountedPrice = this.price - discountAmount;

    return discountedPrice;
  }

  static getSliceEnd() {
    let sliceEnd = 0;
    const screenWidth = window.innerWidth;

    if (screenWidth < 375) {
      sliceEnd = 25;
    } else if (screenWidth < 768) {
      sliceEnd = 30;
    } else {
      sliceEnd = 35;
    }
    return sliceEnd;
  }

  // Check the product name length and slice it if it is too big
  updateProductTitle(productTitleElement) {
    const sliceStart = 0;
    const sliceEnd = ProductCardHTML.getSliceEnd();

    if (this.name && this.name.length > sliceEnd) {
      let productName = this.name.slice(sliceStart, sliceEnd);
      productName += '....';
      productTitleElement.textContent = productName;
    }
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
    const ANCOR_ELEMENT = ProductCardHTML.createElement('a');
    ANCOR_ELEMENT.href = '#';
    const IMG_ELEMENT = ProductCardHTML.createElement('img');
    IMG_ELEMENT.src = this.img;
    IMG_ELEMENT.alt = this.name;
    ANCOR_ELEMENT.appendChild(IMG_ELEMENT);
    return ANCOR_ELEMENT;
  }

  // Product Discount Display
  cardDiscount() {
    const DISCOUNT_ELEMENT = ProductCardHTML.createElement(
      'span',
      '',
      `${this.discount}%`,
    );

    this.discountDisplayNone(DISCOUNT_ELEMENT);

    return DISCOUNT_ELEMENT;
  }

  // Product Compare Button
  static compareBtn() {
    const COMPARE_BTN_ELEMENT = ProductCardHTML.createElement('button');
    COMPARE_BTN_ELEMENT.className = 'products-card__compare-btn';
    COMPARE_BTN_ELEMENT.appendChild(SvgIcons.compareIcon());
    return COMPARE_BTN_ELEMENT;
  }

  // Product Details Container. Container for Product title, price, rating, acitons
  productDetailsContainer() {
    const PRODUCT_DETAILS_CONTAINER_ELEMENT = ProductCardHTML.createElement(
      'div',
      'products-card__productDetails',
    );
    const PRODUCT_NAME = this.productTitle();
    const PRODUCT_DESCRIPTION = this.productRatingContainer();
    const PRODUCT_CARD_FOOTER = this.productCardFooter();

    PRODUCT_DETAILS_CONTAINER_ELEMENT.appendChild(PRODUCT_NAME);
    PRODUCT_DETAILS_CONTAINER_ELEMENT.appendChild(PRODUCT_DESCRIPTION);
    PRODUCT_DETAILS_CONTAINER_ELEMENT.appendChild(PRODUCT_CARD_FOOTER);

    return PRODUCT_DETAILS_CONTAINER_ELEMENT;
  }

  // Product Name
  productTitle() {
    const ANCOR_ELEMENT = ProductCardHTML.createElement('a');
    ANCOR_ELEMENT.href = '#';
    const PRODUCT_NAME_ELEMENT = ProductCardHTML.createElement('h4', '', this.name);
    this.updateProductTitle(PRODUCT_NAME_ELEMENT);
    ANCOR_ELEMENT.appendChild(PRODUCT_NAME_ELEMENT);
    return ANCOR_ELEMENT;
  }

  // Product Rating
  productRatingContainer() {
    const PRODUCT_RATING_CONTAINER_ELEMENT = ProductCardHTML.createElement(
      'div',
      'products-card__rating',
    );
    const PRODUCT_RATING_STAR = this.productRatingStar();
    const PRODUCT_TOTAL_REVIEW = ProductCardHTML.productTotalRevies();

    PRODUCT_RATING_CONTAINER_ELEMENT.appendChild(PRODUCT_RATING_STAR);
    PRODUCT_RATING_CONTAINER_ELEMENT.appendChild(PRODUCT_TOTAL_REVIEW);
    return PRODUCT_RATING_CONTAINER_ELEMENT;
  }

  productRatingStar() {
    const PRODUCT_RATING_STAR = ProductCardHTML.createElement(
      'div',
      'products-card__rating-star'
    );
  
    const productRating = this.rating;
  
    // Render full stars
    for (let i = 0; i < Math.floor(productRating); i += 1) {
      const star = ProductCardHTML.starIcon(100);
      PRODUCT_RATING_STAR.appendChild(star);
    }
  
    // Render half star (if applicable)
    const halfStar = productRating - Math.floor(productRating);
    if (halfStar > 0) {  
      const filledPercent = halfStar * 100;
  
      const star = ProductCardHTML.starIcon(parseInt(filledPercent, 10));
      
      PRODUCT_RATING_STAR.appendChild(star);
    }
  
    // Render blank stars to make a total of 5
    const blankStars = 5 - Math.ceil(productRating); // Use Math.ceil to account for half-star
    for (let i = 0; i < blankStars; i += 1) {
      const star = ProductCardHTML.starIcon(0); 
      PRODUCT_RATING_STAR.appendChild(star);
    }
  
    return PRODUCT_RATING_STAR;
  }
  

  // Product Total Review Count
  static productTotalRevies() {
    const max = 999;
    const min = 1;
    const totalReview = Math.floor(Math.random() * (max - min + 1)) - min;
    const PRODUCT_TOTAL_REVIEW_ELEMENT = ProductCardHTML.createElement(
      'div',
      'products-card__rating-text',
      `(${totalReview})`,
    );

    return PRODUCT_TOTAL_REVIEW_ELEMENT;
  }

  productCardFooter() {
    const PRODUCT_CARD_FOOTER_ELEMENT = ProductCardHTML.createElement(
      'div',
      'products-card__footer flex',
    );
    const PRODUCT_PRICE = this.productPrice();
    const PRODUCT_CARD_ACTIONS = ProductCardHTML.cardActions();

    PRODUCT_CARD_FOOTER_ELEMENT.appendChild(PRODUCT_PRICE);
    PRODUCT_CARD_FOOTER_ELEMENT.appendChild(PRODUCT_CARD_ACTIONS);

    return PRODUCT_CARD_FOOTER_ELEMENT;
  }

  // Product Price
  productPrice() {
    const PRODUCT_PRICE_ELEMENT = ProductCardHTML.createElement(
      'div',
      'products-card__price',
      `$${this.price}`,
    );
    if (this.discount > 0) {
      PRODUCT_PRICE_ELEMENT.textContent = '';
      const ORIGINAL_PRICE_ELEMENT = ProductCardHTML.createElement('s');
      ORIGINAL_PRICE_ELEMENT.textContent = `$${this.price.toFixed(2)}`;
      const DISCOUNT_PRICE_ELEMENT = ProductCardHTML.createElement('span');
      DISCOUNT_PRICE_ELEMENT.textContent = `$${this.getDiscountedPrice().toFixed(2)}`;

      PRODUCT_PRICE_ELEMENT.appendChild(ORIGINAL_PRICE_ELEMENT);
      PRODUCT_PRICE_ELEMENT.appendChild(DISCOUNT_PRICE_ELEMENT);
    }
    return PRODUCT_PRICE_ELEMENT;
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
    LIKE_BTN_ELEMENT.className = 'product-card__like-btn';
    LIKE_BTN_ELEMENT.setAttribute('data-wishlist', 'notAdded');
    LIKE_BTN_ELEMENT.appendChild(SvgIcons.likeIcon());
    return LIKE_BTN_ELEMENT;
  }

  // Cart Button
  static cartButton() {
    const CART_BTN_ELEMENT = ProductCardHTML.createElement('button');
    CART_BTN_ELEMENT.className = 'product-card__add-to-cart-btn';
    CART_BTN_ELEMENT.appendChild(SvgIcons.addToCartIcon());

    return CART_BTN_ELEMENT;
  }
}

export default ProductCardHTML;
