import ApiCalls from "../../reusable/api.js";

class FetchSingleProduct {
    constructor() {
        this.apiCall = new ApiCalls();
        this.fetchProduct();
    }

    static getParameterValue(paraName) {
        const url = new URL(window.location.href);
        const parameters = url.searchParams;
        const parameterValue = parameters.get(paraName);
        return parameterValue;
    }

    static getProductId() {
        return FetchSingleProduct.getParameterValue('productId');
    }

    static getProductName() {
        return FetchSingleProduct.getParameterValue('productName');
    }

    static createUrl() {
        const productId = FetchSingleProduct.getProductId();
        const URL = `https://dummyjson.com/products/${productId}`;
        return URL;
    }

    async fetchProduct() {
        const URL = FetchSingleProduct.createUrl();
        const productDetail = await this.apiCall.get(URL);
        return productDetail;
    }

}

export default FetchSingleProduct;