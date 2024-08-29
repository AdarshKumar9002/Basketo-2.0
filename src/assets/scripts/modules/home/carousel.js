class Carousel {
  constructor() {
    this.TRACK_ELEMENT = document.querySelector('.carousel__track');
    this.SLIDES_ELEMENTS = Array.from(this.TRACK_ELEMENT.children);
    this.PREV_BTN_ELEMENT = document.getElementById('carousel__prevBtn');
    this.NEXT_BTN_ELEMENT = document.getElementById('carousel__nextBtn');
    this.CURRENT_SLIDE_ELEMENT = this.TRACK_ELEMENT.querySelector(
      '.carousel__slide--current',
    );
    this.DOT_CONTROL_TRACK_ELEMENT = document.querySelector(
      '.carousel__dotControls',
    );
    this.DOT_INDICATOR_BTN_ELEMENTS = Array.from(
      this.DOT_CONTROL_TRACK_ELEMENT.querySelectorAll('button'),
    );

    this.CURRENT_INDICATOR_ELEMENT =
      this.DOT_CONTROL_TRACK_ELEMENT.querySelector('.carousel__currentImage');

    // Get the width of a single slide
    this.carouselSlideWidth =
      this.SLIDES_ELEMENTS[0].getBoundingClientRect().width;

    // Find the index of slide elements for when the page loads
    const initialIndex = this.SLIDES_ELEMENTS.findIndex(
      (slide) => slide === this.CURRENT_SLIDE_ELEMENT,
    );

    this.setSlidePosition();
    this.setEventListeners();
    this.hideShowArrow(initialIndex);
  }

  // Set the initial positions of the slides
  setSlidePosition() {
    this.SLIDES_ELEMENTS.forEach((element, index) => {
      element.style.left = `${this.carouselSlideWidth * index}px`;
    });
  }

  // Move the carousel track to display the target slide
  moveToSlide(targetSlide) {
    const amountToMove = targetSlide.style.left;
    this.TRACK_ELEMENT.style.transform = `translateX(-${amountToMove})`;
    this.CURRENT_SLIDE_ELEMENT.classList.remove('carousel__slide--current');
    targetSlide.classList.add('carousel__slide--current');
    this.CURRENT_SLIDE_ELEMENT = targetSlide; // Update the current slide reference
  }

  // Update the active dot indicators in the navigation
  updateIndicators(targetIndicator) {
    this.CURRENT_INDICATOR_ELEMENT.classList.remove('carousel__currentImage');
    targetIndicator.classList.add('carousel__currentImage');
    this.CURRENT_INDICATOR_ELEMENT = targetIndicator;
  }

  // Show or hide navigation arrows based on the current slide
  hideShowArrow(targetIndex) {
    if (targetIndex === 0) {
      this.PREV_BTN_ELEMENT.classList.add('hidden');
      this.NEXT_BTN_ELEMENT.classList.remove('hidden');
    } else if (targetIndex === this.SLIDES_ELEMENTS.length - 1) {
      this.PREV_BTN_ELEMENT.classList.remove('hidden');
      this.NEXT_BTN_ELEMENT.classList.add('hidden');
    } else {
      this.PREV_BTN_ELEMENT.classList.remove('hidden');
      this.NEXT_BTN_ELEMENT.classList.remove('hidden');
    }
  }

  // Move to the previous slide when the left arrow is clicked
  showPreviousSlide() {
    const PREVIOUS_SLIDE_ELEMENT =
      this.CURRENT_SLIDE_ELEMENT.previousElementSibling;
    const PREVIOUS_INDICATOR_ELEMENT =
      this.CURRENT_INDICATOR_ELEMENT.previousElementSibling;

    if (PREVIOUS_SLIDE_ELEMENT && PREVIOUS_INDICATOR_ELEMENT) {
      const previousIndex = this.SLIDES_ELEMENTS.findIndex(
        (slide) => slide === PREVIOUS_SLIDE_ELEMENT,
      );

      this.moveToSlide(PREVIOUS_SLIDE_ELEMENT);
      this.updateIndicators(PREVIOUS_INDICATOR_ELEMENT);
      this.hideShowArrow(previousIndex);
    }
  }

  // Move to the next slide when the right arrow is clicked
  showNextSlide() {
    const NEXT_SLIDE_ELEMENT = this.CURRENT_SLIDE_ELEMENT.nextElementSibling;
    const NEXT_INDICATOR_ELEMENT =
      this.CURRENT_INDICATOR_ELEMENT.nextElementSibling;

    if (NEXT_SLIDE_ELEMENT && NEXT_INDICATOR_ELEMENT) {
      const nextIndex = this.SLIDES_ELEMENTS.findIndex(
        (slide) => slide === NEXT_SLIDE_ELEMENT,
      );

      this.moveToSlide(NEXT_SLIDE_ELEMENT);
      this.updateIndicators(NEXT_INDICATOR_ELEMENT);
      this.hideShowArrow(nextIndex);
    }
  }

  // Dot Indicator Navigation
  dotIndicatorNav(event) {
    const targetDotIndicator = event.target.closest('button');

    if (!targetDotIndicator) return;

    const targetIndex = this.DOT_INDICATOR_BTN_ELEMENTS.findIndex(
      (btn) => btn === targetDotIndicator,
    );
    const targetSlide = this.SLIDES_ELEMENTS[targetIndex];
    const targetIndicator = targetDotIndicator.parentElement;

    this.moveToSlide(targetSlide);
    this.updateIndicators(targetIndicator);
    this.hideShowArrow(targetIndex);
  }

  // Event listeners
  setEventListeners() {
    this.NEXT_BTN_ELEMENT.addEventListener(
      'click',
      this.showNextSlide.bind(this),
    );
    this.PREV_BTN_ELEMENT.addEventListener(
      'click',
      this.showPreviousSlide.bind(this),
    );
    this.DOT_CONTROL_TRACK_ELEMENT.addEventListener(
      'click',
      this.dotIndicatorNav.bind(this),
    );
  }
}


export default Carousel;
