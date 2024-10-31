import ProductImageCarousel from './product-image-carousel.js';

class ProductImageCarouselControls extends ProductImageCarousel {
  constructor() {
    super();
    this.init();
    this.eventListeners();
  }

  init() {
    this.startX = 0;
    this.isDragging = false;
  }

  /* ===== Mobile ===== */
  findTouchDifference(currentX) {
    const difference = this.startX - currentX;
    if (difference > 50) {
      this.showNextImage();
      this.isDragging = false;
    }
    if (difference < -50) {
      this.showPreviousImage();
      this.isDragging = false;
    }
  }

  touchStartEvent(event) {
    this.startX = event.touches[0].clientX;
    this.isDragging = true;
  }

  touchMoveEvent(event) {
    if (!this.isDragging) return;
    this.currentX = event.touches[0].clientX;
    this.findTouchDifference(this.currentX);
  }

  touchEndEvent() {
    this.isDragging = true;
  }

  /* ===== Desktop and Tablet ===== */
  findMouseMovementDifference(currentX) {
    const difference = this.startX - currentX;
    if (difference > 50) {
      this.showNextImage();
      this.isDragging = false;
    }
    if (difference < -50) {
      this.showPreviousImage();
      this.isDragging = false;
    }
  }

  mouseDownEvent(event) {
    this.startX = event.clientX;
    this.isDragging = true;
  }

  mouseMoveEvent(event) {
    if (!this.isDragging) return;
    this.currentX = event.clientX;
    this.findMouseMovementDifference(this.currentX);
  }

  mouseUpEvent() {
    this.isDragging = false;
  }

  mouseLeaveEvent() {
    this.isDragging = false;
  }

  eventListeners() {
    // Move Carousel based on which Dot indicator is clicked
    this.PRODUCT_IMAGE_INDICATOR_ELEMENT.forEach((element) => {
      element.addEventListener('click', this.productImageDotNav.bind(this));
    });

    // It will be fired when the user has touch inside the element
    this.PRODUCT_IMAGE_TRACK_ELEMENT.addEventListener(
      'touchstart',
      this.touchStartEvent.bind(this),
    );

    // It will be fired when the user has moved along the touch surface
    this.PRODUCT_IMAGE_TRACK_ELEMENT.addEventListener(
      'touchmove',
      this.touchMoveEvent.bind(this),
    );

    // It will be fired when the user has stop touching the screen.
    this.PRODUCT_IMAGE_TRACK_ELEMENT.addEventListener(
      'touchend',
      this.touchEndEvent.bind(this),
    );

    // Mouse events for desktop

    // It will be fire when user click inside the element
    this.PRODUCT_IMAGE_TRACK_ELEMENT.addEventListener('mousedown', this.mouseDownEvent.bind(this));

    // It will be fire when user move the cursor inside the element
    this.PRODUCT_IMAGE_TRACK_ELEMENT.addEventListener('mousemove', this.mouseMoveEvent.bind(this));

    // It will be fire when user release the mouse inside the element
    this.PRODUCT_IMAGE_TRACK_ELEMENT.addEventListener('mouseup', this.mouseUpEvent.bind(this));

    // It will be fire when user move the cursor outsite of the element
    this.PRODUCT_IMAGE_TRACK_ELEMENT.addEventListener('mouseleave', this.mouseLeaveEvent.bind(this));

    // It will be fire when user on the element
  }
}

export default ProductImageCarouselControls;
