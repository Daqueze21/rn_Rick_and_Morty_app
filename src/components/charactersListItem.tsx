import { Character } from '@/src/constants/characters';
import { icons } from '@/src/constants/icons';
import { Link } from 'expo-router';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { COLORS } from '../constants/colors';

const dotColorByStatus = {
  Dead: COLORS.statusRed,
  Alive: COLORS.statusGreen,
  unknown: COLORS.statusGray,
};

export const CharactersListItem = ({
  id,
  name,
  image,
  species,
  gender,
  status,
}: Character) => {
  return (
    <Link href={`/character/${id}`} asChild>
      <TouchableOpacity className='h-[130px] w-full flex-row justify-between overflow-hidden gap-2 bg-white border border-gray-300 dark:bg-gray-800 dark:border-gray-600 bc-white  rounded-2xl'>
        <Image
          source={{ uri: image }}
          className='w-[130px] h-[130px] justify-center items-center'
          resizeMode='cover'
        />
        <View className='flex-1 py-3 px-3'>
          <Text
            className='text-2xl font-bold text-gray-900 dark:text-white overflow-hidden overflow-ellipsis text-nowrap'>
            {name}
          </Text>
          <View className='flex-1 justify-between'>
            <View className='flex-row justify-start items-center mt-2'>
              <Image
                source={icons.dot}
                tintColor={dotColorByStatus[status]}
                className='size-5'
              />
              <Text className='text-sm text-gray-600 dark:text-gray-300'>
                {status} {}
              </Text>
              <Text className='text-sm text-gray-600 dark:text-gray-300'>
                - {species}
              </Text>
            </View>
            <Text className=' text-gray-600 dark:text-gray-300 mb-4'>
              Gender: {gender}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </Link>
  );
};
