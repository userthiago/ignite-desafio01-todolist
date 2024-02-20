import { FlatList, View } from "react-native";
import { useTaskContext } from "../../hooks/use-task-context";
import { TaskItem } from "../TaskItem";
import { styles } from "./styles";

export function TaskList() {
  const { taskList } = useTaskContext();
  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
        data={taskList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <TaskItem data={item} />}
      />
    </View>
  );
}
