import React, { useState } from 'react';
import { View, Image, Button, Alert, StyleSheet } from 'react-native';

const Task27 = () => {
  const [selectedImage, setSelectedImage] = useState(require('../Resources/flower1.jpg'));

  const showAlert = () => {
    Alert.alert(
      'Select an Image',
      'Pick a number: 1, 2, or 3',
      [
        {
          text: '1',
          onPress: () => setSelectedImage(require('../Resources/flower1.jpg')),
        },
        {
          text: '2',
          onPress: () => setSelectedImage(require('../Resources/flower2.jpg')),
        },
        {
          text: '3',
          onPress: () => setSelectedImage(require('../Resources/flower3.jpg')),
        },
        {
          text: 'Cancel',
          style: 'cancel',
        },
      ],
      { cancelable: true }
    );
  };

  return (
    <View style={styles.container}>
      <Image source={selectedImage} style={styles.image} />
      <Button title="Select Image" onPress={showAlert} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 300,
    height: 300,
    marginBottom: 20,
  },
});

export default Task27;