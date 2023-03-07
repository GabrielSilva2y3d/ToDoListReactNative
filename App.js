import React, { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";

import Task from "./components/task";
import Input from "./components/Input";
import CustomButton from "./components/CustomButton";
import Header from "./components/Header";

export default function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const handleAddTask = () => {
    if (task.trim()) {
      setTasks([...tasks, task]);
      setTask("");
      setModalIsVisible(false);
    }
  };

  const handleRemoveTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  const startAddTasksHandler = () => {
    setModalIsVisible(true);
  };

  const endAddTasksHandler = () => {
    setModalIsVisible(false);
    setTask("");
  };

  return (
    <View style={styles.container}>
      <Header />
      <CustomButton
        title="New Task"
        onPress={startAddTasksHandler}
      />
      {modalIsVisible && (
        <Input
          visible={modalIsVisible}
          task={task}
          setTask={setTask}
          handleAddTask={handleAddTask}
          endAddTasksHandler={endAddTasksHandler}
        />
      )}

      <FlatList
        data={tasks.map((text, index) => ({ id: index.toString(), text }))}
        renderItem={({ index, item }) => (
          <Task
            key={item.id}
            text={item.text}
            onDelete={() => {
              handleRemoveTask(index);
            }}
          />
        )}
        style={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  list: {
    paddingHorizontal: 20,
  },
});
