class SetSearchPostion {
  constructor() {
    this.HEADER_NAV_ELEMENT = document.getElementById('headerNav');
    this.headerMeasurement = this.HEADER_NAV_ELEMENT.getBoundingClientRect();
    this.getHeaderNavWidth();
    this.getHeaderNavPostion();
    this.setSearchHeightAndPosition();
    this.addListeners();
  }

  getHeaderNavWidth() {
    const headerWidth = this.headerMeasurement.width;
    return headerWidth;
  }

  getHeaderNavPostion() {
    const headerPostion = this.headerMeasurement.left;
    return headerPostion;
  }

  setSearchHeightAndPosition() {
    if(window.innerWidth >= 1024) {
    const SEARCH_BOX_ELEMENT = document.getElementById('search-box-popup');
    const width = `${this.getHeaderNavWidth()}px`;
    const left = `${this.getHeaderNavPostion()}px`;

    SEARCH_BOX_ELEMENT.style.width = width;

    SEARCH_BOX_ELEMENT.style.left = left;
  }
}

addListeners() {
    const boundSetSearchPosition = this.setSearchHeightAndPosition.bind(this);
    document.addEventListener('DOMContentLoaded', boundSetSearchPosition);
    // window.addEventListener('resize', boundSetSearchPosition);
}
}

export default SetSearchPostion;
