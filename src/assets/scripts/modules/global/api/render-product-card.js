import ProductCardHTML from './product-card-html.js';
import FilterProducts from './filter-products.js';

class RenderProductCard {
  static totalProductLoaded = 0;

  static updateTotalProductLoaded() {
    RenderProductCard.totalProductLoaded += 20;
  }

  static apiUrl() {
    const skipProducts = RenderProductCard.totalProductLoaded;
    const API_URL = `https://dummyjson.com/products?limit=20&skip=${skipProducts}&select=title,price,rating,images,discountPercentage`;
    return API_URL;
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

  //   Append the cards to the container element
  static async render(cardContainerElement) {
    const url = RenderProductCard.apiUrl();

    const productList = await FilterProducts.filteredProducts(url);

    const PRODUCT_CARD_CONTAINER_ELEMENT = document.querySelector(
      `.${cardContainerElement}`,
    );

    productList.forEach((product) => {
      const img = product.images[0];
      const discount = Math.round(product.discountPercentage);

      PRODUCT_CARD_CONTAINER_ELEMENT.appendChild(
        RenderProductCard.productsCardHTML(
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

export default RenderProductCard;
