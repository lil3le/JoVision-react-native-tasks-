import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = '@user_info';

const Task35 = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [country, setCountry] = useState('');

  useEffect(() => {
    const loadData = async () => {
      try {
        const storedData = await AsyncStorage.getItem(STORAGE_KEY);
        if (storedData) {
          const { name, age, country, timestamp } = JSON.parse(storedData);
          const dataAge = (new Date() - new Date(timestamp)) / 1000;
          if (dataAge < 60) {
            setName(name);
            setAge(age);
            setCountry(country);
          }
        }
      } catch (e) {
        console.error("Error reading value from AsyncStorage", e);
      }
    };
    loadData();
  }, []);

  const handleSubmit = async () => {
    const userData = {
      name,
      age,
      country,
      timestamp: new Date().toISOString(),
    };

    try {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(userData));
      Alert.alert('Success', 'Data saved successfully!');
    } catch (error) {
      Alert.alert('Error', 'Failed to save data.');
    }
  };

  return (
    <View>
    <TextInput
      placeholder="Name"
      value={name}
      onChangeText={setName}
    />
    <TextInput
      placeholder="Age"
      value={age}
      onChangeText={setAge}
      keyboardType="numeric"
    />
    <TextInput
      placeholder="Country"
      value={country}
      onChangeText={setCountry}
    />
    <Button title="Submit" onPress={handleSubmit} />
  </View>
);
};

export default Task35;