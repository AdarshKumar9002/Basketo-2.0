import LocalStorageManger from '../local-history-manager.js';
import SvgIcons from '../svg-icons.js';

class SearchHistoryManager extends LocalStorageManger {
  constructor() {
    super();
    this.SEARCH_BOX_ELEMENT = document.querySelector('.search-box-container');
    this.SEARCH_INPUT_ELEMENT =
      this.SEARCH_BOX_ELEMENT.querySelector('#search-field');
    this.SEARCH_HISTORY_ELEMENT = this.SEARCH_BOX_ELEMENT.querySelector(
      '.search-box-container__search-history',
    );
    this.SEARCH_HISTORY_LIST_ELEMENT =
      this.SEARCH_HISTORY_ELEMENT.querySelector('ul');
    this.populateHistoryList();
    this.addListeners();
  }

  setHistory() {
    const searchHistoryResult = this.SEARCH_INPUT_ELEMENT.value.trim();

    const history = JSON.parse(localStorage.getItem('searchHistory')) || [];
    history.push(searchHistoryResult);

    LocalStorageManger.saveToLocalStorage(
      'searchHistory',
      JSON.stringify(history),
    );
  }

  static getHistory() {
    const history = JSON.parse(
      LocalStorageManger.retrieveFromLocalStorage('searchHistory'),
    );
    return history;
  }

  static listElementHTML(history) {
    const HISTORY_LIST_ELEMENT = document.createElement('li');
    const HISTORY_TEXT_ELEMENT = document.createElement('div');
    const HISTORY_DELETE_BTN_ELEMENT = document.createElement('button');
    const closeBtnSvgIcon = SvgIcons.closeBtnIcon();
    HISTORY_TEXT_ELEMENT.textContent = history;
    HISTORY_DELETE_BTN_ELEMENT.appendChild(closeBtnSvgIcon);

    HISTORY_LIST_ELEMENT.appendChild(HISTORY_TEXT_ELEMENT);
    HISTORY_LIST_ELEMENT.appendChild(HISTORY_DELETE_BTN_ELEMENT);

    return HISTORY_LIST_ELEMENT;
  }

  populateHistoryList() {
    const history = SearchHistoryManager.getHistory();

    this.SEARCH_HISTORY_LIST_ELEMENT.innerHTML = '';
    history.forEach((item) => {
      this.SEARCH_HISTORY_LIST_ELEMENT.appendChild(
        SearchHistoryManager.listElementHTML(item),
      );
    });
  }

  static removeHistoryItem(historyItem) {
    const history = SearchHistoryManager.getHistory();
    const newHistoryList = history.filter((item) => item !== historyItem);
    LocalStorageManger.saveToLocalStorage(
      'searchHistory',
      JSON.stringify(newHistoryList),
    );
    return newHistoryList;
  }

  static deleteHistory(event) {
    const targetList = event.target.closest('button');
    if (!targetList) return;

    const listItem = targetList.closest('li');
    const historyItem = listItem.querySelector('div').textContent;

    SearchHistoryManager.removeHistoryItem(historyItem);

    listItem.remove();
  }

  static searchFromHistory(event, searchProductfn) {
    const targetList = event.target.closest('button');
    if (targetList) return;

    searchProductfn();
  }

  addListeners() {
    this.SEARCH_INPUT_ELEMENT.addEventListener('keypress', (event) => {
      if (event.key === 'Enter') {
        this.setHistory();
        this.populateHistoryList();
      }
    });

    this.SEARCH_HISTORY_LIST_ELEMENT.addEventListener(
      'click',
      SearchHistoryManager.deleteHistory,
    );

    this.SEARCH_HISTORY_LIST_ELEMENT.addEventListener(
      'click',
      SearchHistoryManager.searchFromHistory,
    );
  }
}

export default SearchHistoryManager;
