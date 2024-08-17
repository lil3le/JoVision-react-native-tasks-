import React, { useState, useRef } from 'react';
import { View, Image, Pressable, Alert, Button, StyleSheet, ScrollView, Modal, TextInput, TouchableOpacity, Text } from 'react-native';

const images = [
  require('../Resources/flower1.jpg'),
  require('../Resources/flower2.jpg'),
  require('../Resources/flower3.jpg'),
  require('../Resources/flower4.jpg'),
  require('../Resources/flower5.jpg'),
  require('../Resources/flower6.jpg'),
  require('../Resources/flower7.jpg'),
  require('../Resources/flower8.jpg'),
  require('../Resources/flower9.jpg'),
  require('../Resources/flower10.jpg'),
];

const Task29 = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const scrollViewRef = useRef(null);

  const handleImagePress = (index) => {
    Alert.alert(`You have selected image: ${index + 1}`);
  };

  const handleScrollToIndex = () => {
    const index = parseInt(inputValue) - 1;
    if (index >= 0 && index < images.length) {
      scrollViewRef.current.scrollTo({ y: index * 210, animated: true });
    } else {
      Alert.alert('Invalid Index', 'Please enter a valid index between 1 and 10.');
    }
    setModalVisible(false);
    setInputValue('');
  };

  return (
    <View style={styles.container}>
      <ScrollView ref={scrollViewRef} contentContainerStyle={styles.list}>
        {images.map((image, index) => (
          <Pressable onPress={() => handleImagePress(index)} key={index}>
            <Image source={image} style={styles.image} />
          </Pressable>
        ))}
      </ScrollView>
      <Button title="Go to Image" onPress={() => setModalVisible(true)} />
      <Modal
        transparent
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            <Text>Enter the image number (1-10):</Text>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              value={inputValue}
              onChangeText={setInputValue}
              placeholder="Enter number"
            />
            <View style={styles.modalButtons}>
              <TouchableOpacity style={styles.buttonClose} onPress={() => setModalVisible(false)}>
                <Text style={styles.textStyle}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonConfirm} onPress={handleScrollToIndex}>
                <Text style={styles.textStyle}>OK</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  list: {
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    margin: 5,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    width: 300,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  modalButtons: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  buttonClose: {
    backgroundColor: '#f44336',
    padding: 10,
    borderRadius: 10,
  },
  buttonConfirm: {
    backgroundColor: '#2196F3',
    padding: 10,
    borderRadius: 10,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Task29;