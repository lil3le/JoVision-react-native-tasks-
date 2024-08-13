import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Task16 from './Tasks/task16';
import Task17 from './Tasks/task17';
import Task18 from './Tasks/task18';
import Task19 from './Tasks/task19';
import Task20 from './Tasks/task20';
import Task21 from './Tasks/task21';
import Task22 from './Tasks/task22';
import Task23 from './Tasks/task23';
import Task24 from './Tasks/task24';
import Task25 from './Tasks/task25';
import Task26 from './Tasks/task26';
export default function App() {
  return (
    <View style={styles.container}>
     {/* <Task16 />
      <Task17 />
      <Task18 />
      <Task19 />
      <Task20 />
      <Task21 />
      <Task22 />
      <Task23 />
      <Task24 />
      <Task25 />*/}
      <Task26 />

      
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
