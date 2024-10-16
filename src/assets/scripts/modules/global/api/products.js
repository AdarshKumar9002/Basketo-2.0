import ApiCalls from './api.js';

class FeaturedProducts extends ApiCalls {

  async getProducts(link) {
    const products = await this.get(link);
    return products;
  }
}

export default FeaturedProducts;
