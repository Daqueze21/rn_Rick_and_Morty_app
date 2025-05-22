import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';

const CharacterDetails = () => {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Text>CharacterDetails {id}</Text>
    </View>
  );
};

export default CharacterDetails