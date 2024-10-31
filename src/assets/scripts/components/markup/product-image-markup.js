import CreateElement from '../utility/create-element.js';

class ProductImage {
  static imageTracks(trackType, productImg, title) {
    const PRODUCT_IMAGE_SLIDE_ELEMENT = CreateElement.create(
      'ul',
      `product-image__${trackType}-track`,
    );

    productImg.forEach((img, index) => {
      const SLIDES = ProductImage.imageSlides(trackType, img, title, index);
      PRODUCT_IMAGE_SLIDE_ELEMENT.appendChild(SLIDES);
    });

    return PRODUCT_IMAGE_SLIDE_ELEMENT;
  }

  static imageSlides(trackType, imgSrc, title, index = 0) {
    const PRODUCT_IMAGE_SLIDE_ELEMENT = CreateElement.create(
      'li',
      `product-image__${trackType}-slide`,
    );

    if (index === 0) {
      PRODUCT_IMAGE_SLIDE_ELEMENT.classList.add(
        `product-image__${trackType}-slide--active`,
      );
    }

    const IMAGE = ProductImage.image(imgSrc, title);
    PRODUCT_IMAGE_SLIDE_ELEMENT.appendChild(IMAGE);

    return PRODUCT_IMAGE_SLIDE_ELEMENT;
  }

  static image(imgSrc, title) {
    const PRODUCT_IMAGE_ELEMENT = CreateElement.create('img');
    PRODUCT_IMAGE_ELEMENT.src = imgSrc;
    PRODUCT_IMAGE_ELEMENT.alt = title;

    return PRODUCT_IMAGE_ELEMENT;
  }

  // Carsoule Dot Navigation

  static imageNav(productImg) {
    const PRODUCT_NAV_ELEMENT = CreateElement.create(
      'ul',
      'product-image__nav flex',
    );

    productImg.forEach((img, index) => {
      const BUTTON_LIST = ProductImage.navBtnList(index);

      PRODUCT_NAV_ELEMENT.appendChild(BUTTON_LIST);
    });

    return PRODUCT_NAV_ELEMENT;
  }

  static navBtnList(index) {
    const PRODUCT_BTN_LIST_ELEMENT = CreateElement.create('li');

    const DOT_BUTTON = ProductImage.navButton(index);

    PRODUCT_BTN_LIST_ELEMENT.appendChild(DOT_BUTTON);
    return PRODUCT_BTN_LIST_ELEMENT;
  }

  static navButton(index = 0) {
    const PRODUCT_NAV_BTN_ELEMENT = CreateElement.create(
      'button',
      'product-image__nav-indicator',
      '',
    );

    if (index === 0) {
      PRODUCT_NAV_BTN_ELEMENT.classList.add(
        'product-image__nav-indicator--active',
      );
    }

    return PRODUCT_NAV_BTN_ELEMENT;
  }
}

export default ProductImage;
