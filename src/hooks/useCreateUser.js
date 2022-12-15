import { useMutation } from "@apollo/client";
import { CREATE_USER } from "../graphql/mutations";

const useCreateUser = () => {
  const [createUserGQL, result] = useMutation(CREATE_USER);

  const createUser = async ({ username, password }) => {
    const response = await createUserGQL({ variables: { username, password } });

    return response.data;
  };
  return [createUser, result];
};

export default useCreateUser;
