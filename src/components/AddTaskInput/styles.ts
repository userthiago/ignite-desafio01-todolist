import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,

    marginTop: -56,
  },
  textInput: {
    flex: 1,

    backgroundColor: "#262626",
    paddingHorizontal: 16,
    borderRadius: 6,
    height: 54,
    borderWidth: 1,
    borderColor: "#0D0D0D",

    color: "#FFFFFF",
    fontSize: 16,
  },
  textInputFocus: {
    flex: 1,

    backgroundColor: "#262626",
    padding: 16,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#5E60CE",

    color: "#FFFFFF",
    fontSize: 16,
  },
  addButton: {
    alignItems: "center",
    justifyContent: "center",

    backgroundColor: "#1E6F9F",
    height: 52,
    width: 52,
    borderRadius: 6,
  },
});
