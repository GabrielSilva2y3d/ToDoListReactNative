import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  Pressable,
  View,
  Platform,
  TouchableNativeFeedback,
  TouchableOpacity,
} from "react-native";

const Task = (props) => {
  const [isChecked, setIsChecked] = useState(false);
  const TouchableComponent =
    Platform.OS === "android" ? TouchableNativeFeedback : TouchableOpacity;

  const handleToggleCheck = () => {
    setIsChecked(!isChecked);
  };

  return (
    <TouchableComponent onPress={props.onPress}>
      <View style={styles.item}>
        <Pressable onPress={handleToggleCheck}>
          <View style={[styles.square, isChecked && styles.checked]}></View>
        </Pressable>
        <Text style={styles.itemText}>{props.text}</Text>
        <Pressable style={styles.delete} onPress={props.onDelete}>
          <Text style={styles.deleteText}>X</Text>
        </Pressable>
      </View>
    </TouchableComponent>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#292929",
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  square: {
    width: 30,
    height: 30,
    backgroundColor: "#55BCF6",
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
  },
  checked: {
    backgroundColor: "#55BCF6",
    opacity: 1,
  },
  itemText: {
    flex: 1,
    color: "#fff",
    fontSize: 18,
  },
  delete: {
    width: 24,
    height: 24,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  deleteText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default Task;
