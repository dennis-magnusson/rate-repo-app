import { Pressable, StyleSheet, Text, View } from "react-native";
import theme from "../../theme";

const SubmitButton = ({ label, onSubmit }) => {

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
        
        <Pressable onPress={onSubmit}>
            <View style={styles.background}>
                <Text style={styles.text}>{label}</Text>
            </View>
        </Pressable>
        
    );
}

export default SubmitButton;