import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const useCurrentTime = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId); 
  }, []);

  return currentTime;
};

const Task34 = () => {
  const [showTime, setShowTime] = useState(true);
  const currentTime = useCurrentTime();

  return (
    <View style={styles.container}>
      {showTime && (
        <View>
          <Text style={styles.text}>
            {`Time: ${currentTime.toLocaleTimeString()}`}
          </Text>
          <Text style={styles.text}>
            {`Date: ${currentTime.toLocaleDateString()}`}
          </Text>
        </View>
      )}
      <Button title={showTime ? "Hide Time" : "Show Time"} onPress={() => setShowTime(!showTime)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
  },
});

export default Task34;