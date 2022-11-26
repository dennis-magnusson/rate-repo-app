import { Pressable, StyleSheet, View } from "react-native";
import theme from "../../theme";
import Text from "./Text";

const SubmitButton = ({ label, onSubmit, ...props }) => {

    const styles = StyleSheet.create({
        text: {
            fontWeight: 'bold',
            color: '#fff',
            fontSize: 16,
            textAlign: 'center',
            padding: 12
        },
        background: {
            backgroundColor: theme.colors.primary,
            borderRadius: 5,
            marginVertical: 8
        }
    });

    return (
        
        <Pressable onPress={onSubmit} {...props}>
            <View style={styles.background}>
                <Text style={styles.text}>{label}</Text>
            </View>
        </Pressable>
        
    );
}

export default SubmitButton;