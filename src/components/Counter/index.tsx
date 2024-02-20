import { Text, View } from "react-native";
import { styles } from "./styles";

type CounterProps = {
  title: string;
  value: number;
  variant?: "primary" | "secondary";
};
export function Counter({ title, value, variant = "primary" }: CounterProps) {
  return (
    <View style={styles.container}>
      <Text
        style={
          variant === "primary"
            ? styles.textVariantPrimary
            : styles.textVariantSecondary
        }
      >
        {title}
      </Text>
      <View style={styles.counter}>
        <Text style={styles.counterText}>{value}</Text>
      </View>
    </View>
  );
}
