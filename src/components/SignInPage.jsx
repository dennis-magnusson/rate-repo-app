import { Formik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-native";
import * as yup from "yup";
import useSignIn from "../hooks/useSignIn";
import SignInForm from "./SignInForm";

const validationSchema = yup.object().shape({
  username: yup.string().required("Username is required"),
  password: yup.string().required("Password is required"),
});

const initialValues = {
  username: "",
  password: "",
};

export const SignInContainer = ({ onSubmit, error }) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} error={error} />}
    </Formik>
  );
};

const SignInPage = () => {
  const [signIn] = useSignIn();
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      await signIn({ username, password });
      navigate("/");
    } catch (e) {
      console.log(e.message);
      setError(`${e.message}`);
      setTimeout(() => {
        setError(null);
      }, 4000);
    }
  };

  return <SignInContainer onSubmit={onSubmit} error={error} />;
};

export default SignInPage;
