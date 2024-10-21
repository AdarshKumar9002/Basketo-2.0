class ProdutctAddedMsg {

    static createMsgMarkup(addedPlace) {
        const MSG_CONTAINER_ELEMENT = document.createElement('div');
        MSG_CONTAINER_ELEMENT.id='product-added-msg';
        MSG_CONTAINER_ELEMENT.textContent = `Item added to ${addedPlace}.`;
        return MSG_CONTAINER_ELEMENT;
    }

    static appendMsgMarkup(addedPlace) {
        const MSG_BOX_ELEMENT = document.getElementById('msg-box');
        const MSG_CONTAINER = ProdutctAddedMsg.createMsgMarkup(addedPlace);
        MSG_BOX_ELEMENT.appendChild(MSG_CONTAINER);
    }

    static addToWishlistMsg() {
        ProdutctAddedMsg.appendMsgMarkup('Wishlist');
      }

    static addToCartMsg() {
        ProdutctAddedMsg.appendMsgMarkup('Cart');
      }
}

export default ProdutctAddedMsg;