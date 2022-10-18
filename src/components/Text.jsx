import { StyleSheet, Text as NativeText, View } from "react-native";
import theme from "../../theme";

const Text = ({style, ...props}) => {
    const styles = StyleSheet.create({
        fontFamily: theme.text.font
    });

    return (
        <View>
            <NativeText style={[style, styles]} {...props}></NativeText>
        </View>
    );
};

export default Text;

