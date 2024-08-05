import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

class Task23 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Hello, world!',
    };
  }

  handleTextChange = (newText) => {
    this.setState({ text: newText });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{this.state.text}</Text>
        <MyClassPage onTextChange={this.handleTextChange} />
      </View>
    );
  }
}

class MyClassPage extends Component {
  handleChangeText = (text) => {
    this.props.onTextChange(text);
  };

  render() {
    return (
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type here..."
          onChangeText={this.handleChangeText}
        />
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
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
  inputContainer: {
    width: '100%',
    paddingHorizontal: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 8,
  },
});

export default Task23;