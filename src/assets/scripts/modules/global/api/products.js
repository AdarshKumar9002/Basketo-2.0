import ApiCalls from './api.js';

class FeaturedProducts extends ApiCalls {
  constructor(link) {
    super();
    this.getProducts(link);
  }

  async getProducts(link) {
    const products = await this.get(link);
    return products;
  }
}

export default FeaturedProducts;
