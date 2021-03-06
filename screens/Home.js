import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function App({ navigation }) {
  const pressHandler = () => {
    //navigation.navigate("Detail");
    navigation.push("Detail");
  };
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button title="Go to next page" onPress={pressHandler} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
