import SvgIcons from './svg-icons.js';

class AddToWishList extends SvgIcons {
  constructor(linkBtnClass) {
    super();
    this.className = `.${linkBtnClass}`;
    this.ADD_TO_WISHLIST = document.querySelectorAll(this.className);

    this.attachListeners();
  }

  toggleLIkeIcon(event) {
    const targetBtn = event.target.closest(this.className);

    if(!targetBtn) return;
    const isWishlistAdded = targetBtn.getAttribute('data-wishlist');

    if (isWishlistAdded === 'notAdded') {
      targetBtn.querySelector('svg').remove();
      targetBtn.appendChild(SvgIcons.filledLikeIcon());
      targetBtn.setAttribute('data-wishlist', 'added');
    } else {
      targetBtn.querySelector('svg').remove();
      targetBtn.appendChild(SvgIcons.likeIcon());
      targetBtn.setAttribute('data-wishlist', 'notAdded');
    }
  
  }
  // toggleLIkeIcon() {
  //   this.ADD_TO_WISHLIST.forEach((btn) => {
  //     const isWishlistAdded = btn.getAttribute('data-wishlist');
  //     if (isWishlistAdded === 'notOpened') {
  //       btn.appendChild(SvgIcons.likeIcon());
  //       btn.setAttribute('data-wishlist', 'opened');
  //     } else {
  //       btn.appendChild(SvgIcons.filledLikeIcon());
  //       btn.setAttribute('data-wishlist', 'notOpened');
  //     }
  //   });
  // }

  attachListeners() {
    this.ADD_TO_WISHLIST.forEach((btn) => {
      btn.addEventListener('click', (event)=> {
        this.toggleLIkeIcon(event);
      });
    });
  }
}

export default AddToWishList;
