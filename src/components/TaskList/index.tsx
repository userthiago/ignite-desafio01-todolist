import { FlatList, View } from "react-native";
import { useTaskContext } from "../../hooks/use-task-context";
import { TaskItem } from "../TaskItem";
import { styles } from "./styles";
import { Counter } from "../Counter";

export function TaskList() {
  const { taskList } = useTaskContext();
  return (
    <View style={styles.container}>
      <View style={styles.counterGroup}>
        <Counter title="Criadas" value={taskList.length} />
        <Counter
          title="Concluídas"
          variant="secondary"
          value={taskList.filter((task) => task.isCompleted).length}
        />
      </View>
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
