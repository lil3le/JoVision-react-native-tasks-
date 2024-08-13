import React, { useState, forwardRef, useImperativeHandle, useRef } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const Task24 = () => {
  const myFunctionPageRef = useRef();

  const [inputText, setInputText] = useState('');

  const handleTextChange = (text) => {
    setInputText(text);
    if (myFunctionPageRef.current) {
      myFunctionPageRef.current.updateText(text);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Type here..."
        onChangeText={handleTextChange}
      />
      <MyFunctionPage ref={myFunctionPageRef} />
    </View>
  );
};

const MyFunctionPage = forwardRef((props, ref) => {
  const [text, setText] = useState('');

  useImperativeHandle(ref, () => ({
    updateText(newText) {
      setText(newText);
    }
  }));

  return (
    <View style={styles.textContainer}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '100%',
    paddingHorizontal: 8,
    marginBottom: 20,
  },
  textContainer: {
    width: '100%',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
  },
});

export default Task24;