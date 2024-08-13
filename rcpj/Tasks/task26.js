import React, { useState } from 'react';
import { View, Text, Button, ActivityIndicator, StyleSheet } from 'react-native';

const Task26 = () => {
  const [ip, setIp] = useState('ip will appear here');
  const [loading, setLoading] = useState(false);

  const fetchIpNonBlocking = () => {
    setLoading(true);
    fetch('https://api.ipify.org?format=json')
      .then(response => response.json())
      .then(data => {
        setIp(data.ip);
        setLoading(false);
      })
      .catch(error => {
        console.error('error fetching IP:', error);
        setLoading(false);
      });
  };

  const fetchIpBlocking = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://api.ipify.org?format=json');
      const data = await response.json();
      setIp(data.ip);
    } catch (error) {
      console.error('error fetching IP:', error);
    }
    setLoading(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{ip}</Text>
      {loading ? <ActivityIndicator size="large" color="#0000ff" /> : null}
      <View style={styles.buttonContainer}>
        <Button title="Non-Blocking Request" onPress={fetchIpNonBlocking} />
        <Button title="Blocking Request" onPress={fetchIpBlocking} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 20,
  },
});

export default Task26;