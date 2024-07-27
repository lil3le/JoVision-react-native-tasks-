import React, { useState } from 'react';
import { SafeAreaView, View, Text, Button, StyleSheet } from 'react-native';

class MyClassPage extends React.Component {
  render() {
    return (
      <View style={styles.pageContainer}>
        <Text style={styles.pageText}>This is MyClassPage Component</Text>
      </View>
    );
  }
}

const App = () => {
  const [showPage, setShowPage] = useState(false);

  const togglePage = () => {
    setShowPage(!showPage);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button title={showPage ? "Hide" : "Show"} onPress={togglePage} />
      </View>
      {showPage && <MyClassPage />}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    marginBottom: 20,
  },
  pageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  pageText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default App;
