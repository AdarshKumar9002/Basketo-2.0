class ProductImageCarousel {
  constructor() {
    this.PRODUCT_IMAGE_TRACK_ELEMENT = document.querySelector(
      '.product-image__main-track',
    );

    this.PRODUCT_IMAGE_SLIDES_ELEMENT = Array.from(
      this.PRODUCT_IMAGE_TRACK_ELEMENT.children,
    );

    this.PRODUCT_IMAGE_INDICATOR_ELEMENT = Array.from(
      document.querySelectorAll('.product-image__nav-indicator'),
    );

    this.applyInitialPosition();
  }

  // get the width of a single slide
  getImageContainerWidth() {
    return this.PRODUCT_IMAGE_SLIDES_ELEMENT[0].getBoundingClientRect().width;
  }

  // set slice position
  setSldePosition(slide, index) {
    const eachSlide = slide;
    const slideIndex = index;
    const slideWidth = this.getImageContainerWidth();

    eachSlide.style.left = `${slideWidth * slideIndex}px`;
  }

  // Apply initial position to each slide
  applyInitialPosition() {
    this.PRODUCT_IMAGE_SLIDES_ELEMENT.forEach((slide, index) =>
      this.setSldePosition(slide, index),
    );
  }

  // Move the carousel track to display the target slide
  static moveToImageSlides(trackElement, currentSlide, targetSlide) {
    trackElement.style.transform = `translateX(-${targetSlide.style.left})`;
    currentSlide.classList.remove('product-image__main-slide--active');
    targetSlide.classList.add('product-image__main-slide--active');
  }

  // Update the active dot indicators in the navigation
  static updateIndicator(currentDot, targetDot) {
    currentDot.classList.remove('product-image__nav-indicator--active');
    targetDot.classList.add('product-image__nav-indicator--active');
  }

  showPreviousImage() {
    const CURRENT_SLIDE = this.PRODUCT_IMAGE_TRACK_ELEMENT.querySelector(
      '.product-image__main-slide--active',
    );
    const PREVIOUS_SLIDE = CURRENT_SLIDE.previousElementSibling;
    const CURRENT_DOT = document.querySelector(
      '.product-image__nav-indicator--active',
    );
    // const PREVIOUS_DOT = CURRENT_DOT.previousElementSibling;

    if (!CURRENT_DOT.parentElement.previousElementSibling) {
      return;
    }
    const PREVIOUS_DOT = CURRENT_DOT.parentElement.previousElementSibling.children[0];

    ProductImageCarousel.moveToImageSlides(
      this.PRODUCT_IMAGE_TRACK_ELEMENT,
      CURRENT_SLIDE,
      PREVIOUS_SLIDE,
    );
    ProductImageCarousel.updateIndicator(CURRENT_DOT, PREVIOUS_DOT);
  }

  showNextImage() {
    const CURRENT_SLIDE = this.PRODUCT_IMAGE_TRACK_ELEMENT.querySelector(
      '.product-image__main-slide--active',
    );
    const NEXT_SLIDE = CURRENT_SLIDE.nextElementSibling;
    const CURRENT_DOT = document.querySelector(
      '.product-image__nav-indicator--active',
    );
    if (!CURRENT_DOT.parentElement.nextElementSibling) {
      return;
    }
    const NEXT_DOT = CURRENT_DOT.parentElement.nextElementSibling.children[0];

    ProductImageCarousel.moveToImageSlides(
      this.PRODUCT_IMAGE_TRACK_ELEMENT,
      CURRENT_SLIDE,
      NEXT_SLIDE,
    );
    ProductImageCarousel.updateIndicator(CURRENT_DOT, NEXT_DOT);
  }

  productImageDotNav(event) {
    const targetDot = event.target.closest('button');
    if (!targetDot) return;
    const CURRENT_SLIDE = this.PRODUCT_IMAGE_TRACK_ELEMENT.querySelector(
      '.product-image__main-slide--active',
    );
    const CURRENT_DOT = document.querySelector(
      '.product-image__nav-indicator--active',
    );

    const targetIndex = this.PRODUCT_IMAGE_INDICATOR_ELEMENT.findIndex(
      (dot) => dot === targetDot,
    );
    const targetSlide = this.PRODUCT_IMAGE_SLIDES_ELEMENT[targetIndex];

    ProductImageCarousel.moveToImageSlides(
      this.PRODUCT_IMAGE_TRACK_ELEMENT,
      CURRENT_SLIDE,
      targetSlide,
    );
    ProductImageCarousel.updateIndicator(CURRENT_DOT, targetDot);
  }
}

export default ProductImageCarousel;
