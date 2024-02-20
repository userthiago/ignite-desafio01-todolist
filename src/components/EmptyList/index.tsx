import { Image, Text, View } from "react-native";
import { styles } from "./styles";

export function EmptyList() {
  return (
    <View style={styles.container}>
      <Image source={require("../../../assets/icons/clipboard-icon.png")} />
      <Text style={styles.text}>
        <Text style={styles.strongText}>
          Você ainda não tem tarefas cadastradas
        </Text>
        {"\n"}
        Crie tarefas e organize seus itens a fazer
      </Text>
    </View>
  );
}
