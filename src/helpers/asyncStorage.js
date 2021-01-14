import AsyncStorage from '@react-native-async-storage/async-storage';

export const setStorageItem = async (key, value) => {
  const realValue = typeof value === 'object' ? JSON.stringify(value) : value;
  try {
    await AsyncStorage.setItem(key, realValue);
    return realValue;
  } catch {
    throw 'savingError';
  }
};

export const getStorageItem = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value;
  } catch {
    throw 'gettingError';
  }
};
