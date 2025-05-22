import { router } from 'expo-router';
import { useColorScheme } from 'nativewind';
import React from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { COLORS, THEMES } from '../constants/colors';
import { icons } from '../constants/icons';

interface ScreenHeaderProps {
  characterName?: string;
}

export const ScreenHeader = ({ characterName }: ScreenHeaderProps) => {
  const { colorScheme } = useColorScheme();

  const onArrowBackPressHandler = () => {
    router.back();
  };

  return (
    <View
      className={`bg-indigo-900 border-b border-indigo-700 pt-[40px] relative`}>
      {characterName && (
        <TouchableOpacity  className='absolute top-14 left-5' onPress={onArrowBackPressHandler}>
          <Image
            tintColor={
              colorScheme === THEMES.dark ? COLORS.white : COLORS.lightTextGray
            }
            source={icons.arrowBack}
            className='size-7 justify-center items-center'
            resizeMode='cover'
          />
        </TouchableOpacity>
      )}

      <View className='flex-row items-center justify-center my-3'>
        <Text
          className='text-xl font-bold text-white'>
          {characterName ? characterName : 'Settings'}
        </Text>
      </View>
    </View>
  );
};
