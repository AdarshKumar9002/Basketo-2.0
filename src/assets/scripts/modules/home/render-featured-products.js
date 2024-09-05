import FeaturedProducts from './featured-products.js';
import ProductCardHTML from './feature-product-card-html.js';

class RenderProducts {
  constructor(link) {
    this.apiLink = link;
    this.render();
  }

  // Create the product card and return its DOM element
  productsCardHTML(img, title, description, price, discount) {
    const cardHTML = new ProductCardHTML(img, title, description, price, discount);
    return cardHTML.renderCard();  
  }

  async productList() {
    const products = new FeaturedProducts(this.apiLink);
    const productList = await products.getProducts(this.apiLink);
    return productList;
  }

  discountGenrator(max, min) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  async render() {
    const productList = await this.productList();
    const PRODUCT_CARD_CONTAINER_ELEMENT = document.querySelector('.products-card__container');
    
    productList.forEach(product => {
      const discount = this.discountGenrator(30, 10);  
    //   const img = JSON.parse(product.images[0]); 
      const img = 'https://placehold.co/640x480' ;
      
      PRODUCT_CARD_CONTAINER_ELEMENT.appendChild(
        this.productsCardHTML(img, product.title, product.description, product.price, discount)
      );
    });
  }
  
}

export default RenderProducts;
