import ProdutctAddedMsg from "./product-added-msg.js";

class AddToCartMessage {
    constructor() {
        AddToCartMessage.addListener();
    }

      // Show the "Added to wishlist" message and remove it after some time.
  static showProductAddedMsg() {
    const MSG_BOX_ELEMENT = document.getElementById('msg-box');
    MSG_BOX_ELEMENT.innerHTML = '';
    ProdutctAddedMsg.addToCartMsg();
    setTimeout(() => {
      const MSG_CONTAINER_ELEMENT =
        document.getElementById('product-added-msg');
      MSG_CONTAINER_ELEMENT.style.opacity = 0;
      setTimeout(() => MSG_CONTAINER_ELEMENT.remove(), 600);
    }, 3000);
  }
    
    static addListener() {
        const ADD_TO_CART_BTN_ELEMENT = document.querySelectorAll('.product-card__add-to-cart-btn');
        ADD_TO_CART_BTN_ELEMENT.forEach((element) => {
            element.addEventListener('click', AddToCartMessage.showProductAddedMsg);
            
        });
    }
}

export default AddToCartMessage;