
import { ScreenHeader } from '@/components';
import { useColorScheme } from 'nativewind';
import React from 'react';
import { Switch, Text, View } from 'react-native';

const Settings = () => {
  const { colorScheme, setColorScheme } = useColorScheme();

  return (
    <View className='flex-1  dark:bg-primary'>
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
