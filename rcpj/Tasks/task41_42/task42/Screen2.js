import React from "react";
import { View, Button, StyleSheet } from "react-native";

const Screen2 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button title="Go to Screen 1" onPress={() => navigation.navigate('Screen1')} />
      <Button title="Go to Screen 3" onPress={() => navigation.navigate('Screen3')} />
      <Button title="Go to Screen 4" onPress={() => navigation.navigate('Screen4')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Screen2;