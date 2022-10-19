import { useMutation } from "@apollo/client";
import { AUTHENTICATE } from "../graphql/mutations";

const useSignIn = () => {
    const [auth, result] = useMutation(AUTHENTICATE);

    const signIn = async ({ username, password }) => {
        const { data } = await auth({ variables: { username, password } });
        return data;
    };

    return [signIn, result];
};

export default useSignIn;