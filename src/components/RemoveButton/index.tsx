import { Image, TouchableOpacity } from "react-native";

type RemoveButtonProps = {
  handleRemove: () => void;
};

export function RemoveButton({ handleRemove }: RemoveButtonProps) {
  return (
    <TouchableOpacity onPress={handleRemove}>
      <Image source={require("../../../assets/icons/trash-icon.png")} />
    </TouchableOpacity>
  );
}
