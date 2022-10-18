import { Formik } from "formik";
import { View } from "react-native";
import * as yup from 'yup';
import FormikTextInput from "./FormikTextInput";
import SubmitButton from "./SubmitButton";

const validationSchema = yup.object().shape({
    username: yup.string().required('Username is required'),
    password: yup.string().required('Password is required')
});

const initialValues = {
    username: '',
    password: ''
};

const SignInForm = ({ onSubmit }) => {
    return (
        <Formik initialValues={initialValues} validationSchema={validationSchema} >
            <View style={{ margin: 10 }}>
                <FormikTextInput name="username" placeholder="Username" />
                <FormikTextInput name="password" placeholder="Password" secureTextEntry />
                <SubmitButton label="Sign In" onSubmit={onSubmit} />
            </View>
        </Formik>
    );
};

export default SignInForm