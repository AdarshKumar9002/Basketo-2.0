class LocalStorageManager {

  static saveToLocalStorage(key, data) {
      localStorage.setItem(key, data);
  }

  static retrieveFromLocalStorage(key) {
    const retrivedData =localStorage.getItem(key);
      return retrivedData;
  }
}

export default LocalStorageManager;