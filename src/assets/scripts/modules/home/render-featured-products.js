import FeaturedProducts from '../global/products.js';
import ProductCardHTML from '../global/product-card-html.js';

class RenderProducts {
  constructor(link) {
    this.apiLink = link;
    this.render();
  }

  // Create the product card and return its DOM element
  static productsCardHTML(img, title, description, price, discount) {
    const cardHTML = new ProductCardHTML(
      img,
      title,
      description,
      price,
      discount,
    );
    return cardHTML.renderCard();
  }

  async productList() {
    const products = new FeaturedProducts(this.apiLink);
    const productList = await products.getProducts(this.apiLink);
    return productList.products;
  }

  async render() {
    const productList = await this.productList();

    const PRODUCT_CARD_CONTAINER_ELEMENT = document.querySelector(
      '.products-card__container',
    );

    productList.forEach((product) => {
      const img = product.images[0];
      const discount = Math.round(product.discountPercentage);

      PRODUCT_CARD_CONTAINER_ELEMENT.appendChild(
        RenderProducts.productsCardHTML(
          img,
          product.title,
          product.rating,
          product.price,
          discount,
        ),
      );
    });
  }
}

export default RenderProducts;
