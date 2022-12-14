import { Pressable, Text } from "react-native";
import theme from "../../theme";

const Button = ({ text, onPress }) => {
  return (
    <Pressable onPress={onPress}>
      <Text style={theme.screenWideButton}>{text}</Text>
    </Pressable>
  );
};

export default Button;
