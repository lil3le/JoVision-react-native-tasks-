import React, { useState } from 'react';
import { View, Image, StyleSheet, Pressable } from 'react-native';
import Video from 'react-native-video';

const Task33 = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handlePress = () => {
    setIsVideoPlaying(true);
  };

  const togglePlayPause = () => {
    setIsVideoPlaying((prev) => !prev);
  };

  return (
    <View style={styles.container}>
      {!isVideoPlaying ? (
        <Pressable onPress={handlePress}>
          <Image source={require('../Resources/nggyu.jpg')} style={styles.image} />
        </Pressable>
      ) : (
        <Pressable onPress={togglePlayPause} style={styles.videoContainer}>
          <Video
            source={require('../Resources/nggyu.mp4')}
            style={styles.video}
            resizeMode="contain"
            paused={!isVideoPlaying}
          />
        </Pressable>
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
  videoContainer: {
    width: 450,
    height: 420,
  },
  video: {
    width: '100%',
    height: '100%',
  },
});

export default Task33;