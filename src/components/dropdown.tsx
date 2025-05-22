import React, { useState } from 'react';
import {
  FlatList,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

type DropdownProps = {
  label: string;
  options: string[];
  selected: string;
  onSelect: (value: string) => void;
};

export const Dropdown = ({
  label,
  options,
  selected,
  onSelect,
}:DropdownProps) => {
  const [visible, setVisible] = useState(false);

  const handleSelect = (value: string) => {
    onSelect(value);
    setVisible(false);
  };

  return (
    <View className='mb-5 w-full'>
      <Text className='font-bold mb-2 text-primary dark:text-white'>
        {label}
      </Text>
      <TouchableOpacity
        className='h-12 w-full border border-gray-300 bg-white dark:bg-gray-800  dark:border-gray-600 rounded-xl justify-center px-4'
        onPress={() => setVisible(true)}>
        <Text className='dark:text-white text-primary'>
          {selected || 'Select an option'}
        </Text>
      </TouchableOpacity>

      <Modal transparent visible={visible} animationType='fade'>
        <TouchableOpacity
          style={styles.modalOverlay}
          onPress={() => setVisible(false)}
          activeOpacity={1}>
          <View
            className='max-h-[50%] mx-6 bg-white py-2 rounded-xl'>
            <FlatList
              data={options}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity
                  className='py-4 px-3 border-b border-gray-300'
                  onPress={() => handleSelect(item)}>
                  <Text className='text-primary'>{item}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

export default Dropdown;

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
});
