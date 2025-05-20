import { THEMES } from '@/src/constants/colors';
import { useAsyncStorage } from '@/src/hooks';
import { useColorScheme } from 'nativewind';
import React, { useEffect } from 'react';
import { Switch, Text, View } from 'react-native';
import { ScreenHeader } from '../../src/components/screenHeader';

const Settings = () => {
  const { colorScheme, setColorScheme } = useColorScheme();
  const [, setThemeValue] = useAsyncStorage<THEMES>(
    'themeValue',
    THEMES.dark
  );

  useEffect(() => {
    setThemeValue(colorScheme === THEMES.dark ? THEMES.dark : THEMES.light);
  }, [colorScheme, setThemeValue]);

  return (
    <View className='flex-1  dark:bg-primary bg-slate-100'>
      <ScreenHeader />

      <View className='w-full flex-1 flex-row align-center justify-between px-20 mt-8'>
        <Text className='text-lg text-primary dark:text-white font-semibold'>
          Dark mode
        </Text>
        <Switch
          value={colorScheme === 'dark'}
          onChange={() =>
            setColorScheme(colorScheme === 'light' ? 'dark' : 'light')
          }
        />
      </View>
    </View>
  );
};

export default Settings;
