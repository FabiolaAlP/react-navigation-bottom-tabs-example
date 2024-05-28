import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";

const Home = () => {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
});

export const HomeScreenOptions = () => {
  return {
    tabBarIcon: ({ color, size }) => (
      <FontAwesome name="home" size={size} color={color} />
    ),
  };
};
export default Home;
