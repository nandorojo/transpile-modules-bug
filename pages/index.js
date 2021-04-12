// @generated: @expo/next-adapter@2.1.52
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MotiView } from "moti"; // this breaks

/**
 * Problem: @motify/core is a nested node_module of moti.
 * Thus, it is ignored for transpilation.
 */

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Ayy Expo + Next.js 👋</Text>
      {/* this breaks. comment it out to fix it. */}
      <MotiView />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 16,
  },
});
