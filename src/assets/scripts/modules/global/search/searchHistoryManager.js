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

  static count = 4;

  setHistory() {
    const searchHistoryResult = this.SEARCH_INPUT_ELEMENT.value.trim();

    const history = JSON.parse(localStorage.getItem('searchHistory')) || [];
    if(history.includes(searchHistoryResult)) {
      return;
    }
    history.unshift(searchHistoryResult);

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

  static saveLimitedHistory() {
    let history = SearchHistoryManager.getHistory();

    const historyLength = history.length;
    if (historyLength > 5) {
      history = history.slice(0, 5);
    }
    return history;
  }

  populateHistoryList() {
    const history = SearchHistoryManager.saveLimitedHistory();

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

  static replaceHistoryItem(searchHistoryListElement) {
    const history = SearchHistoryManager.getHistory();
    if(history.length <= 5 || history.length < 1) return;
    const nextHistoryItem = history.at(SearchHistoryManager.count);
    const NEXT_HISTORY_ELEMENT = SearchHistoryManager.listElementHTML(nextHistoryItem);
    searchHistoryListElement.appendChild(NEXT_HISTORY_ELEMENT);
  
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

    this.SEARCH_HISTORY_LIST_ELEMENT.addEventListener('click', (event)=> {
      SearchHistoryManager.deleteHistory(event);
      SearchHistoryManager.searchFromHistory(event);
      SearchHistoryManager.replaceHistoryItem(this.SEARCH_HISTORY_LIST_ELEMENT);
    });
  }
}

export default SearchHistoryManager;
