import { View } from "react-native";
import FormikTextInput from "./FormikTextInput";
import SubmitButton from "./SubmitButton";

const SignInForm = ({ onSubmit }) => {
    return (
        <View style={{ margin: 10 }}>
        <FormikTextInput name="username" placeholder="Username" />
        <FormikTextInput name="password" placeholder="Password" secureTextEntry />
        <SubmitButton label="Sign In" onSubmit={onSubmit} />
    </View>
    );
};

export default SignInForm