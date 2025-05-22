import React from 'react';
import { Text, View } from 'react-native';

export const DataLoadingError = () => {
  return (
    <View className='flex-1 w-full h-full justify-center items-center dark:bg-primary bg-slate-100 '>
      <Text className='text-red-600 text-3xl'>Something went wrong</Text>
    </View>
  );
}