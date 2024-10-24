import ApiCalls from "../../reusable/api.js";

class GetSingleProductData {
  constructor() {
    this.url = new URL(window.location.href);
    this.getProduct = new ApiCalls();
    this.fetchProduct();
  }

  getParameterInfo(parameter) {
    if (this.url.pathname !== '/src/product-page.html') return 0;

    const allParameters = this.url.searchParams;
    const singleParameter = allParameters.get(parameter);

    return singleParameter;
  }
  
  getProductId() {
    return this.getParameterInfo('productId');
  }
  
  getProductName() {
    return this.getParameterInfo('productName');
  }

  async fetchProduct() {
    const productId = this.getProductId();
    const URL = `https://dummyjson.com/products/${productId}`;
    const product = await this.getProduct.get(URL);
    return product;
  }

}

export default GetSingleProductData;
