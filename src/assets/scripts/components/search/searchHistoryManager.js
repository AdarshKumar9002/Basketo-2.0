import StorageManager from '../../reusable/storage-manager.js';
import SvgIcons from '../../local/svg-icons.js';

class SearchHistoryManager extends StorageManager {
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
    this.displayHistoryList();
    this.attachEventListeners();
  }

  // Counter for tracking the search history item position
  static historyItemCounter = 4;

  // Save new search entry to history
  saveSearchHistory() {
    const searchEntry = this.SEARCH_INPUT_ELEMENT.value.trim();
    const history = JSON.parse(localStorage.getItem('searchHistory')) || [];

    // Prevent adding duplicate entries to history
    if (history.includes(searchEntry)) {
      return;
    }

    // Add new entry to the start of the history list
    history.unshift(searchEntry);

    // Save updated history list to local storage
    StorageManager.saveToStorage('searchHistory', JSON.stringify(history));
  }

  // Retrieve search history from local storage
  static fetchSearchHistory() {
    const history = JSON.parse(
      StorageManager.retrieveFromStorage('searchHistory'),
    );
    return history;
  }

  // Generate HTML for a search history list item
  static createHistoryListItem(historyEntry) {
    const listItemElement = document.createElement('li');
    const textElement = document.createElement('div');
    const deleteButtonElement = document.createElement('button');
    const closeButtonIcon = SvgIcons.closeBtnIcon();

    textElement.textContent = historyEntry;

    deleteButtonElement.appendChild(closeButtonIcon);

    listItemElement.appendChild(textElement);
    listItemElement.appendChild(deleteButtonElement);

    return listItemElement;
  }

  // Limit the search history to a maximum of 5 entries
  static limitSearchHistory() {
    let history = SearchHistoryManager.fetchSearchHistory();
    const HISTORY_LENGTH = 5;
    if (history === null || history === undefined) {
      return 0;
    }
    if (history.length > HISTORY_LENGTH) {
      history = history.slice(0, 5);
    }
    return history;
  }

  // Populate the search history list on the UI
  displayHistoryList() {
    const limitedHistory = SearchHistoryManager.limitSearchHistory();

    this.SEARCH_HISTORY_LIST_ELEMENT.innerHTML = '';

    if (
      limitedHistory === null ||
      limitedHistory === undefined ||
      limitedHistory === 0
    ) {
      return;
    }

    // Create and append list items for each history entry
    limitedHistory.forEach((entry) => {
      this.SEARCH_HISTORY_LIST_ELEMENT.appendChild(
        SearchHistoryManager.createHistoryListItem(entry),
      );
    });
  }

  // Remove a specific search history item
  static deleteHistoryEntry(historyEntry) {
    const history = SearchHistoryManager.fetchSearchHistory();
    const updatedHistory = history.filter((entry) => entry !== historyEntry);

    // Save updated history list to local storage
    StorageManager.saveToStorage(
      'searchHistory',
      JSON.stringify(updatedHistory),
    );

    return updatedHistory;
  }

  // Replace a search history item with the next one in the history
  static replaceHistoryListItem(listElement) {
    const history = SearchHistoryManager.fetchSearchHistory();
    if (history.length <= 5 || history.length < 1) return;

    const nextHistoryItem = history.at(SearchHistoryManager.historyItemCounter);
    const nextListItem =
      SearchHistoryManager.createHistoryListItem(nextHistoryItem);

    listElement.appendChild(nextListItem);
  }

  // Handle deletion of a search history item when the delete button is clicked
  static handleHistoryDeletion(event) {
    const targetButton = event.target.closest('button');
    if (!targetButton) return;

    const listItem = targetButton.closest('li');
    const historyEntry = listItem.querySelector('div').textContent;

    // Remove the history entry from local storage
    SearchHistoryManager.deleteHistoryEntry(historyEntry);

    listItem.remove();
  }

  // Handle search action triggered by clicking a history item
  static handleSearchFromHistory(event, searchProductCallback) {
    const targetButton = event.target.closest('button');
    if (targetButton) return;

    searchProductCallback();
  }

  // Attach event listeners to handle search input and history list actions
  attachEventListeners() {
    this.SEARCH_INPUT_ELEMENT.addEventListener('keypress', (event) => {
      if (event.key === 'Enter') {
        this.saveSearchHistory();
        this.displayHistoryList();
      }
    });

    this.SEARCH_HISTORY_LIST_ELEMENT.addEventListener('click', (event) => {
      SearchHistoryManager.handleHistoryDeletion(event);
      SearchHistoryManager.handleSearchFromHistory(event);
      SearchHistoryManager.replaceHistoryListItem(
        this.SEARCH_HISTORY_LIST_ELEMENT,
      );
    });
  }
}

export default SearchHistoryManager;
