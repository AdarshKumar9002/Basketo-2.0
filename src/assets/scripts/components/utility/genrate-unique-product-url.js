class GenerateURL {
    
  static generateURL(id, name) {
    // const URL_PROTOCOL = window.location.protocol;
    // const BASE_URL = window.location.host;
    const productId = id;
    let productName = name;
    // '/\s+/g' search for whitespace
    productName = productName.replace(/\s+/g, '');

    const newURL = `./product-page.html?productName=${productName}&productId=${productId}`;
    // const newURL = `/product-page.html?productName=${productName}&productId=${productId}`;

    return newURL;
  }
}

export default GenerateURL;
