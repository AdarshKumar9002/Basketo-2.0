class SvgIcons {

  static svg(viewBox, className, svgPath, fill = '#000') {
    const SVG_ELEMENT = document.createElementNS(
      'http://www.w3.org/2000/svg',
      'svg',
    );
    SVG_ELEMENT.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    SVG_ELEMENT.setAttribute('viewBox', viewBox);
    SVG_ELEMENT.classList = className;
    const SVG_PATH_ELEMENT = document.createElementNS(
      'http://www.w3.org/2000/svg',
      'path',
    );
    SVG_PATH_ELEMENT.setAttribute('d', svgPath);
    SVG_PATH_ELEMENT.style.fill = fill;

    SVG_ELEMENT.appendChild(SVG_PATH_ELEMENT);
    return SVG_ELEMENT;
  }

  static likeIcon() {
    const viewBox = '0 0 512 512';
    const className = 'icon-like';
    const fill = '#fff';
    const path =
      'M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8l0-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5l0 3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20-.1-.1s0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5l0 3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2l0-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z';

    const likeIcon = SvgIcons.svg(viewBox, className, path,fill);
    return likeIcon;
  }

  static compareIcon() {
    const viewBox = '0 0 448 512';
    const className = 'icon-compare';
    const fill = '#fff';
    const path =
      'M438.6 150.6c12.5-12.5 12.5-32.8 0-45.3l-96-96c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.7 96 32 96C14.3 96 0 110.3 0 128s14.3 32 32 32l306.7 0-41.4 41.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l96-96zm-333.3 352c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 416 416 416c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0 41.4-41.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-96 96c-12.5 12.5-12.5 32.8 0 45.3l96 96z';
    const compareIcon = SvgIcons.svg(viewBox, className, path,fill);
    return compareIcon;
  }

  static shareIcon() {
    const viewBox = '0 0 448 512';
    const className = 'icon-share';
    const fill = '#fff';
    const path =
      'M352 224c53 0 96-43 96-96s-43-96-96-96s-96 43-96 96c0 4 .2 8 .7 11.9l-94.1 47C145.4 170.2 121.9 160 96 160c-53 0-96 43-96 96s43 96 96 96c25.9 0 49.4-10.2 66.6-26.9l94.1 47c-.5 3.9-.7 7.8-.7 11.9c0 53 43 96 96 96s96-43 96-96s-43-96-96-96c-25.9 0-49.4 10.2-66.6 26.9l-94.1-47c.5-3.9 .7-7.8 .7-11.9s-.2-8-.7-11.9l94.1-47C302.6 213.8 326.1 224 352 224z';
    const shareIcon = SvgIcons.svg(viewBox, className, path, fill);
    return shareIcon;
  }

  static starIcon(filledPercent) {
    const viewBox = '0 0 576 512';
    const className = 'icon-star';
    const fill = 'url(#star-gradient)';
    const path = 'M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z';

    

    // Create defs and linearGradient for the fill
    const DEFS_ELEMENT = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
    const LINEAR_GRADIENT_ELEMENT = document.createElementNS('http://www.w3.org/2000/svg', 'linearGradient');
    LINEAR_GRADIENT_ELEMENT.setAttribute('id', 'star-gradient');

    // Create gradient stops based on filledPercent
    const STOP_1_ELEMENT = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
    STOP_1_ELEMENT.setAttribute('offset', `${filledPercent}%`);
    STOP_1_ELEMENT.setAttribute('stop-color', 'gold');

    const STOP_2_ELEMENT = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
    STOP_2_ELEMENT.setAttribute('offset', `${filledPercent}%`);
    STOP_2_ELEMENT.setAttribute('stop-color', 'lightgray');

    
    LINEAR_GRADIENT_ELEMENT.appendChild(STOP_1_ELEMENT);
    LINEAR_GRADIENT_ELEMENT.appendChild(STOP_2_ELEMENT);

    const starIcon = SvgIcons.svg(viewBox, className, path, fill);

    
    DEFS_ELEMENT.appendChild(LINEAR_GRADIENT_ELEMENT);
    starIcon.appendChild(DEFS_ELEMENT);

    return starIcon;
  }
}

export default SvgIcons;
