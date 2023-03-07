import React from "react";
import { StyleSheet, View, TextInput, TouchableOpacity, Text, Modal, Platform, Image } from "react-native";

const Input = ({ visible, task, setTask, handleAddTask, endAddTasksHandler}) => {
  return (
    <Modal visible={visible} animationType="fade">
      <View style={styles.container}>
      <Image
          source={require("../assets/bullseye.png")}
          style={styles.icon}
        />
        <TextInput
          style={styles.input}
          placeholder="Add a task..."
          placeholderTextColor="#aaa"
          value={task}
          onChangeText={setTask}
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={handleAddTask}>
            <Text style={styles.buttonText}>Add Task</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={endAddTasksHandler}>
            <Text style={styles.buttonText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingBottom: 20,
    backgroundColor: "#111",
    ...Platform.select({
      ios: {
        marginTop: 40,
      },
      android: {
        marginTop: 0,
      },
    }),
  },
  input: {
    backgroundColor: "#222",
    borderRadius: 10,
    borderWidth: 1,
    padding: 8,
    marginHorizontal: 8,
    fontSize: 18,
    color: "#fff",
    width: "90%",
  },
  button: {
    backgroundColor: "#efefef",
    alignItems: "center",
    borderRadius: 10,
    paddingVertical: 10,
    width: "35%",
  },
  buttonText: {
    color: "#000",
    fontSize: 18,
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "75%",
    marginTop: 20,
  },
  icon: {
    height: 200,
    width: 200,
    margin: 20,
  }
});

export default Input;
