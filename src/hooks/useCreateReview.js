import { useMutation } from "@apollo/client";
import { CREATE_REVIEW } from "../graphql/mutations";

const useCreateReview = () => {
  const [createReviewGQL, result] = useMutation(CREATE_REVIEW);

  const createReview = async ({ ownerName, repositoryName, text, rating }) => {
    const response = await createReviewGQL({
      variables: {
        ownerName,
        repositoryName,
        text,
        rating: Math.floor(rating),
      },
    });

    console.log(response)

    return response.data.createReview;
  };
  return [createReview, result];
};

export default useCreateReview;
