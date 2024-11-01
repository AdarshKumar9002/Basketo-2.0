import ProductCardHTML from '../markup/product-card-html.js';
import FilterProducts from '../filter/filter-products.js';

class RenderProductCard {
  static totalProductLoaded = 0;

  static updateTotalProductLoaded() {
    RenderProductCard.totalProductLoaded += 20;
  }

  static apiUrl() {
    const skipProducts = RenderProductCard.totalProductLoaded;
    const API_URL = `https://dummyjson.com/products?limit=20&skip=${skipProducts}&select=title,price,rating,reviews,images,discountPercentage`;
    return API_URL;
  }

  // Create the product card and return its DOM element
  static productsCardHTML(
    productId,
    img,
    title,
    rating,
    reviews,
    price,
    discount,
  ) {
    const cardHTML = new ProductCardHTML(
      productId,
      img,
      title,
      rating,
      reviews,
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
          product.id,
          img,
          product.title,
          product.rating,
          product.reviews,
          product.price,
          discount,
        ),
      );
    });
  }
}

export default RenderProductCard;
