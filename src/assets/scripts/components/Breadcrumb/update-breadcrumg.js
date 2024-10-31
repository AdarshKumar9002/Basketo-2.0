import FetchSingleProduct from "../fetch/fetch-single-product.js";

class UpdateBreadcrumb {
    constructor() {
        this.fetchSingleProduct = new FetchSingleProduct();
        this.updateCategory();
        this.updateProductName();
    }

    async getCategory() {
        const productDetail = await this.fetchSingleProduct.fetchProduct();
        const { category } = productDetail; 
        // Capitalize the first letter and keep the rest lowercase
        const uppercasedCategory = category.charAt(0).toUpperCase() + category.slice(1).toLowerCase();
        return uppercasedCategory;
    }
    

    async getProductName() {
        const productDetail = await this.fetchSingleProduct.fetchProduct();
        const name = productDetail.title;
        return name;
    }

    async updateCategory() {
        const category = await this.getCategory();
        const BREADCRUMB_CATEGORY_ELEMENT  = document.querySelector('.breadcrumb li + li a');
        // BREADCRUMB_CATEGORY_ELEMENT.href=''; // will update this later
        BREADCRUMB_CATEGORY_ELEMENT.textContent=category;

    }

    async updateProductName() {
        const name = await this.getProductName();
        const BREADCRUMB_CATEGORY_ELEMENT  = document.querySelector('.breadcrumb ul :last-child a');
        BREADCRUMB_CATEGORY_ELEMENT.href= window.location.href; 
        BREADCRUMB_CATEGORY_ELEMENT.textContent=name;
    }
}

export default UpdateBreadcrumb;