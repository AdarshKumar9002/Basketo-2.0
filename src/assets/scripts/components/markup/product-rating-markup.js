// import CreateElement from '../utility/create-element.js';
import SvgIcons from '../../local/svg-icons.js';

class ProductRatingMarkup {
  static ratingStars(rating) {
    const RATING_STAR_FRAGMENT_ELEMENT = document.createDocumentFragment();

    const FULL_STAR = this.fullStars(rating);
    const PARTIALLY_FILLED_STAR = this.partialFilledStar(rating);
    const BLANK_STAR = this.blankStars(rating);

    // Append full, half, and blank stars directly
    FULL_STAR.forEach(star => RATING_STAR_FRAGMENT_ELEMENT.appendChild(star));
    if (PARTIALLY_FILLED_STAR) RATING_STAR_FRAGMENT_ELEMENT.appendChild(PARTIALLY_FILLED_STAR);
    BLANK_STAR.forEach(star => RATING_STAR_FRAGMENT_ELEMENT.appendChild(star));

    return RATING_STAR_FRAGMENT_ELEMENT;
  }

  static fullStars(rating) {
    const FULL = 100;
    const fullStarCount = Math.floor(rating);
    const fullStars = [];

    // Create and store full stars
    for (let i = 0; i < fullStarCount; i+=1) {
      fullStars.push(SvgIcons.starIcon(FULL));
    }
    return fullStars;
  }

  static partialFilledStar(rating) {
    const FULL = 100;
    const hasHalfStar = rating % 1 !== 0;

    // Create half star if applicable
    if (hasHalfStar) {
      return SvgIcons.starIcon((rating % 1) * FULL);
    }
    return null;
  }

  static blankStars(rating) {
    const EMPTY = 0;
    const STAR_COUNT = 5;
    const blankStars = [];
    const blankStarCount = STAR_COUNT - Math.ceil(rating);

    // Create and store blank stars
    for (let i = 0; i < blankStarCount; i+=1) {
      blankStars.push(SvgIcons.starIcon(EMPTY));
    }
    return blankStars;
  }
}

export default ProductRatingMarkup;
