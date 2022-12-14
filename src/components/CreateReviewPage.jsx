import { Formik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-native";
import * as yup from "yup";
import useCreateReview from "../hooks/useCreateReview";
import CreateReviewForm from "./CreateReviewForm";

const validationSchema = yup.object().shape({
  repoOwnerName: yup.string().required("Repository owner name is required"),
  repoName: yup.string().required("Repository name is required"),
  rating: yup
    .number("Rating must be a number")
    .min(0, "Rating must be at least 0")
    .max(100, "Rating can be at most 100")
    .required("Rating is required"),
});

const initialValues = {
  repoOwnerName: "",
  repoName: "",
  rating: "",
  review: "",
};

export const CreateReviewContainer = ({ onSubmit, error }) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ handleSubmit }) => (
        <CreateReviewForm onSubmit={handleSubmit} error={error} />
      )}
    </Formik>
  );
};

const CreateReviewPage = () => {
  const [error, setError] = useState(null);
  const [createReview] = useCreateReview();
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    const variables = {
      repositoryName: values.repoName,
      ownerName: values.repoOwnerName,
      rating: values.rating,
      text: values.review,
    };

    try {
      const data = await createReview(variables);
      navigate(`/repository/${data.repositoryId}`);
    } catch (e) {
      setError(`${e.message}`);
      setTimeout(() => {
        setError(null);
      }, 4000);
    }
  };

  return <CreateReviewContainer onSubmit={onSubmit} error={error} />;
};

export default CreateReviewPage;
