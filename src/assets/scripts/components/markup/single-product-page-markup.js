import AdditionalInfoTabelMarkup from './additional-info-markup.js';
import ProductImage from './product-image-markup.js';

class SingleProductPageMarkup {
  // Product Image
  static productImageFragmentStorage(productImg, title) {
    const FRAGMENT_ELEMENT = document.createDocumentFragment();
    const ALT_IMAGE_ELEMENTS = SingleProductPageMarkup.productAltImage(
      productImg,
      title,
    );

    const MAIN_IMAGE_ELEMENTS = SingleProductPageMarkup.productMainImage(
      productImg,
      title,
    );

    const PRODUCT_IMAGE_NAV_ELEMENTS =
      SingleProductPageMarkup.productImageNav(productImg);

    FRAGMENT_ELEMENT.append(ALT_IMAGE_ELEMENTS);
    FRAGMENT_ELEMENT.append(MAIN_IMAGE_ELEMENTS);
    FRAGMENT_ELEMENT.append(PRODUCT_IMAGE_NAV_ELEMENTS);

    return FRAGMENT_ELEMENT;
  }

  static productImageElements(className, productImg, title) {
    return ProductImage.imageTracks(className, productImg, title);
  }

  // Alt Image
  static productAltImage(productImg, title) {
    return SingleProductPageMarkup.productImageElements(
      'alt',
      productImg,
      title,
    );
  }

  // Main Image
  static productMainImage(productImg, title) {
    return SingleProductPageMarkup.productImageElements(
      'main',
      productImg,
      title,
    );
  }

  // Product Image Dot Navigation
  static productImageNav(productImg) {
    return ProductImage.imageNav(productImg);
  }

  // Additional info
  static productAdditionalInfoData(dataObject) {
    return Object.entries(dataObject);
  }

  static productAdditionalInfoMarkup(dataObject) {
    const dataArray =
      SingleProductPageMarkup.productAdditionalInfoData(dataObject);
    return AdditionalInfoTabelMarkup.tabel(dataArray);
  }
}

export default SingleProductPageMarkup;
