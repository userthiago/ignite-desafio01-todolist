import { Image, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

type CheckIconProps = {
  isChecked: boolean;
};

export function CheckIcon({ isChecked }: CheckIconProps) {
  return (
    <View style={styles.iconContainer}>
      <View style={isChecked ? styles.iconChecked : styles.icon}>
        {isChecked && (
          <Image source={require("../../../assets/icons/check-icon.png")} />
        )}
      </View>
    </View>
  );
}
