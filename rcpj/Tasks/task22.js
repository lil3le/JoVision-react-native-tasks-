import React, { useState } from 'react';
import { SafeAreaView, View, Text, Button, TextInput, StyleSheet } from 'react-native';

const Task22 = () => {
  const [text, setText] = useState('');
  const [showPage, setShowPage] = useState(false);

  const togglePage = () => {
    setShowPage(!showPage);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button title={showPage ? "Hide" : "Show"} onPress={togglePage} />
      </View>
      {showPage && <MyFunctionPage text={text} setText={setText} />}
      <Text style={styles.textDisplay}>{text}</Text>
    </SafeAreaView>
  );
};

const MyFunctionPage = ({ text, setText }) => {
  return (
    <View style={styles.pageContainer}>
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={setText}
        placeholder="Enter here..."
      />
    </View>
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
  textDisplay: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    width: 200,
  },
});

export default Task22;