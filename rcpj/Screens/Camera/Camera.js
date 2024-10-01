import React, { useState, useEffect } from 'react';
import { View, Button, Image, StyleSheet, Text } from 'react-native';
import { Camera } from 'expo-camera';
import * as FileSystem from 'expo-file-system';

const CameraScreen = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [photo, setPhoto] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();

    return () => {
      if (cameraRef) {
        cameraRef.stopPreview();
      }
    };
  }, []);

  const takePicture = async () => {
    if (cameraRef) {
      const photoData = await cameraRef.takePictureAsync();
      setPhoto(photoData);
    }
  };

  const savePicture = async () => {
    if (photo?.uri) {
      const fileName = `${FileSystem.documentDirectory}${Date.now()}.jpg`;
      await FileSystem.moveAsync({
        from: photo.uri,
        to: fileName,
      });
      setPhoto(null); 
    }
  };

  const discardPicture = () => {
    setPhoto(null); 
  };

  if (hasPermission === null) {
    return <Text>Requesting camera permission...</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      {photo ? (
        <View style={styles.previewContainer}>
          <Image source={{ uri: photo.uri }} style={styles.previewImage} />
          <Button title="Save" onPress={savePicture} />
          <Button title="Discard" onPress={discardPicture} />
        </View>
      ) : (
        <Camera style={styles.camera} ref={(ref) => setCameraRef(ref)}>
          <Button title="Take Picture" onPress={takePicture} />
        </Camera>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  camera: { flex: 1, justifyContent: 'flex-end' },
  previewContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  previewImage: { width: 300, height: 400 },
});

export default CameraScreen;