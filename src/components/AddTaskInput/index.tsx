import { Image, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { useState } from "react";
import { useTaskContext } from "../../hooks/use-task-context";

export function AddTaskInput() {
  const [focus, setFocus] = useState(false);
  const { taskText, handleChangeTaskText } = useTaskContext();

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={focus ? styles.textInputFocus : styles.textInput}
        value={taskText}
        placeholder={"Adicione uma nova tarefa"}
        placeholderTextColor={"#808080"}
        onChangeText={handleChangeTaskText}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
      />
      <TouchableOpacity style={styles.addButton} activeOpacity={0.7}>
        <Image source={require("../../../assets/icons/plus-icon.png")} />
      </TouchableOpacity>
    </View>
  );
}
