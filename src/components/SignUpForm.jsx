import { View } from "react-native";
import theme from "../../theme";
import FormikTextInput from "./FormikTextInput";
import SubmitButton from "./SubmitButton";
import Text from "./Text";

const SignUpForm = ({ onSubmit, error }) => {
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
      <FormikTextInput
        testID="passwordConfirmationField"
        name="passwordConfirmation"
        placeholder="Confirm password"
        secureTextEntry
      />
      {error && (
        <Text
          style={{
            textAlign: "center",
            marginBottom: 10,
            color: theme.colors.error,
          }}
        >
          {error}
        </Text>
      )}
      <SubmitButton testID="submitBtn" label="Sign Up" onSubmit={onSubmit} />
    </View>
  );
};

export default SignUpForm;
