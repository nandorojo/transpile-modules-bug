// @generated: @expo/next-adapter@2.1.52
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MotiView } from "moti"; // this breaks
// import { MotiView } from '@motify/components/src' //this works

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Ayy Expo + Next.js 👋</Text>
      {/* this breaks */}
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
