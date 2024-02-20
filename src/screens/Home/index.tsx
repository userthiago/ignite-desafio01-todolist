import { Image, Text, View } from "react-native";
import { styles } from "./styles";
import { AddTaskInput } from "../../components/AddTaskInput";
import { useState } from "react";

export function Home() {
  const [taskText, setTaskText] = useState("");

  const handleChangeTaskText = (text: string) => {
    setTaskText(text);
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.logo}
          source={require("../../../assets/logo.png")}
        />
      </View>
      <View style={styles.contentContainer}>
        <AddTaskInput value={taskText} onChangeText={handleChangeTaskText} />
      </View>
    </View>
  );
}
