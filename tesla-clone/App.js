import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import CarItem from "./components/CarItem";

export default function App() {
  return (
    <View style={styles.container}>
      <CarItem
        name="Model S"
        tagline="Starting at $69,420"
        image={require("./assets/images/ModelS.jpeg")}
      />
      <CarItem
        name="Model 3"
        tagline="Order Online For"
        taglineCTA={"Touchless Delivery"}
        image={require("./assets/images/Model3.jpeg")}
      />
      <CarItem
        name="Model X"
        tagline="Order Online For"
        taglineCTA={"Touchless Delivery"}
        image={require("./assets/images/ModelX.jpeg")}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fffa",
    alignItems: "center",
    justifyContent: "center"
  }
});
