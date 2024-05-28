import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
const Settings = () => {
  return (
    <View style={styles.container}>
      <Text>Settings</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
});
export const SettingsScreenOptions = () => {
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name="settings" size={size} color={color} />
    ),
  };
};
export default Settings;
