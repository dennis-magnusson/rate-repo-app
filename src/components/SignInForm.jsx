import { View } from "react-native";
import FormikTextInput from "./FormikTextInput";
import SubmitButton from "./SubmitButton";

const SignInForm = ({ onSubmit }) => {
  return (
    <View style={{ margin: 10 }}>
      <FormikTextInput
        testID="usernameField"
        name="username"
        placeholder="Username"
      />
      <FormikTextInput
        testID="passwordField"
        name="password"
        placeholder="Password"
        secureTextEntry
      />
      <SubmitButton testID="submitBtn" label="Sign In" onSubmit={onSubmit} />
    </View>
  );
};

export default SignInForm;
