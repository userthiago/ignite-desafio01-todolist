import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",

    gap: 8,

    backgroundColor: "#262626",
    padding: 12,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#333333",
  },
  actionArea: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",

    gap: 8,
  },
  text: {
    flex: 1,

    color: "#F2F2F2",
    fontSize: 14,
    lineHeight: 19.6,
  },

  textCompleted: {
    flex: 1,

    color: "#808080",
    fontSize: 14,
    lineHeight: 19.6,
    textDecorationLine: "line-through",
  },
});
