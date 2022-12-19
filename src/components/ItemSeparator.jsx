import { View } from "react-native";
import theme from "../../theme";

const ItemSeparator = () => {
  return (
    <View
      style={{
        height: 4,
        backgroundColor: theme.colors.textLightGrey,
      }}
    />
  );
};

export default ItemSeparator;
