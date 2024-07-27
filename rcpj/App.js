import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Task16 from './Tasks/task16';
import Task17 from './Tasks/task17';
import Task18 from './Tasks/task18';
export default function App() {
  return (
    <View style={styles.container}>
     {/* <Task16 />
      <Task17 />
      <Task18 />*/}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
