import React, { useState } from 'react';
import { View, Image, StyleSheet, Pressable } from 'react-native';
import Video from 'react-native-video';

const Task32 = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handlePress = () => {
    setIsVideoPlaying(true);
  };

  return (

    <View style={styles.container}>
      {!isVideoPlaying ? (
        <Pressable onPress={handlePress}>
          <Image source={require('../Resources/nggyu.jpg')} style={styles.image} />
        </Pressable>
      ) : (
        <Video
          source={require('../Resources/nggyu.mp4')}
          style={styles.video}
          controls
          resizeMode="contain"
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  image: {
    width: 450,
    height: 420,
    resizeMode: 'contain',
  },
  video: {
    width: 410,
    height: 430,
  },
});

export default Task32;
