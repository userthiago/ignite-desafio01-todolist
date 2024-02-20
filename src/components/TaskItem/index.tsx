import { Text, TouchableOpacity, View } from "react-native";
import { TaskType } from "../../types/task-type";
import { styles } from "./styles";
import { CheckIcon } from "../CheckIcon";
import { useTaskContext } from "../../hooks/use-task-context";
import { RemoveButton } from "../RemoveButton";

type TaskItemProps = {
  data: TaskType;
};
export function TaskItem({ data }: TaskItemProps) {
  const { handleChangeTaskStatus, handleRemoveTask } = useTaskContext();
  const { id, text, isCompleted } = data;

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.actionArea}
        onPress={() => handleChangeTaskStatus(id)}
      >
        <CheckIcon isChecked={isCompleted} />
        <Text style={isCompleted ? styles.textCompleted : styles.text}>
          {text}
        </Text>
      </TouchableOpacity>
      <RemoveButton handleRemove={() => handleRemoveTask(id)} />
    </View>
  );
}
