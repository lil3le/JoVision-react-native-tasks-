import React, { Component, createRef } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

class Task25 extends Component {
  constructor(props) {
    super(props);
    this.myClassPageRef = createRef();
    this.state = {
      inputText: '',
    };
  }

  handleTextChange = (text) => {
    this.setState({ inputText: text });
    if (this.myClassPageRef.current) {
      this.myClassPageRef.current.updateText(text);
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Type here..."
          onChangeText={this.handleTextChange}
        />
        <MyClassPage ref={this.myClassPageRef} />
      </View>
    );
  }
}

class MyClassPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }

  updateText = (newText) => {
    this.setState({ text: newText });
  };

  render() {
    return (
      <View style={styles.textContainer}>
        <Text style={styles.text}>{this.state.text}</Text>
      </View>
    );
  }
}

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

export default Task25;
