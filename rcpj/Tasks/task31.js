import React, { useState, useRef } from 'react';
import { View, Image, Pressable, Alert, Button, StyleSheet, ScrollView, Modal, TextInput, TouchableOpacity, Text, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const initialImages = [
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

const Task31 = () => {
  const [images, setImages] = useState(initialImages);
  const [modalVisible, setModalVisible] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const scrollViewRef = useRef(null);

  const handleImagePress = (index) => {
    Alert.alert(`You have selected image: ${index + 1}`);
  };

  const handleRemoveImage = (index) => {
    Alert.alert(
      'Confirm',
      'Are you sure you want to remove this image?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'OK',
          onPress: () => {
            setImages((prevImages) => prevImages.filter((_, i) => i !== index));
          },
        },
      ]
    );
  };

  const handleAddImage = (index) => {
    setImages((prevImages) => {
      const newImages = [...prevImages];
      newImages.splice(index + 1, 0, prevImages[index]);
      return newImages;
    });
  };

  const handleScrollToIndex = () => {
    const index = parseInt(inputValue) - 1;
    if (index >= 0 && index < images.length) {
      scrollViewRef.current.scrollTo({ y: index * 210, animated: true });
    } else {
      Alert.alert('Invalid Index', 'Please enter a valid index.');
    }
    setModalVisible(false);
    setInputValue('');
  };

  const renderItem = ({ item, index }) => (
    <View style={styles.imageContainer}>
      <Pressable onPress={() => handleImagePress(index)} style={styles.pressable}>
        <Image source={item} style={styles.image} />
      </Pressable>
      <Pressable style={[styles.iconContainer, styles.addIcon]} onPress={() => handleAddImage(index)}>
        <Icon name="add" size={24} color="white" />
      </Pressable>
      <Pressable style={[styles.iconContainer, styles.removeIcon]} onPress={() => handleRemoveImage(index)}>
        <Icon name="delete" size={24} color="white" />
      </Pressable>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={images}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        ref={scrollViewRef}
      />
      <Button title="Go to Image" onPress={() => setModalVisible(true)} />
      <Modal
        transparent
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            <Text>Enter the image number (1-{images.length}):</Text>
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
  imageContainer: {
    position: 'relative',
    margin: 5,
  },
  pressable: {
    margin: 5,
  },
  image: {
    width: 200,
    height: 200,
  },
  iconContainer: {
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 50,
    padding: 5,
  },
  addIcon: {
    top: 5,
    left: 5,
  },
  removeIcon: {
    top: 5,
    right: 5,
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
    flex: 1,
    marginRight: 10,
  },
  buttonConfirm: {
    backgroundColor: '#2196F3',
    padding: 10,
    borderRadius: 10,
    flex: 1,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Task31;