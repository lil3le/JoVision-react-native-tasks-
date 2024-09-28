import React from "react";
import { View, Button, StyleSheet } from "react-native";

const Screen3 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button title="Go to Screen 1" onPress={() => navigation.navigate('Screen1')} />
      <Button title="Go to Screen 2" onPress={() => navigation.navigate('Screen2')} />
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

export default Screen3;
