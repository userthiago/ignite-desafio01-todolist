import { Image, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { useState } from "react";

type AddTaskInputProps = {
  value: string;
  onChangeText: (task: string) => void;
};

export function AddTaskInput({ value, onChangeText }: AddTaskInputProps) {
  const [focus, setFocus] = useState(false);

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={focus ? styles.textInputFocus : styles.textInput}
        value={value}
        placeholder={"Adicione uma nova tarefa"}
        placeholderTextColor={"#808080"}
        onChangeText={onChangeText}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
      />
      <TouchableOpacity style={styles.addButton} activeOpacity={0.7}>
        <Image source={require("../../../assets/icons/plus-icon.png")} />
      </TouchableOpacity>
    </View>
  );
}
