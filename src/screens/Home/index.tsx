import { Image, View } from "react-native";
import { styles } from "./styles";
import { AddTaskInput } from "../../components/AddTaskInput";
import { TaskContextProvider } from "../../context/task-context";
import { TaskList } from "../../components/TaskList";

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
          <TaskList />
        </View>
      </View>
    </TaskContextProvider>
  );
}
