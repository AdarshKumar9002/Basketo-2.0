import FeaturedProducts from './products.js';

class FilterProducts extends FeaturedProducts {

  static async productList(API_URL) {
    const productList = new FeaturedProducts(API_URL);
    const products = await productList.getProducts(API_URL);
    return products.products;
  }

  static async removeSpecificProducts(API_URL) {
    const bannedProduct = ['beef', 'chicken'];
    const products = await FilterProducts.productList(API_URL);
    const newProductList = products.filter((product) => {
      const productTitle = product.title.toLowerCase();
      return !bannedProduct.some((keyword) => productTitle.includes(keyword));
    });
    return newProductList;
  }

  static async filteredProducts(API_URL) {
    const productList = await FilterProducts.removeSpecificProducts(API_URL);
    return productList;
  }
}

export default FilterProducts;
