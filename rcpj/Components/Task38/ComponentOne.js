import React, { Component } from "react";
import { Text } from "react-native";
import { TextContext } from "../../Tasks/task38";

class ComponentOne extends Component {
    static contextType = TextContext;

    render() {
        const { text } = this.context;
        return <Text>{text}</Text>;
    }
}

export default ComponentOne;