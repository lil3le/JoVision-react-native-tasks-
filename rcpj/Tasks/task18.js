import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
} from "react-native";

const Task18 = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  });

  return (
    <SafeAreaView style={styles.container}>
      {isLoading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#0000ff" />
          <Text style={styles.loadingText}>Loading...</Text>
        </View>
      ) : (
        <Text style={styles.nameText}>ali obeidat</Text>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loadingContainer: {
    alignItems: "center",
  },
  loadingText: {
    marginTop: 10,
    fontSize: 18,
  },
  nameText: {
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default Task18;
