import React from "react";
import { View, Text, StyleSheet } from "react-native";
import useCurrentTime from "../Hooks/useCurrentTime";

const Task34 = () => {
  const currentTime = useCurrentTime();

  return (
    <View style={styles.container}>
        <Text style={styles.timeText}>Current Date: {currentTime.toLocaleDateString()}</Text>
      <Text style={styles.timeText}>Current Time: {currentTime.toLocaleTimeString()}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  timeText: {
    fontSize: 24,
    marginVertical: 20,
  },
});

export default Task34;