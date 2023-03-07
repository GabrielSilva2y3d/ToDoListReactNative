import React from "react";
import { Platform, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const CustomButton = (props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={props.onPress}
        activeOpacity={0.8}
      >
        <Text style={styles.text}>{props.title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  button: {
    backgroundColor: "#2c3e50",
    borderRadius: 20,
    paddingVertical: 12,
    paddingHorizontal: 24,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    ...Platform.select({
      ios: {
        width: 200,
      },
      android: {
        minWidth: 200,
        width: "80%",
        maxWidth: 500,
      },
    }),
  },
  text: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});

export default CustomButton;
