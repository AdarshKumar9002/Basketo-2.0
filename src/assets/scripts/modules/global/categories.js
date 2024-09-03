import ApiCalls from './api.js';

class GetCategories extends ApiCalls {
  constructor(link) {
    super();
    this.platziApi(link);
  }

  // Getting categories from platzi
  async platziApi(link) {
    try {
      const categories = await this.get(link);
      console.log('paltzi', categories);

      return categories;
    } catch (error) {
      alert(error);
      throw new Error(error);
    }
  }

}
export default GetCategories;
