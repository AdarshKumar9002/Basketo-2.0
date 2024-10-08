import ProdutctAddedMsg from './product-added-msg.js';
import SvgIcons from './svg-icons.js';

class AddToWishList extends SvgIcons {
  constructor(linkBtnClass) {
    super();
    this.className = `.${linkBtnClass}`;
    this.ADD_TO_WISHLIST = document.querySelectorAll(this.className);

    this.attachListeners();
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
    }, 3000);
  }

  // toggle the like icon collor
  toggleLIkeIcon(event) {
    const targetBtn = event.target.closest(this.className);

    if (!targetBtn) return;
    const isWishlistAdded = targetBtn.getAttribute('data-wishlist');

    if (isWishlistAdded === 'notAdded') {
      targetBtn.querySelector('svg').remove();
      targetBtn.appendChild(SvgIcons.filledLikeIcon());
      targetBtn.setAttribute('data-wishlist', 'added');
      AddToWishList.showProductAddedMsg();
    } else {
      targetBtn.querySelector('svg').remove();
      targetBtn.appendChild(SvgIcons.likeIcon());
      targetBtn.setAttribute('data-wishlist', 'notAdded');
    }
  }

  attachListeners() {
    this.ADD_TO_WISHLIST.forEach((btn) => {
      btn.addEventListener('click', (event) => {
        this.toggleLIkeIcon(event);
        
      });
    });
  }
}

export default AddToWishList;
