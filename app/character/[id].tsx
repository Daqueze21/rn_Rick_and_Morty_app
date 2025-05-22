import { Loader, ScreenHeader } from '@/src/components';
import { COLORS, THEMES } from '@/src/constants/colors';
import { icons } from '@/src/constants/icons';
import { RootState } from '@/src/store';
import { useLocalSearchParams } from 'expo-router';
import { useColorScheme } from 'nativewind';
import React from 'react';
import { Image, Text, View } from 'react-native';
import { useSelector } from 'react-redux';

const CharacterDetails = () => {
  const { colorScheme } = useColorScheme();
  const { id } = useLocalSearchParams();
  const { charactersList } = useSelector(
    (state: RootState) => state.characters
  );
  const characterData = charactersList.find((obj) => obj.id === Number(id));

  if (!characterData) {
    return <Loader />;
  }

  return (
    <View className='flex-1 w-full dark:bg-primary bg-slate-100'>
      <ScreenHeader characterName={characterData?.name} />
      <View className='mt-5 mb-7 justify-center items-center w-full'>
        <Image
          source={{ uri: characterData?.image }}
          className='size-80 rounded-full'
          resizeMode='cover'
        />
      </View>

      <View className='px-5 items-center'>
        <Text className='text-4xl font-bold mb-3 text-primary dark:text-white '>
          {characterData?.name}
        </Text>

        <View className='w-full flex-row justify-around mb-4'>
          <View className='flex-1 h-[70px] justify-around items-center'>
            <Image
              tintColor={
                colorScheme === THEMES.dark ? COLORS.white : COLORS.primary
              }
              source={icons.planet}
              className='size-7 justify-center items-center'
              resizeMode='cover'
            />
            <Text className=' font-semibold text-gray-700 dark:text-white justify-center'>
              {characterData?.origin.name}
            </Text>
          </View>

          <View className='w-px bg-gray-300 mx-2 h-full' />

          <View className=' flex-1 h-[70px] justify-around items-center '>
            <Text className='h-[28px] justify-center  text-gray-700 dark:text-white '>
              Gender
            </Text>
            <Text className='text-lg text-primary dark:text-white font-semibold'>
              {characterData?.gender}
            </Text>
          </View>
        </View>

        <View className='w-full mb-5'>
          <View className='border-b border-gray-300 mx-8  px-4 justify-between'>
            <Text className='text-lg font-semibold text-primary dark:text-white'>
              Status:
            </Text>
            <Text className='ml-14 text-lg text-gray-500 dark:text-gray-300 mb-3'>
              {characterData?.status}
            </Text>
          </View>
        </View>

        <View className='w-full mb-5'>
          <View className='border-b border-gray-300 mx-8  px-4 justify-between'>
            <Text className='text-lg font-semibold text-primary dark:text-white'>
              Species:
            </Text>
            <Text className=' text-lg text-gray-500 dark:text-gray-300 ml-14 mb-3'>
              {characterData?.species}
            </Text>
          </View>
        </View>

        <View className='w-full mb-5'>
          <View className='border-b border-gray-300 mx-8  px-4 justify-between'>
            <Text className='text-lg font-semibold text-primary dark:text-white'>
              Other:
            </Text>
            <Text className=' text-lg text-gray-500 dark:text-gray-300 ml-14 mb-3'>
              {characterData?.type || 'None'}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CharacterDetails;
