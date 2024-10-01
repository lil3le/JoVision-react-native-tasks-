import React from 'react';
import { Provider } from 'react-redux';
import { store } from './Components/Task39/store.js';
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
import Task27 from './Tasks/task27';
import Task28 from './Tasks/task28';
import Task29 from './Tasks/task29';
import Task30 from './Tasks/task30';
import Task31 from './Tasks/task31';
import Task32 from './Tasks/task32';
import Task33 from './Tasks/task33';
import Task34 from './Tasks/task34';
import Task35 from './Tasks/task35';
import Task36 from './Tasks/task36';
import Task37 from './Tasks/task37';
import Task38 from './Tasks/task38';
import Task39 from './Tasks/task39';
import Task40 from './Tasks/task40';
import Task41 from './Tasks/task41_42/task41/task41';
import Task42 from './Tasks/task41_42/task42/task42';
import Project from './Screens/Project';
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
      <Task25 />
      <Task26 />
      <Task27 />
      <Task28 />
      <Task29 />
      <Task30 />
      <Task31 />
      <Task32 />
      <Task33 />
      <Task34 />
      <Task35 />
      <Task36 />
      <Task37 />
      <Task38 />
      <Provider store={store}><Task39></Task39></Provider>
      <Provider store={store}><Task40></Task40></Provider>
      <Task41 />
      <Task42 />*/}
      <Project />
      
      
      
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