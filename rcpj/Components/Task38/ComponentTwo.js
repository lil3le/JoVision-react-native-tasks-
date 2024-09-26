import React, { useContext } from "react";
import { TextInput, View } from "react-native";
import { TextContext } from "../../Tasks/TextContext";  
import ComponentOne from "./ComponentOne";

const ComponentTwo = () => {
    const { text, setText } = useContext(TextContext);

    return (
        <View>
            <TextInput
                 value={text}
                 onChangeText={setText}
                 placeholder="Type here"
                 style={{ 
                   height: 40, 
                   width: 200,  
                   padding: 10, 
                   borderColor: 'gray', 
                   borderWidth: 1 
                 }}
            />
            <ComponentOne />
        </View>
    );
};

export default ComponentTwo;
