import React from 'react';
import { ActivityIndicator, Text, View } from 'react-native';

export const Loader = () => {
  return (
    <View className='flex-1 w-full h-full justify-center items-center dark:bg-primary bg-slate-100 '>
      <ActivityIndicator size='large' color='#00ff00' />
      <Text>text</Text>
    </View>
  );
}
