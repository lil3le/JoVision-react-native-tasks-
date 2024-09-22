import React from "react";
import { RefreshControl, ScrollView, Text, View } from "react-native";

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

const Task37 = () => {
    const [wordArray, setWordArray] = React.useState(generateArray(100));
    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        setWordArray(generateArray(100));
        setTimeout(() => {
            setRefreshing(false);
        }, 2000);
    }, []);

    return (
        <ScrollView
            style={{ flex: 1, paddingLeft: 190, paddingRight: 200 }}
            refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
        >
            <View>
                <Text>
                    {printArray(wordArray)}
                </Text>
            </View>
        </ScrollView>
    );
};

export default Task37;