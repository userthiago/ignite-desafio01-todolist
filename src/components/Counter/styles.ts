import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  textVariantPrimary: {
    color: "#4EA8DE",
    fontSize: 14,
    fontWeight: "bold",
  },
  textVariantSecondary: {
    color: "#8284FA",
    fontSize: 14,
    fontWeight: "bold",
  },
  counter: {
    alignItems: "center",
    justifyContent: "center",

    backgroundColor: "#333333",
    paddingHorizontal: 8,
    height: 20,
    borderRadius: 999,
  },
  counterText: {
    color: "#D9D9D9",
    fontSize: 12,
    fontWeight: "bold",
  },
});
