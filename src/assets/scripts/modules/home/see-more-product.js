import RenderProductCard from '../global/api/render-product-card.js';

class SeeMoreTopProducts {
  constructor() {
    SeeMoreTopProducts.addListener();
  }

  static async addProducts() {
    const addProducts = await RenderProductCard.render(
      'products-card__container',
    );
    return addProducts;
  }

  static addListener() {
    const SEE_MORE_BTN_ELEMENT = document.getElementById('see-more-btn');
    SEE_MORE_BTN_ELEMENT.addEventListener('click', () => {
      RenderProductCard.updateTotalProductLoaded();
      SeeMoreTopProducts.addProducts();
    });
  }
}

export default SeeMoreTopProducts;
