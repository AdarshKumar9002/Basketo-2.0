class ScrollEffect {
  constructor() {
    this.init();
    this.applyStyles();
    this.addScrollListener();
  }

  init() {
    this.HEADER_ELEMENT = document.querySelector('header');
    this.HERO_CONTAINER_ELEMENT = document.querySelector('.hero');
    this.heroContainerBottom =
      this.HERO_CONTAINER_ELEMENT.getBoundingClientRect().bottom;
  }

//   Check scroll postion and add and remove class
  applyStyles() {
    const scrollYposition = window.scrollY;

    if (scrollYposition > this.heroContainerBottom * 0.2) {
        this.HEADER_ELEMENT.classList.add('scrolled');
      this.HEADER_ELEMENT.setAttribute('data-scroll-position', "non-zero");
      return;
    }
    this.HEADER_ELEMENT.classList.remove('scrolled');
    this.HEADER_ELEMENT.setAttribute('data-scroll-position', "zero");
  }

  addScrollListener() {
    window.addEventListener('scroll', () => this.applyStyles());
  }
}
export default ScrollEffect;
