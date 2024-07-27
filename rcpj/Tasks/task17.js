import React, { useState } from "react";
import { SafeAreaView, View, Text, Button, StyleSheet } from "react-native";

const App = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button
          title={isVisible ? "Hide" : "Show"}
          onPress={toggleVisibility}
        />
      </View>
      {isVisible && <Text style={styles.nameText}>ali obeidat</Text>}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    marginBottom: 20,
  },
  nameText: {
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default App;