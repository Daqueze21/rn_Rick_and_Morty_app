import React from 'react';
import { Text, View } from 'react-native';

export const ScreenHeader = () => {
  return (
    <View
      className={`bg-indigo-900 border-b border-indigo-700 pt-[35px]`}>
      <View className='flex-row items-center justify-center my-3'>
        <Text className='text-lg font-bold text-white'>Settings</Text>
      </View>
    </View>
  );
};

