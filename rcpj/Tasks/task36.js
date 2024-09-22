import React from "react";
import { ScrollView,Text,View } from "react-native";



function generateRandomWord(length) {
	let result = '';
	const characters = 'abcdefghijklmnopqrstuvwxyz';
	for (let i = 0; i < length; i++) {
    	result += characters.charAt(Math.floor(Math.random() * characters.length));
	}
	return result;
}


const generateArray = (length) => {
    let result = [];
    for (let i = 0; i < length; i++) {
        result.push(generateRandomWord(6));
    }
    return result;
}


const printArray = (wordArray) => {
    
    return wordArray.join(" ") + "\n";
}


const Task36 = () => {

   const wordArray = generateArray(100);

    return (
        <ScrollView style={{ flex: 1, paddingLeft : 190 , paddingRight : 200 }}>
            <View>
                <Text>
                    {printArray(wordArray)}
                </Text>
            </View>
        </ScrollView>
    )
};
export default Task36