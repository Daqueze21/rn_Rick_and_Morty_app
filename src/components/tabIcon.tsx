import { COLORS } from '@/src/constants/colors';
import { TAB_TITLES } from '@/src/constants/routes';
import React from 'react';
import { Image, ImageSourcePropType, Text, View } from 'react-native';

interface TabIconProps {
  focused: boolean;
  title: TAB_TITLES;
  icon: ImageSourcePropType;
}

export const TabIcon = ({ title, icon, focused }: TabIconProps) => {
  return (
    <View className='justify-center items-center mt-4 w-52'>
      <Image
        source={icon}
        tintColor={focused ? COLORS.white : COLORS.lightTextGray}
        className='size-6'
      />
      <Text
        className={`${
          focused ? 'text-white' : 'text-light-200'
        } text-base font-semibold`}>
        {title}
      </Text>
    </View>
  );
};
