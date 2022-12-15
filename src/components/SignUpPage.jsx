import { Formik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-native";
import * as yup from "yup";
import useCreateUser from "../hooks/useCreateUser";
import useSignIn from "../hooks/useSignIn";
import SignUpForm from "./SignUpForm";

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required("Username is required")
    .max(30, "Username cannot be longer than 30 characters"),
  password: yup
    .string()
    .required("Password is required")
    .min(5, "Password must be at least 5 characters")
    .max(50, "Password cannot be longer than 50 characters"),
  passwordConfirmation: yup
    .string()
    .required("Password confirmation is required")
    .oneOf([yup.ref("password")], "Passwords don't match"),
});

const initialValues = {
  username: "",
  password: "",
  passwordConfirmation: "",
};

export const SignUpContainer = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ handleSubmit }) => <SignUpForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

const SignUpPage = () => {
  const [signUp] = useCreateUser();
  const [signIn] = useSignIn();
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      const data = await signUp({ username, password });
      if (data) {
        await signIn({ username, password });
        navigate("/");
      }
    } catch (e) {
      setError(`${e.message}`);
      setTimeout(() => {
        setError(null);
      }, 4000);
    }
  };

  return <SignUpContainer onSubmit={onSubmit} error={error} />;
};

export default SignUpPage;
