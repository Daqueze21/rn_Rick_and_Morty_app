  import { THEMES } from '@/src/constants/colors';
import { useAsyncStorage } from '@/src/hooks';
import { Stack } from 'expo-router';
import { useColorScheme } from 'nativewind';
import { useEffect } from 'react';
import './global.css';

export default function RootLayout() {
  const { colorScheme, setColorScheme } = useColorScheme();
  const [themeValue] = useAsyncStorage<THEMES>('themeValue', THEMES.dark);

  useEffect(() => {
    if (themeValue !== colorScheme && themeValue !== null) {
      setColorScheme(themeValue);
    }
  }, []);

  return (
    <Stack>
      <Stack.Screen
        name='(tabs)'
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name='characters/[id]'
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
}
