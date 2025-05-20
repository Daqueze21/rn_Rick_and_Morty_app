import AsyncStorage from '@react-native-async-storage/async-storage';
import { useCallback, useEffect, useState } from 'react';

export function useAsyncStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);

  // Get value from AsyncStorage
  useEffect(() => {
    const loadValue = async () => {
      try {
        const item = await AsyncStorage.getItem(key);
        if (item !== null) {
          setStoredValue(JSON.parse(item));
        } else {
          setStoredValue(initialValue);
        }
      } catch (error) {
        console.error('Error loading from AsyncStorage:', error);
        setStoredValue(initialValue);
      } finally {
        setLoading(false);
      }
    };
    loadValue();
  }, [key]);

  // Save property to AsyncStorage
  const setValue = useCallback(
    async (value: T | ((prevValue: T | null) => T)) => {
      try {
        const valueToStore =
          value instanceof Function ? value(storedValue) : value;
        setStoredValue(valueToStore);
        await AsyncStorage.setItem(key, JSON.stringify(valueToStore));
      } catch (error) {
        console.error('Error saving to AsyncStorage:', error);
      }
    },
    [key, storedValue]
  );

  // remove property from AsyncStorage
  const removeValue = useCallback(async () => {
    try {
      await AsyncStorage.removeItem(key);
      setStoredValue(null);
    } catch (error) {
      console.error('Error removing from AsyncStorage:', error);
    }
  }, [key]);

  return [storedValue, setValue, loading, removeValue] as const;
}
