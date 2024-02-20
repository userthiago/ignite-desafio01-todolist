import { Image, Text, View } from "react-native";
import { styles } from "./styles";
import { AddTaskInput } from "../../components/AddTaskInput";
import { useState } from "react";
import { TaskContextProvider } from "../../context/task-context";

export function Home() {
  return (
    <TaskContextProvider>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.logo}
            source={require("../../../assets/logo.png")}
          />
        </View>
        <View style={styles.contentContainer}>
          <AddTaskInput />
        </View>
      </View>
    </TaskContextProvider>
  );
}
