import { Formik } from "formik";
import { View } from "react-native";
import FormikTextInput from "./FormikTextInput";
import SubmitButton from "./SubmitButton";

const initialValues = {
    username: '',
    password: ''
};

const SignInForm = ({ onSubmit }) => {
    return (
        <Formik initialValues={initialValues} >
            <View style={{ margin: 10 }}>
                <FormikTextInput name="username" placeholder="Username" />
                <FormikTextInput name="password" placeholder="Password" secureTextEntry />
                <SubmitButton label="Sign In" onSubmit={onSubmit} />
            </View>
        </Formik>
    );
};

export default SignInForm