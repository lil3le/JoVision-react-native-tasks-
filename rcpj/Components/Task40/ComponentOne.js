import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { setText } from '../Task39/textSlice';

class ComponentOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: props.initialText || '',
    };
  }

  componentWillUnmount() {
    this.props.dispatch(setText(this.state.text));
  }

  handleChangeText = (text) => {
    this.setState({ text });
  };

  render() {
    return (
      <View>
        <TextInput
          value={this.state.text}
          onChangeText={this.handleChangeText}
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        />
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatch,
});

export default connect(null, mapDispatchToProps)(ComponentOne);