class PopulateSingleProductPage {
    constructor(images, title, price, rating, ratingCount, description) {
        this.init();
        this.productData(images, title, price, rating, ratingCount, description);
    }
    
    init() {
        this. PRODUCT_IMAGE_ALT_ELEMENT = document.getElementById('product-name-alt');
        this. PRODUCT_IMAGE_MAIN_ELEMENT = document.getElementById('product-name-main');
        this. PRODUCT_RATING_ELEMENT = document.querySelector('.product-rating');
        this. PRODUCT_TITLE_ELEMENT = document.getElementById('product-name');
        this. PRODUCT_PRICE_ELEMENT = document.getElementById('product-price');
        this. PRODUCT_DESCRIPTION_ELEMENT = document.getElementById('product-description');
    }

    productData(images, title, price, rating, ratingCount, description) {
        this.images = images;
        this.title = title;
        this.price = price;
        this.rating = rating;
        this.ratingCount = ratingCount;
        this.description = description;
    }

    populateTitl

}

