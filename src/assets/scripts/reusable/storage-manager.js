class StorageManager {
  static saveToStorage(key, data, storageType = 'localStorage') {
    storageType.setItem(key, data);
  }

  static retrieveFromStorage(key, storageType = localStorage) {
    const retrivedData = storageType.getItem(key);
    return retrivedData;
  }
}

export default StorageManager;
