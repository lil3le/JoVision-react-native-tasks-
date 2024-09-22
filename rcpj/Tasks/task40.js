import React, { Component } from 'react';
import { View, Button } from 'react-native';
import { connect } from 'react-redux';
import ComponentOne from '../Componets/Task40/ComponentOne';

class Task40 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isComponentOneVisible: true,
    };
  }

  toggleComponentOne = () => {
    this.setState((prevState) => ({
      isComponentOneVisible: !prevState.isComponentOneVisible,
    }));
  };

  render() {
    const { isComponentOneVisible } = this.state;
    const { savedText } = this.props;

    return (
      <View>
        {isComponentOneVisible && <ComponentOne initialText={savedText} />}
        <Button title="Toggle Component One" onPress={this.toggleComponentOne} />
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  savedText: state.text,
});

export default connect(mapStateToProps)(Task40);