class SingleProductPageHeader {
    static changeHeaderCSSPostion() {
        if(window.location.pathname.includes('/product-page.html')) {
            document.querySelector('header').style.position = 'static';
        }
    }
}

export default SingleProductPageHeader;