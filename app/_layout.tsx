import { THEMES } from '@/src/constants/colors';
import { useAsyncStorage } from '@/src/hooks';
import { store } from '@/src/store';
import { Stack } from 'expo-router';
import { useColorScheme } from 'nativewind';
import { useEffect } from 'react';
import { Provider } from 'react-redux';
import './global.css';

export default function RootLayout() {
  const { colorScheme, setColorScheme } = useColorScheme();
  const [prevThemeValue] = useAsyncStorage<THEMES|null>('themeValue', null);
  
  useEffect(() => {
    if (prevThemeValue !== colorScheme && prevThemeValue !== null) {
      setColorScheme(prevThemeValue);
    }
  }, [prevThemeValue]);

  return (
    <Provider store={store}>
      <Stack>
        <Stack.Screen
          name='(tabs)'
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name='character/[id]'
          options={{
            headerShown: false,
          }}
        />
      </Stack>
    </Provider>
  );
}
