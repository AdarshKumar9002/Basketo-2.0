import CreateElement from '../utility/create-element.js';

class AdditionalInfoTabelMarkup {
  static tabel(dataArray) {
    const TABEL_ELEMENT = CreateElement.create('tabel');
    const TABEL_HEAD = AdditionalInfoTabelMarkup.tabelHead();
    const TABEL_BODY = AdditionalInfoTabelMarkup.tabelBody(dataArray);

    TABEL_ELEMENT.appendChild(TABEL_HEAD);
    TABEL_ELEMENT.appendChild(TABEL_BODY);

    return TABEL_ELEMENT;
  }

  static tabelHead() {
    const TABEL_HEAD_ELEMENT = CreateElement.create('thead');
    const TABEL_HEADER = AdditionalInfoTabelMarkup.tabelHeader();

    TABEL_HEAD_ELEMENT.appendChild(TABEL_HEADER);

    return TABEL_HEAD_ELEMENT;
  }

  static tabelHeader() {
    const TABEL_HEADER_ROW_ELEMENT = CreateElement.create('tr');

    const headers = ['Specification', 'Details'];

    headers.forEach((item) => {
      const TABEL_HEADER_ELEMENT = CreateElement.create('th');

      TABEL_HEADER_ELEMENT.textContent = item;
      TABEL_HEADER_ROW_ELEMENT.appendChild(TABEL_HEADER_ELEMENT);
    });

    return TABEL_HEADER_ROW_ELEMENT;
  }

  static tabelBody(dataArray) {
    const TABEL_BODY_ELEMENT = CreateElement.create('tbody');

    dataArray.forEach((data) => {
      const TABEL_DATA = AdditionalInfoTabelMarkup.tabelData(data);
      TABEL_BODY_ELEMENT.appendChild(TABEL_DATA);
    });

    return TABEL_BODY_ELEMENT;
  }

  static tabelData(data = ['Specs Type:', 'Specs Value']) {
    const TABEL_HEADER_ROW_ELEMENT = CreateElement.create('tr');

    data.forEach((item) => {
      const TABEL_DATA_ELEMENT = CreateElement.create('td');
      TABEL_DATA_ELEMENT.textContent = item;
      TABEL_HEADER_ROW_ELEMENT.appendChild(TABEL_DATA_ELEMENT);
    });

    return TABEL_HEADER_ROW_ELEMENT;
  }
}

export default AdditionalInfoTabelMarkup;
