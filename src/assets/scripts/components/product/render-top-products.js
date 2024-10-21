import RenderProductCard from './render-product-card.js';

class RenderTopProducts {
  constructor() {
    RenderTopProducts.render();
  }

  static async render() {
    const renderProducts = await RenderProductCard.render('products-card__container');
    return renderProducts;
  }
}

export default RenderTopProducts;
