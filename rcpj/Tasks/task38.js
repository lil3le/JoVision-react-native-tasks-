import React, { createContext, useState } from "react";
import { TextInput, StyleSheet, View } from "react-native";
import ComponentTwo from "../Componets/Task38/ComponetTwo";

export const TextContext = createContext();

const Task38 = () => {
    const [text, setText] = useState('');

    return (
        <TextContext.Provider value={{ text, setText }}>
            <View style={styles.container}>
                <ComponentTwo />
                <ComponentTwo />
                <ComponentTwo />
                <ComponentTwo />
            </View>
        </TextContext.Provider>
    );
};

export default Task38;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});