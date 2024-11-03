import SvgIcons from '../../local/svg-icons.js';
import CreateElement from '../utility/create-element.js';

class ProductReviewMarkup {
  static reviewContainer(name, givenRating, givenComment, reivedDate) {
    const PRODUCT_REVIEW_CONTANINER_ELEMENT = CreateElement.create('article');

    const REVIEWER_NAME = this.revierName(name);
    const RATING = this.rating(givenRating);
    const COMMENT = this.comment(givenComment);
    const DATE = this.date(reivedDate);

    PRODUCT_REVIEW_CONTANINER_ELEMENT.append(REVIEWER_NAME);
    PRODUCT_REVIEW_CONTANINER_ELEMENT.append(RATING);
    PRODUCT_REVIEW_CONTANINER_ELEMENT.append(COMMENT);
    PRODUCT_REVIEW_CONTANINER_ELEMENT.append(DATE);

    return PRODUCT_REVIEW_CONTANINER_ELEMENT;
  }

  static revierName(name) {
    const PRODUCT_REVIEWER_NAME_ELEMENT = CreateElement.create('h3', '', name);
    return PRODUCT_REVIEWER_NAME_ELEMENT;
  }

  static rating(givenRating) {
    const PRODUCT_RATING_ELEMENT = CreateElement.create(
      'div',
      '',
      `Rating: ${givenRating}`,
    );
    const star = SvgIcons.starIcon(100);
    PRODUCT_RATING_ELEMENT.append(star);
    return PRODUCT_RATING_ELEMENT;
  }

  static comment(givenComment) {
    const PRODUCT_REVIEW_ELEMENT = CreateElement.create('p', '', givenComment);
    return PRODUCT_REVIEW_ELEMENT;
  }

  static date(reivedDate) {
    const PRODUCT_DATE_ELEMENT = CreateElement.create(
      'small',
      '',
      `Revied on: ${reivedDate}`,
    );
    return PRODUCT_DATE_ELEMENT;
  }
}


export default ProductReviewMarkup;