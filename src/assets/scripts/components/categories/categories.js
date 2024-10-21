import ApiCalls from '../../reusable/api.js';

class GetCategories extends ApiCalls {
  constructor(link) {
    super();
    this.platziApi(link);
  }

  // Getting categories from platzi
  async platziApi(link) {
    try {
      const categories = await this.get(link);

      return categories;
    } catch (error) {
      alert(`Category: ${error}`);
      throw new Error(`Category: ${error}`);
    }
  }

}
export default GetCategories;
