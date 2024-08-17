import React from 'react';
import { View, Image, Pressable, Alert, StyleSheet } from 'react-native';

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

const Task28 = () => {
  const handleImagePress = (index) => {
    Alert.alert(`You have selected image: ${index + 1}`);
  };

  return (
    <View style={styles.container}>
      {images.map((image, index) => (
        <Pressable onPress={() => handleImagePress(index)} style={styles.pressable} key={index}>
          <Image source={image} style={styles.image} />
        </Pressable>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  pressable: {
    margin: 5,
  },
  image: {
    width: 100,
    height: 100,
  },
});

export default Task28;