import ApiCalls from '../../reusable/api.js';
import FetchSingleProduct from './fetch-single-product.js';

class FetchAndCreateAdditonalData {
  constructor() {
    this.apiCall = new ApiCalls();
    this.updatedData();
  }

  static ApiLink() {
    const productId = FetchSingleProduct.getParameterValue('productId');
    const URL = `https://dummyjson.com/products/${productId}?limit=10&select=brand,sku,weight,dimensions,warrantyInformation`;

    return URL;
  }

  async fetchAdditonalData() {
    const URL = FetchAndCreateAdditonalData.ApiLink();
    const AdditionalInfo = await this.apiCall.get(URL);
    return AdditionalInfo;
  }

  async updatedData() {
    const data = await this.fetchAdditonalData();

    if (Object.keys('id')) {
      delete data.id;
    }

    
    if (Object.keys('sku')) {
      data.model = data.sku;
      delete data.sku;
    }

    if(Object.keys('weight')) {
      const weight = `${data.weight}kg`;
      data.weight = weight;
    }

    if (Object.keys('dimensions')) {
      const { width } = data.dimensions;
      const { height } = data.dimensions;
      const { depth } = data.dimensions;
      data.dimensions = `${width}cm x ${height}cm x ${depth}cm`;
    }


    if (Object.keys('warrantyInformation')) {
      const warrantyValue = data.warrantyInformation;
      data.warranty = warrantyValue.split('warranty')[0].trim();
      delete data.warrantyInformation;
    }

    return data;
  }
}

export default FetchAndCreateAdditonalData;
